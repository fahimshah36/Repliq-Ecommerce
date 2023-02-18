import type {NextApiRequest, NextApiResponse} from "next";
import jwt from "jsonwebtoken";

const SECRET_KEY = "your-secret-key-here";

type LoginRequestBody = {
  phoneNumber: string;
  password: string;
};

type LoginResponseBody = {
  token: string;
};

const loginHandler = async (
  req: NextApiRequest,
  res: NextApiResponse<LoginResponseBody>
) => {
  if (req.method === "POST") {
    const {phoneNumber, password}: LoginRequestBody = req.body;

    // Check if the user exists in your database and verify their password here.

    const token = jwt.sign({phoneNumber}, SECRET_KEY);

    res.status(200).json({token});
  } else {
    // res.status(405).json({message: "Method Not Allowed"});
  }
};

export default loginHandler;
