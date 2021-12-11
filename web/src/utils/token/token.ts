let token: string = "";

export const setAccessToken = (_token: string) => {
  token = _token;
};

export const getAccessToken = () => {
  return token;
};
