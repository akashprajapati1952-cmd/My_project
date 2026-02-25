import React, { useState, useEffect } from 'react';
import Product from './Product.jsx';
import {dataList} from './Api.jsx';
import Loading from './Loading.jsx';
import ErrorPage from './ErrorPage';



function Content() {
  const [allData, setAllData]=useState();
  const [str, setStr]=useState("");
  const [sort, setSort]=useState("default");
  const [loading, setLoading]=useState(true);
  const [error, setError]=useState('');
  
  useEffect(function() {
    dataList().then(function(mydummyData){
      setAllData(mydummyData);
      setLoading(false);
    }).catch(function(error){
      setLoading(false);
      setError(error.message)
    });
  }, []);
  
  function controlSearch(event){
    let newStr=event.target.value;
    setStr(newStr);
  };
  function controlSorting(event){
    let newSort=event.target.value;
    setSort(newSort);
  };
  if(error){
    return <div className="flex grow justify-center items-center flex-col gap-2">
      <h1 clasdName="text-2xl text-red-700">{error}</h1>
    </div>;
  };
  let mydata;
  if(!loading){
    mydata=allData.filter(
      function(product){
        return (product.title.toLowerCase().indexOf(str.toLowerCase()) != -1) || (product.category.toLowerCase().indexOf(str.toLowerCase()) != -1)
      }
    );
  
  
    if(sort=="pricehigh"){
    mydata.sort(function(a,b){
      return (+b.price - +a.price);
    });
  }
    else if(sort=="pricelow"){
      mydata.sort(function(a,b){
        return (+a.price - +b.price);
      });
    }
    else if(sort=="title"){
      mydata.sort(function(a,b){
        if(a.name < b.name){
          return -1;
        }
      else{
        return 1;
       }
      });
    }
    else{
      mydata.sort(function(a,b){
        return 0;
      });
    }
  }
  if(loading){
    return <Loading>Loading products...</Loading>;
  }
  
  
  
  return(
    <div className="relative flex flex-col box-border overflow-auto w-full h-full">
      <input className="absolute top-3 left-3 sm:top-10 sm:left-10 w-[25%] p-1 border border-gray-300 bg-gray-200 text-xs " placeholder="Search"  onInput={controlSearch}></input>
      <select className="absolute top-3 right-3 sm:top-10 sm:right-10 ml-auto w-[25%] p-1 border border-gray-300 bg-gray-200 text-xs" onChange={controlSorting} value={sort}>
        <option value="default" >Default sorting</option>
        <option value="title">Sort by title</option>
        <option value="pricelow">Sort by price:low to high</option>
        <option value="pricehigh">Sort by price:high to low</option>
      </select>
      { mydata.length > 1 ? <div className="grid mx-10 my-20 gap-2 grid-cols-3  w-[calc(100%-80px)] ">
        {mydata.map(function(product){
          return(<Product pic={product.thumbnail}
               key={product.id}
               name={product.title}
               price={product.price}
               catagory={product.category}
               id={product.id}
        
          />
          );
        })}
      </div> : <div className=" text-red-700 self-center pt-[30vh]">Match not found!</div>}
      
      <div className="flex gap-1 m-3">
        <div className="text-white flex items-center justify-center text-xs border border-red-700 h-4 w-4 bg-red-700">1</div>
        <div className="flex items-center justify-center text-xs text-red-700 border border-red-700 h-4 w-4">2</div>
        <div className="flex items-center justify-center text-xs text-red-700 border border-red-700 h-4 w-4">→</div>
      </div>
    </div> 
)};
export default Content;