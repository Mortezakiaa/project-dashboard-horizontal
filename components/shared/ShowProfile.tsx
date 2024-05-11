// next
import Image from "next/image";
import Link from "next/link";
// constants
import { images } from "@/constants";

const ShowProfile = () => {
  const session: any = null;

  return (
    <Link href="/account" className="relative ml-2">
      <Image
        src={session?.data?.user?.image || images.person}
        width={60}
        height={60}
        priority
        alt="user"
        className="rounded-full w-[35px] h-[35px] object-cover"
      />
      <div className="w-[13px] h-[13px] border-2 border-white rounded-full bg-green-400 absolute bottom-0 -right-1" />
    </Link>
  );
};

export default ShowProfile;
