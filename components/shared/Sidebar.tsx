"use client";

// react
import React, { Fragment } from "react";
// next
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
// constants
import { icons, images, menuLinks } from "@/constants";

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside className="w-[250px] border-r border-gray-200 max-md:hidden fixed z-30 left-0 h-screen bg-white overflow-y-auto sidebarScroll">
      <div className="flex items-center justify-between fixed bg-white p-4 top-0 w-[250px] border-r border-gray-200">
        <Link href="/dashboard" className="flex items-center gap-[10px]">
          <Image
            src={images.logo}
            width={35}
            height={35}
            alt="logo"
            priority
            className="ml-[8px]"
          />
          <div className="flex items-center italic font-bold">
            <span className="text-violet-600">Online</span>
            <span>Shop</span>
          </div>
        </Link>
      </div>
      <nav className="pt-[74px] pb-5">
        <ul>
          {menuLinks.map((item) => (
            <Fragment key={item.title}>
              <li
                className={`rounded-l-[10px] ml-4 Transition mb-[2px] ${
                  pathname === item.link
                    ? "bg-gray-100 hover:bg-gray-200 text-purple-600 font-bold border-r-4 border-purple-500"
                    : "bg-white hover:bg-gray-100 font-light"
                }`}
              >
                <Link
                  href={item.link}
                  className="flex items-center gap-[20px] px-[10px] py-[12px]"
                >
                  <div className="icon_size">{item.image}</div>
                  <span className="text-[13px]">{item.title}</span>
                </Link>
              </li>
              {item.title === "Customers" && (
                <div className="w-full h-[1px] my-[10px] bg-gray-200" />
              )}
              {item.title === "Add Blog" && (
                <div className="w-full h-[1px] my-[10px] bg-gray-200" />
              )}
            </Fragment>
          ))}
          <li className="rounded-l-[10px] ml-4 hover:bg-red-50 text-red-600 hover:text-red-700 transition duration-75 ease-in-out">
            <button className="flex items-center w-full gap-[20px] p-[10px]">
              <div className="icon_size">{icons.power}</div>
              <span className="text-[13px] font-light">Exit</span>
            </button>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
