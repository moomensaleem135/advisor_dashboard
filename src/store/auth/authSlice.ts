import { loginService } from '@/services/auth/loginService';
import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';

import { UserState, User, ILoginRequest, INavData } from './types';
export const signIn = createAsyncThunk('/account/login/', async (requestData: ILoginRequest) => {
  return await loginService(requestData);
});

const getInitialValues = () => {
  let navbar_data: INavData[] = [];
  let token: string = '';
  let isAuthenticated: boolean = false;

  if (typeof window !== 'undefined') {
    const localStorageToken = localStorage.getItem('token');
    const navData = localStorage.getItem('navbar');
    const isAuthenticatedString = localStorage.getItem('isAuthenticated');

    if (navData) {
      const parsedData: INavData[] = JSON.parse(navData);
      navbar_data = parsedData;
    }

    if (localStorageToken) {
      token = localStorageToken;
    }

    if (isAuthenticatedString) {
      isAuthenticated = JSON.parse(isAuthenticatedString);
    }
  }

  return {
    navbar_data,
    token,
    isAuthenticated
  };
};

export const initialState: UserState = {
  navbar_data: getInitialValues().navbar_data,
  token: getInitialValues().token,
  isAuthenticated: getInitialValues().isAuthenticated,
  status: '',
  error: '',
  isNavigated: false
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken(state: UserState, { payload }: PayloadAction<string>) {
      state.token = payload;
    },
    clearError(state: UserState) {
      state.error = '';
    },
    resetUser: () => {
      return initialState;
    },
    resetStatus: (state: UserState) => {
      state.status = '';
    },
    setIsNavigated(state: UserState, { payload }: PayloadAction<boolean>) {
      state.isNavigated = payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(signIn.pending, (state, action) => {
      state.status = 'pending';
    });
    builder.addCase(signIn.rejected, (state, { error }) => {
      state.status = 'rejected';
      state.isAuthenticated = false;

      state.error = error.message;
    });

    builder.addCase(signIn.fulfilled, (state, action) => {
      state.status = 'fulfilled';
      state.isAuthenticated = true;

      state.navbar_data = action.payload.data.navbar_data;
      state.token = action.payload.data.token;

      localStorage.setItem('token', JSON.stringify(action.payload.data.token));
      localStorage.setItem('navbar', JSON.stringify(action.payload.data.navbar_data));
      localStorage.setItem('isAuthenticated', JSON.stringify(state.isAuthenticated));
    });
  }
});

export const {
  resetUser,
  // setUser,
  setToken,
  clearError,
  resetStatus,
  setIsNavigated
} = authSlice.actions;

export default authSlice.reducer;
