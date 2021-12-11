import { Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { User } from "../../entity/User";
import { sendRefreshToken } from "./cookie";
import { generateAccessToken, generateRefreshToken } from "./gen";

export const refreshToken = async (req: Request, res: Response) => {
  const _token = req.cookies.ujid;
  if (!_token)
    return res.send({
      status: false,
      message: "token not found",
    });

  // decode token
  let payload: any = null;
  try {
    payload = verify(_token, process.env.REFRESH_SECRET!);
  } catch (e) {
    console.log("something went wrong while parsing token => ", e);
    return res.send({
      status: false,
      message: "bad token !",
    });
  }

  // check if user exist
  const user = await User.findOne({ where: { id: payload.id } });
  if (!user) {
    return res.send({
      status: false,
      token: "",
      message: "User not found !",
    });
  }

  sendRefreshToken(res, generateRefreshToken(user.id));
  return res.send({
    status: true,
    message: "si",
    token: generateAccessToken(user.id),
  });
};
