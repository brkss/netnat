import { Response } from "express";

export const sendRefreshToken = (res: Response, _token: string) => {
  res.cookie("ujid", _token, {
    httpOnly: true,
    maxAge: 1000 * 60 * 60 * 24 * 7,
  });
};
