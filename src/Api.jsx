import React, {useState} from 'react';
import axios from 'axios';

export function productDetail(id){
  return axios.get("https://dummyjson.com/product/"+id).then(function(response){
    return response.data;
  });
}
export function dataList(){
  return axios.get("https://dummyjson.com/products").then(function(response){
    return response.data.products;
  });
  }