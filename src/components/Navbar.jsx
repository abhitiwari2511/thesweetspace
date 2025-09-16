import { Cake, CakeSlice } from "lucide-react";
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Products", path: "/products" },
];

const Navbar = () => {
  const location = useLocation();
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoverIndex, setHoverIndex] = useState(null);

  // Set active index based on current route
  useEffect(() => {
    const currentIndex = navItems.findIndex(
      (item) =>
        item.path === location.pathname ||
        (item.path === "/" && location.pathname === "/")
    );
    setActiveIndex(currentIndex >= 0 ? currentIndex : 0);
  }, [location.pathname]);
  
  const getSliderStyle = () => {
    const index = hoverIndex !== null ? hoverIndex : activeIndex;
    return {
      transform: `translateX(${index * 100}%)`,
      transition: "transform 0.3s ease-in-out",
    };
  };

  return (
    <div className="border select-none border-zinc-600 overflow-hidden w-full max-w-[40rem] left-1/2 transform -translate-x-1/2 absolute top-4">
      <div className="flex bg-cyan-50 m-1.5 text-lg cursor-pointer p-2 justify-between items-center mx-auto">
        <Link to="/">
          <div className="text-lg gap-2 items-center flex justify-center font-bold text-violet-900 p-2">
            <Cake className="h-8 w-8"/>
            The Sweet Space
          </div>
        </Link>

        {/* Navigation Items with Sliding Background */}
        <div className="flex font-medium relative">
          {/* Sliding Background */}
          <div
            className="absolute top-0 left-0 h-full bg-pink-300 rounded transition-transform duration-300 ease-in-out z-0"
            style={{
              ...getSliderStyle(),
              width: `${100 / navItems.length}%`,
            }}
          />

          {/* Navigation Links */}
          {navItems.map((item, index) => (
            <Link
              key={item.path}
              to={item.path}
              className="relative z-10"
              onMouseEnter={() => setHoverIndex(index)}
              onMouseLeave={() => setHoverIndex(null)}
            >
              <div className="text-violet-900 px-6 py-2 transition-colors duration-200">
                {item.name}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
