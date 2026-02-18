import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom'
import { HiArrowLeft } from "react-icons/hi";
import {Link} from 'react-router-dom'
import {dataList} from './Api.jsx';

function Productdetail() {
  let [quant, setquant]=useState(1)
  const [allData, setAllData]=useState([]);
  useEffect(function() {
    const t=dataList();
    t.then(function(mydummyData){
      setAllData(mydummyData.data.products)
    });
  }, []);
  
  const {id}=useParams();
  let product=[];
  for(let i=0;i<allData.length;i++){
    if(+allData[i].id == +id){
      product=allData[i];
      break;
    }
  }
  const {thumbnail, category, title, description, price, detail}=product;
  

  
  
  function quantChange(event){
    let newquant=event.target.value;
    setquant(newquant)
  }
  
  return(
    <div className=" flex p-8 relative w-full min-h-[400px] bg-white gap-4 flex-col items-center">
      <Link to='/' className ="absolute left-1 top-2 "><HiArrowLeft className="w-10" /></Link>
      <img className="w-[70%] " src={thumbnail}></img>
      <div className="flex flex-col p-2 gap-2">
        <h2 className=" text-sm text-gray-500 font-bold">{category}</h2>
        <h1 className="text-2xl font-bold">{title}</h1>
        
        <h2 className=" text-lg font-bold">₹{price}</h2>
        <p className="text-md">{description}</p>
        <div className="flex gap-2">
          <input onChange={quantChange} className="w-10 border border-indigo-700" type="number" value={quant}></input>
          <button className="bg-red-700 text-white px-5 py-1">ADD TO CART</button>
        </div>
      </div>
    </div>
  );
}

export default Productdetail;