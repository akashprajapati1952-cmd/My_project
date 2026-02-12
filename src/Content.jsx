import { useState } from 'react'
import Products from './Products.jsx'

function Content() {
  return(
    <div class="relative flex flex-col box-border mx-5 my-2 sm:mx-20 sm:my-7 grow bg-white ">
      <select class="absolute top-3 right-3 sm:top-10 sm:right-10 ml-auto w-[25%] p-1 border border-gray-300 bg-gray-200 text-xs">
        <option value="default sorting" selected>Default sorting</option>
        <option value="mug">Mugs</option>
        <option value="t-shirt">T-shirts</option>
        <option value="mobile">Mobiles</option>
      </select>
      <Products></Products>
      <div class="flex gap-1 absolute bottom-3 left-3 sm:bottom-10 sm:left-10">
        <div class="text-white flex items-center justify-center text-xs border border-red-700 h-4 w-4 bg-red-700">1</div>
        <div class="flex items-center justify-center text-xs text-red-700 border border-red-700 h-4 w-4">2</div>
        <div class="flex items-center justify-center text-xs text-red-700 border border-red-700 h-4 w-4">→</div>
        
      </div>
      
    </div>
  );
}
export default Content