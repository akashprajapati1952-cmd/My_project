import React from 'react';
import { VscLoading } from "react-icons/vsc";

export default function Loading({children}){
  return <div className="flex items-center justify-center">
    <VscLoading className="animate-spin text-blue-700 text-5xl"/>
    <p className="text-xl text-blue-700">{children}</p>
    </div>;
};