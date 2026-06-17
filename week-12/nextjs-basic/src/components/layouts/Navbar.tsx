import Link from "next/link";
import React from "react";

import { menu } from "../../constants/menu";

const Navbar = () => {
  return (
    <div className="w-full">
      <div className="flex justify-center items-center">
        {menu?.map((element, index) => {
          return (
            <div key={index} className="my-2">
              <Link
                className="py-2 px-3 border border-gray-200 rounded-md hover:bg-blue-700 hover:text-white"
                href={element.href}
              >
                {element.name}
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Navbar;
