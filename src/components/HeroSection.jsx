import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";

const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <div className="relative mt-16 sm:mt-20 py-4 sm:py-6 px-4 sm:px-6 flex items-center justify-center">
      <div className="flex flex-col md:flex-row justify-between w-full max-w-[65rem] items-center gap-6 md:gap-8">
        <div className="text-center w-full sm:w-[20rem] md:w-[22rem] h-[20rem] sm:h-[22rem] md:h-[25rem] bg-zinc-100 bg-opacity-70 rounded-lg shadow-lg text-black">
          <img
            src="https://plus.unsplash.com/premium_photo-1713447395823-2e0b40b75a89?q=80&w=382&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Cake Image"
            className="object-cover w-full h-full p-3 sm:p-4 rounded-lg"
          />
        </div>
        <div className="flex flex-col w-full md:w-auto">
          <div className="space-y-4 sm:space-y-6 md:space-y-8 text-center flex flex-col font-bold text-black">
            <div className="text-3xl sm:text-4xl md:text-5xl">
              Wake Up Early
            </div>
            <span className="text-4xl sm:text-5xl md:text-6xl bg-fuchsia-900 rounded-lg p-2 sm:p-3 md:p-4 text-white">
              Eat Fresh & Yummy
            </span>
          </div>
          <div className="w-fit mx-auto">
            <Button
              onClick={() => {
                window.scrollTo(0, 0);
                navigate("/products");
              }}
              className="text-amber-950 mx-auto flex justify-center items-center mt-6 sm:mt-8 md:mt-10 rounded-md text-lg sm:text-xl px-6 sm:px-8 py-2 sm:py-3 bg-cyan-200 hover:bg-cyan-300 cursor-pointer"
            >
              Check Menu
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
