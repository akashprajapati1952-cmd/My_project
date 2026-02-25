import React from 'react';
import {Link} from 'react-router-dom';

export default function PageNotFound(){
  return <div className="relative grow">
    <img className="w-full h-full object-cover" src="/notfound.png" alt="Not_found_img"/>
    <div class="absolute top-[60%] left-[20%] flex flex-col items-center gap-2">
      <p>The page you are trying to reach does not exist.</p>
      <Link className="bg-blue-300 px-3 py-1 border rounded-xl" to="/">Go to Homepage</Link>
    </div>
  </div>;
};