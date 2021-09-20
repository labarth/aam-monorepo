import { APIService } from 'common/services/APIService';
import { SignUpPayload } from 'modules/Auth/interfaces';

const prefix = 'auth';

export const signInService = ({ email, password }: { email: string; password: string; }) => APIService.post(`${prefix}/login`, { email, password });

export const isAuthService = (token: string) => APIService.post(prefix, { token });

export const signUpService = (data: SignUpPayload) => APIService.post(`${prefix}/signup`, data);