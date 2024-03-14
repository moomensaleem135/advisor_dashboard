import { combineReducers } from '@reduxjs/toolkit';

import app from './app';
import auth from './auth';

const rootReducer = combineReducers({
  auth,
  app
});

export type AppState = ReturnType<typeof rootReducer>;
export default rootReducer;
