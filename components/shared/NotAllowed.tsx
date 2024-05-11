// next
import Image from "next/image";
// constants
import { images } from "@/constants";

const NotAllowed = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-5">
      <Image
        src={images.notAllowed}
        width={100}
        height={100}
        alt="not allowed"
        priority
      />
      <div className="w-full">
        <h1 className="text-2xl font-black text-gray-600 text-center mb-5">
          Access blocked!
        </h1>
      </div>
    </div>
  );
};

export default NotAllowed;
