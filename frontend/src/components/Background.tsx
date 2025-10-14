import React from "react";

function Background() {
  return (
    <div className="fixed z-[2] w-full h-screen">
      <h1 className="absolute top-2 left-2 text-[8vw] sm:text-[10vw] md:text-[8vw] lg:text-[6vw] leading-none tracking-tighter font-semibold text-zinc-900/70">
        Float
      </h1>
      <h1 className="absolute top-2 right-2 text-[8vw] sm:text-[10vw] md:text-[8vw] lg:text-[6vw] leading-none tracking-tighter font-semibold text-zinc-900/70">
        Notes
      </h1>
    </div>
  );
}

export default Background;
