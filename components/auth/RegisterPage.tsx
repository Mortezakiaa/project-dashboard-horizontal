"use client";

// react
import { FormEvent, useState } from "react";
// next
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
// types
import { CreateAdminProps } from "@/types/auth.types";
// actions
import { createAdmin } from "@/actions/auth.action";
// hooks
import useServerAction from "@/hooks/callServerAction";
// constants
import { images } from "@/constants";
// components
import SpinLoader from "../shared/SpinLoader";
import toast from "react-hot-toast";

const RegisterPage = () => {
  const router = useRouter();
  const [form, setForm] = useState<CreateAdminProps>({
    username: "",
    name: "",
    password: "",
  });

  const { loading, fn } = useServerAction(createAdmin, form, () =>
    router.push("/login")
  );

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!form.password || !form.username || !form.name) {
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
          src={images.authRegister}
          width={450}
          height={450}
          alt="auth-register"
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
          <h1 className="font-medium text-gray-600 text-[30px] mb-[5px]">
            Adventure starts here 🚀
          </h1>
          <p className="text-gray-500 tracking-tight mb-[25px]">
            Make your app management easy and fun!
          </p>
          <div className="space-y-5">
            <div className="flex flex-col gap-1">
              <label className="font-normal text-sm">Username</label>
              <input
                name="username"
                type="text"
                value={form.username}
                onChange={changeHandler}
                placeholder="Username"
                className="placeholder:text-xs border border-gray-200 focus:outline focus:outline-black outline-none py-2 px-4 rounded-lg"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="font-normal text-sm">Name</label>
              <input
                name="name"
                type="text"
                value={form.name}
                onChange={changeHandler}
                placeholder="Name"
                className="placeholder:text-xs border border-gray-200 focus:outline focus:outline-black outline-none py-2 px-4 rounded-lg"
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
                className="placeholder:text-xs border border-gray-200 focus:outline focus:outline-black outline-none py-2 px-4 rounded-lg"
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
              <p>Already have account?</p>
              <Link
                href="/login"
                className="bg-gray-100 border text-center py-1 px-4 rounded-lg"
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default RegisterPage;
