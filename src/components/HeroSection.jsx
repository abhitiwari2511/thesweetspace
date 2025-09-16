import { Link, useNavigate } from "react-router-dom";
import { Button } from "./ui/button";

const HeroSection = () => {
  const navigate = useNavigate();
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
        <div className="flex flex-col">
          <div className="space-y-8 text-center flex flex-col font-bold text-black">
            <div className="text-5xl">Wake Up Early</div>
            <span className="text-6xl bg-fuchsia-900 rounded-lg p-2 text-white">
              Eat Fresh & Yummy
            </span>
          </div>
          <div className="w-fit mx-auto">
              <Button onClick={() => {
                window.scrollTo(0,0)
                navigate("/products")
              }} className="text-amber-950 mx-auto flex justify-center items-center mt-10 rounded-md text-xl bg-cyan-200 hover:bg-cyan-300 cursor-pointer">
                Check Menu
              </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
