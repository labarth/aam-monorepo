export interface SignInPayload {
  email: string;
  password: string;
}

export interface SignUpPayload {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface ErrorPayload {
  type?: string;
  message?: string;
  code?: number;
}

export interface User {
  email: string;
  firstName: string;
  lastName: string;
  token: string;
}

export interface AuthState {
  error: ErrorPayload;
}