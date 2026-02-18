import React, { useState, useEffect } from 'react';
import Product from './Product.jsx';
import {dataList} from './Api.jsx';



function Content() {
  const [allData, setAllData]=useState([]);
  const [str, setStr]=useState("");
  const [sort, setSort]=useState("default");
  
  useEffect(function() {
    const t=dataList();
    t.then(function(mydummyData){
      setAllData(mydummyData.data.products)
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
  let mydata=[];
  if(allData.length > 0){
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
  
  
  
  
  
  return(
    <div className="relative flex flex-col box-border mx-5 my-2 sm:mx-20 sm:my-7 grow bg-white min-h-[calc(90vh-16px)] sm:min-h-[calc(90vh-56px)]">
      <input className="absolute top-3 left-3 sm:top-10 sm:left-10 w-[25%] p-1 border border-gray-300 bg-gray-200 text-xs " placeholder="Search"  onInput={controlSearch}></input>
      <select className="absolute top-3 right-3 sm:top-10 sm:right-10 ml-auto w-[25%] p-1 border border-gray-300 bg-gray-200 text-xs" onChange={controlSorting} value={sort}>
        <option value="default" >Default sorting</option>
        <option value="title">Sort by title</option>
        <option value="pricelow">Sort by price:low to high</option>
        <option value="pricehigh">Sort by price:high to low</option>
      </select>
      <div className="flex mx-10 my-20  items-start gap-5 content-start justify-evenly flex-wrap grow overflow-auto">
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
      </div>
      
      <div className="flex gap-1 absolute bottom-3 left-3 sm:bottom-10 sm:left-10">
        <div className="text-white flex items-center justify-center text-xs border border-red-700 h-4 w-4 bg-red-700">1</div>
        <div className="flex items-center justify-center text-xs text-red-700 border border-red-700 h-4 w-4">2</div>
        <div className="flex items-center justify-center text-xs text-red-700 border border-red-700 h-4 w-4">→</div>
      </div>
    </div>
)};
export default Content;