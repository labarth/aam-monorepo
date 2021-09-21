export const saveToken = (isRememberMe: boolean, token: string): void => {
  const storage = isRememberMe ? window.localStorage : window.sessionStorage;

  storage.setItem('token', token);
}

export const getToken = (): string | null => {
  return window.localStorage.getItem('token') || window.sessionStorage.getItem('token');
}

export const clearToken = (): void => {
  window.localStorage.removeItem('token');
  window.sessionStorage.removeItem('token');
}