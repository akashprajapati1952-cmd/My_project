import react, { useState, useEffect } from 'react'
import {data} from './Api.jsx'

const [allData, setAllData]=useState([]);
useEffect(function() {
  const fetchedData=data();
  setAllData(fetchedData)
  }, []);

const [str, setStr]=useState("");
const [sort, setSort]=useState("default")
export function controlSearch(event){
    let newStr=event.target.value;
    setStr(newStr);
}
let data=allData.filter(
    function(product){
      return product.name.toLowerCase().indexOf(str.toLowerCase()) != -1
    }
  );
  function controlSorting(event){
    let newSort=event.target.value;
    setSort(newSort);
  }
  if(sort=="pricehigh"){
    data.sort(function(a,b){
      return (+b.price - +a.price);
    });
  }
  else if(sort=="pricelow"){
    data.sort(function(a,b){
      return (+a.price - +b.price);
    });
  }
  else if(sort=="title"){
    data.sort(function(a,b){
      if(a.name < b.name){
        return -1;
      }
      else{
        return 1;
      }
    });
  }
  else{
    data.sort(function(a,b){
      return 0;
    });
    }
    