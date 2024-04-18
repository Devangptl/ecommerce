import React from "react";

const HomeLoader = () => {
  return (
    <div className="  ">
      <div class=" flex flex-col gap-4 items-center ">
        <div class="animate-pulse rounded-md bg-[#c6c8cb] h-[132px] w-[132px] md:h-[220px] md:w-[220px]  "></div>
        <div class="space-y-2">
          <div class="animate-pulse rounded-md bg-[#c6c8cb] h-4 w-[132px] md:w-[140px]">
            {" "}
          </div>
          <div class="animate-pulse rounded-md bg-[#c6c8cb] h-4 w-[90px] md:w-[100px]">
            {" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeLoader;
