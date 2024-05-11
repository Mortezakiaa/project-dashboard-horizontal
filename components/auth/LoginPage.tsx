"use client";

// react
import { FormEvent, useState } from "react";
// next
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
// actions
import { loginAdmin } from "@/actions/auth.action";
// hooks
import useServerAction from "@/hooks/callServerAction";
// types
import { LoginAdminProps } from "@/types/auth.types";
// constants
import { images } from "@/constants";
// components
import SpinLoader from "../shared/SpinLoader";
import toast from "react-hot-toast";

const LoginPage = () => {
  const router = useRouter();
  const [form, setForm] = useState<LoginAdminProps>({
    username: "",
    password: "",
  });

  const { loading, fn } = useServerAction(loginAdmin, form, () =>
    router.push("/dashboard")
  );

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!form.password || !form.username) {
      toast.error("Fill all fields!");
      return;
    }

    fn();
  };

  const changeHandler = (e: FormEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center gap-[150px] bg-white p-[30px]"
    >
      <div className="max-xl:hidden bg-gray-100 rounded-3xl h-screen w-1/2 flex items-center justify-center">
        <Image
          src={images.authLogin}
          width={450}
          height={450}
          alt="auth-login"
          priority
        />
      </div>
      <div className="max-xl:flex max-xl:items-center max-xl:justify-center max-xl:w-full max-xl:h-screen">
        <div className="sm:w-[400px]">
          <div className="mb-[30px]">
            <Image
              src={images.logo}
              width={40}
              height={40}
              alt="logo"
              priority
            />
          </div>
          <h1 className="font-medium text-gray-600 text-[30px] mb-[10px]">
            Welcome back! 👋🏻
          </h1>
          <p className="text-gray-500 tracking-tight">
            Please sign-in to your account and start the adventure
          </p>
          <div className="bg-violet-100 text-violet-600 rounded-lg px-5 py-3 mt-[30px] mb-[20px] text-sm">
            Username: <span className="font-bold">my-test</span> / Pass:{" "}
            <span className="font-bold">test</span>
          </div>
          <div className="space-y-5">
            <div className="flex flex-col gap-1">
              <label className="font-normal text-sm">Username</label>
              <input
                name="username"
                type="text"
                value={form.username}
                onChange={changeHandler}
                placeholder="Username"
                className="placeholder:text-xs border border-violet-200 focus:outline focus:border-violet-100 py-2 px-4 rounded-lg"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="font-normal text-sm">Password</label>
              <input
                name="password"
                type="password"
                value={form.password}
                onChange={changeHandler}
                placeholder="Password"
                className="placeholder:text-xs border border-violet-200 focus:outline focus:border-violet-100 py-2 px-4 rounded-lg"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className={`${
                loading ? "bg-gray-100" : "bg-black"
              } text-white rounded-lg w-full py-3 font-bold flex justify-center`}
            >
              {loading ? <SpinLoader height={25} width={25} /> : "Submit"}
            </button>
            <div className="flex items-center justify-center gap-4 text-sm font-bold">
              <p>Dont have account?</p>
              <Link
                href="/register"
                className="bg-gray-100 border text-center py-1 px-4 rounded-lg"
              >
                Register
              </Link>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default LoginPage;
