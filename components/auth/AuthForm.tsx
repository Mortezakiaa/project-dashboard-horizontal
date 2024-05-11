// types
import { AuthFormType } from "@/types/auth.types";
// components
import RegisterPage from "./RegisterPage";
import LoginPage from "./LoginPage";

const AuthForm = ({ type }: { type: AuthFormType }) => {
  return (
    <>
      {type === "register" && <RegisterPage />}
      {type === "login" && <LoginPage />}
    </>
  );
};

export default AuthForm;
