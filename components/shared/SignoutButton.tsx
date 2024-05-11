"use client";

// actions
import { signOut } from "@/actions/auth.action";
// constants
import { icons } from "@/constants";

const SignoutButton = () => {
  return (
    <button
      onClick={() => signOut()}
      className="p-2 hover:bg-gray-100 rounded-full Transition text-[22px]"
    >
      {icons.power}
    </button>
  );
};

export default SignoutButton;
