// next
import { cookies } from "next/headers";
// jwt
import { verify } from "jsonwebtoken";
// vars
import { SECRET_KEY } from "./vars";

// TODO: add the correct type to session
export const getServerSession: any = () => {
  try {
    const cookieStore: any = cookies();
    const accessToken = cookieStore.get("accessToken").value;

    const session = verify(accessToken, SECRET_KEY);

    return session;
  } catch (error) {
    return null;
  }
};
