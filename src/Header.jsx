import { useState } from 'react'
import { CiShoppingCart } from "react-icons/ci";

function Header({src, data}) {
  return(
    <div class="flex w-[100vw] h-[5vh] items-center justify-between px-5 sm:px-20 py-5 bg-white">
      <img class="w-30" src={src} alt="_logo"></img>
      <div className="flex flex-col relative items-center">
        <CiShoppingCart  className="text-5xl" />
        <div className="absolute top-[14px]">{data}</div>
      </div>
      
    </div>
  );
}
export default Header