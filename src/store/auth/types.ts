export enum IRole {
  SUPER_ADMIN = 'superAdmin',
  BRANCH_ADMIN = 'admin',
  RECECPTIONIST = 'recepionist',
  THERAPIST = 'therapist'
}
export interface User {
  email?: string;
  phone?: string;
  type: string;
  userId?: string;
  status?: string;
  created?: number;
  countryCode?: string;
  role: IRole;
  branch_id: number | string;
}

export type UserState = {
  navbar_data: INavData[];
  token: string | null;
  isAuthenticated: boolean;
  status: string;
  error: string | undefined;
  isNavigated: boolean;
};

export interface ISignupServiceRequestProps {
  requestData: User;
}

export interface ResponseUser extends User {}

export interface ISignUpServiceResponse {
  token: string;
  user: ResponseUser;
}

export interface ILoginRequest {
  email: string;
  password: string;
}
export interface INavData {
  display_name: string;
  enable: boolean;
  id: number;
  navbar: number;
  organization: number;
  sub_navbars: any[];
}
export interface IData {
  token: string;
  navbar_data: INavData[];
}
export interface ILoginResponse {
  data: IData;
  // token: string;
  user: ResponseUser;
}
