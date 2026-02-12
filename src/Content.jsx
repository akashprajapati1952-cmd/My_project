import { useState } from 'react'
import Products from './Products.jsx'

function Content() {
  return(
    <div class="relative flex flex-col mx-20 mt-7 mb-[calc(5vh+28px)] grow bg-white overflow-auto max-h-[
    calc(90vh-56px)]">
      <select class="absolute top-10 right-10 w-[25%] p-1 border border-gray-300 bg-gray-200 text-xs">
        <option value="default sorting" selected>Default sorting</option>
        <option value="mug">Mugs</option>
        <option value="t-shirt">T-shirts</option>
        <option value="mobile">Mobiles</option>
      </select>
      <Products></Products>
      <div class="flex gap-1 absolute bottom-10 left-10">
        <div class="text-white flex items-center justify-center text-xs border border-red-700 h-4 w-4 bg-red-700">1</div>
        <div class="flex items-center justify-center text-xs text-red-700 border border-red-700 h-4 w-4">2</div>
        <div class="flex items-center justify-center text-xs text-red-700 border border-red-700 h-4 w-4">→</div>
        
      </div>
      
    </div>
  );
}
export default Content