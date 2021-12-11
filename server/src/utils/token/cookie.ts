import { Response } from "express";

export const sendRefreshToken = (res: Response, _token: string) => {
  res.cookie("ujid", _token, {
    httpOnly: true,
  });
};
