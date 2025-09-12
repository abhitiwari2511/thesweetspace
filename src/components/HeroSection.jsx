import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const HeroSection = () => {
  return (
    <div className="relative mt-20 py-6 flex items-center justify-center">
      <div className="flex justify-between w-full max-w-[65rem] items-center">
        <div className="text-center w-[22rem] h-[25rem] bg-zinc-100 bg-opacity-70 rounded-lg shadow-lg text-black">
          <img
            src="src/assets/bgmain.jpg"
            alt="Cake Image"
            className="object-cover w-full h-full p-4 rounded-lg"
          />
        </div>
        <div className="space-y-8 text-center flex flex-col font-bold text-black">
          <div className="text-5xl">Wake Up Early</div>
          <span className="text-6xl bg-fuchsia-900 rounded-lg p-2 text-white">
            Eat Fresh & Yummy
          </span>
          <Link to={"/products"}>
            <Button className="text-amber-950 w-fit mx-auto mt-10 rounded-none text-xl bg-cyan-200 hover:bg-cyan-300 cursor-pointer">
              Check Menu
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
