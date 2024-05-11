// react
import { getServerSession } from "@/utils/session";
import { redirect } from "next/navigation";
import React from "react";

const AuthLayout = async ({ children }: { children: React.ReactNode }) => {
  const session = getServerSession();
  if (session) {
    redirect("/dashboard");
  }
  return <main>{children}</main>;
};

export default AuthLayout;
