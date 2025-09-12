import React from "react";

const Navbar = () => {
  return (
    <div className="border select-none border-zinc-600 overflow-hidden w-full max-w-[40rem] left-1/2 transform -translate-x-1/2 absolute top-4">
      <div className="flex bg-cyan-50 max-w-[39rem] m-1.5 text-lg cursor-pointer p-2 justify-between items-center mx-auto">
        <div className="text-lg font-bold text-violet-900 bg-green-300 p-2">The Sweet Space</div>
        <div className="flex font-medium gap-8">
          <div className="text-violet-900 bg-green-300 p-2">Home</div>
          <div className="text-violet-900 bg-green-300 p-2">Products</div>
          <div className="text-violet-900 bg-green-300 p-2">About</div>
        </div>  
      </div>
    </div>
  );
};

export default Navbar;
