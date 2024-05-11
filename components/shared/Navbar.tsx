// next
import Link from "next/link";
// constants
import { icons } from "@/constants";
// components
import ShowProfile from "./ShowProfile";
import MobileNav from "./MobileNavMenu";
import NavbarSearchBox from "./search/NavbarSearchBox";
import SignoutButton from "./SignoutButton";

const Navbar = () => {
  return (
    <header className="lg:backdrop-blur-xl max-lg:bg-white max-md:border-b border-b fixed z-20 left-0 top-0 right-0 p-4 pl-[280px] lg:pl-[270px] max-md:pl-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-[8px]">
          <div className="md:hidden">
            <MobileNav />
          </div>
          <NavbarSearchBox />
        </div>
        <div className="flex items-center gap-[8px]">
          <SignoutButton />
          <button className="p-2 hover:bg-gray-100 rounded-full Transition text-[22px]">
            {icons.moon}
          </button>
          <Link
            href="/notifications"
            className="p-2 hover:bg-gray-100 rounded-full Transition text-[22px]"
          >
            {icons.notification}
          </Link>
          <ShowProfile />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
