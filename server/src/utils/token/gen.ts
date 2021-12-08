import * as jwt from "jsonwebtoken";

interface IGenTokenResponse {
  status: boolean;
  token?: string;
}

export const genToken = (uid: string): IGenTokenResponse => {
  if (!uid) return { status: false };

  try {
    console.log("-----------------------");
    console.log("id : ", uid);
    console.log("-----------------------");
    const token = jwt.sign({ uid: uid }, process.env.SECRET!);
    return { status: true, token: token };
  } catch (e) {
    console.log("Error accured while generating token e : ", e);
    return { status: false };
  }
};
