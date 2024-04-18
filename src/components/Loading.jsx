import React from "react";

const Loading = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center ">
    <div class="w-36 aspect-square text-center rounded-full relative flex justify-center items-center animate-[spin_3s_linear_infinite] z-10 bg-[conic-gradient(#fed2d2_0deg,#fed2d2_300deg,transparent_270deg,transparent_360deg)] before:animate-[spin_2s_linear_infinite] before:absolute before:w-[60%] before:aspect-square before:rounded-full before:z-[80] before:bg-[conic-gradient(white_0deg,white_270deg,transparent_180deg,transparent_360deg)] after:absolute after:w-3/4 after:aspect-square after:rounded-full after:z-[60] after:animate-[spin_3s_linear_infinite] after:bg-[conic-gradient(#db4444_0deg,#db4444_180deg,transparent_180deg,transparent_360deg)]">
      <span class="absolute w-[90%] aspect-square rounded-full z-[60] animate-[spin_5s_linear_infinite] bg-[conic-gradient(#ff5050_0deg,#ff5050_180deg,transparent_180deg,transparent_360deg)]"></span>
    </div>
    </div>
  );
};

export default Loading;
