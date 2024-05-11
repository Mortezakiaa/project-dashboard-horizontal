import { JwtPayload } from "jsonwebtoken";

export type AuthFormType = "login" | "register";

export type CreateAdminProps = {
  name: string;
  username: string;
  password: string;
};

export type LoginAdminProps = {
  username: string;
  password: string;
};

export type SessionData = JwtPayload & {
  username: string;
  userId: string;
  name: string;
  avatar: string;
  roll: string;
};
