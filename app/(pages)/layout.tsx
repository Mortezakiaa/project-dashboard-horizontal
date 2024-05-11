// react
import React from "react";
// next
import { redirect } from "next/navigation";
// utils
import { getServerSession } from "@/utils/session";
// components
import Navbar from "@/components/shared/Navbar";
import NotAllowed from "@/components/shared/NotAllowed";
import Sidebar from "@/components/shared/Sidebar";

const PagesLayout = async ({ children }: { children: React.ReactNode }) => {
  const session = getServerSession();
  // if (!session) {
  //   redirect("/login");
  // }

  return (
    <div>
      <Navbar />
      <Sidebar />
      <div className="pages_spaces">
        {children}
        {/* {session.roll === "USER" ? <NotAllowed /> : children} */}
      </div>
    </div>
  );
};

export default PagesLayout;
