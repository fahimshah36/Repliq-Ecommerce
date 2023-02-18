import type {NextApiRequest, NextApiResponse} from "next";
import jwt from "jsonwebtoken";

const SECRET_KEY = "your-secret-key-here";

type RegisterRequestBody = {
  phoneNumber: string;
  password: string;
};

type RegisterResponseBody = {
  token: string;
};

const registerHandler = async (
  req: NextApiRequest,
  res: NextApiResponse<RegisterResponseBody>
) => {
  if (req.method === "POST") {
    const {phoneNumber, password}: RegisterRequestBody = req.body;

    console.log(req.body);

    const token = jwt.sign({phoneNumber}, SECRET_KEY);

    res.status(200).json({token});
  } else {
    // res.status(405).json({ message: "Method Not Allowed" });
  }
};

export default registerHandler;
