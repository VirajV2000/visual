import React, { useContext } from 'react'
import BubbleSort from '../algorithms/BubbleSort'
import { DataContext } from '../DataContext';
var results=[];
const SortControl = () => {
      const { data, sortArray,method ,setMethod,setData} = useContext(DataContext);

//   if(method==="BubbleSort"){
//         BubbleSort(arr,length);
//   }
if(method === "BubbleSort"){
    console.log("inside bubble")
    // setData(BubbleSort(data,data.length));
    results=BubbleSort(data,data.length);
    console.log(results);
    for (let i = 0; i < results.length; i++) {
      setTimeout(()=>{
        setData(results[i]);
        console.log(results[i]);
      },3000);
    }
    console.log(data);
  }
  else{
    alert("Select an algorithm");
  }
}

export default SortControl
