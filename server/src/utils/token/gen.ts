import * as jwt from "jsonwebtoken";

export const generateAccessToken = (userID: string) => {
  const _token = jwt.sign({ id: userID }, process.env.ACCESS_SECRET!, {
    expiresIn: "15m",
  });

  return _token;
};

export const generateRefreshToken = (userID: string) => {
  const _token = jwt.sign({ id: userID }, process.env.REFRESH_SECRET!, {
    expiresIn: "7d",
  });

  return _token;
};
