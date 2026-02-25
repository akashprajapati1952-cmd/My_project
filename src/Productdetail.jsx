import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom'
import { HiArrowLeft } from "react-icons/hi";
import {Link} from 'react-router-dom'
import {productDetail} from './Api.jsx';
import Loading from './Loading.jsx'
import PageNotFound from './PageNotFound.jsx'
import ErrorPage from './ErrorPage.jsx'

function Productdetail({handleCartCount}) {
  const id=+useParams().id;
  const [quant, setquant]=useState(1)
  const [pDetail, setPDetail]=useState();
  const [loading, setLoading]=useState(true);
  const [error, setError]=useState('');
  useEffect(function() {
    productDetail(id).then(function(data){
      setPDetail(data)
      setLoading(false);
    }).catch(function(error){
      setError(error.message);
      setLoading(false);
    });
  }, [id]);
  function handleClickButton(){
    handleCartCount(id, +quant);
  };
  
  
  function quantChange(event){
    let newquant=event.target.value;
    setquant(newquant)
  }

  
  if(loading){
    return <Loading>Loading details</Loading>
  }
  if(error){
     return <ErrorPage>{error}</ErrorPage>
  }
  const {thumbnail, category, title, description, price, detail}=pDetail;
  
  
  
  
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
          <button onClick={handleClickButton} className="bg-red-700 text-white px-5 py-1">ADD TO CART</button>
        </div>
        <div className="flex justify-between mt-8">
          <Link className="font-bold text-indigo-700" to={`/product/${id-1}`}>Previous</Link>
          <Link className="font-bold text-indigo-700" to={`/product/${id+1}`}>Next</Link>
        </div>
      </div>
    </div>
  );
}

export default Productdetail;