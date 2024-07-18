import { profileStuff } from "@/constants";
import Image from "next/image";
import React from "react";

const YourData = () => {
  return (
    <div className="flex flex-col gap-2 max-w-full ml-4 pt-10 text-white  ">
      <div className="flex border-0 p-2 rounded-lg md:ml-[120px]">
        <div className="rounded-full">
          <Image
            src="/img/img.jpg"
            alt="Your Iamge"
            width={40}
            height={40}
            className="rounded-full mr-2"
          />
        </div>
        <div className="flex flex-col">
          <span className="text-2xl font-semibold">Your Name Nigga</span>
          <span className="text-md">Description or rather...Status</span>
        </div>
      </div>
      <div className="mt-[20px]">
      <div className="flex w-full justify-start md:justify-evenly  gap-1 mt-[20px]">
        {
            profileStuff.map((item) => (
                <div className="p-2 bg-slate-600 rounded-2xl md:w-[150px] " key={item.label}>
                    <div className="flex justify-center">
                    {item.label}
                    </div>
                </div>
            ))
        }
      </div>
      </div>
    </div>
  );
};

export default YourData;
