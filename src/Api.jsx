import React, {useState} from 'react';
import axios from 'axios';

export function dataList(){
  return (axios.get("https://dummyjson.com/products"));
  }