import React, { createContext, useState } from 'react';
import { generateRandomArray } from './functions/generateRandomArray';
import BubbleSort from './algorithms/BubbleSort';

// Create the context
export const DataContext = createContext();

// Create a provider component
export const DataProvider = ({ children }) => {
  const [data, setData] = useState(generateRandomArray(10, 10, 150));
  const [method,setMethod]=useState("Algorithm");
  const [comparing, setComparing] = useState([]);


  const randomizeArray = (method) => {
    setData(generateRandomArray(10, 10, 150));
    setComparing([]);
  };

  const sortArray = () => {
    console.log(method);
    if(method === "BubbleSort"){
      console.log("inside bubble sort array type")
      var results=BubbleSort([...data],data.length);
      console.log(results);
      for (let i = 0; i < results.length; i++) {
        setTimeout(()=>{
          setData(results[i]);
          console.log(results[i]);
        },i*1000);
      }
      // setData(sortedarray);
    }
    else{
      alert("Select an algorithm");
    }
  };

  return (
    <DataContext.Provider value={{ data,method ,randomizeArray, sortArray ,setData,setMethod}}>
      {children}
    </DataContext.Provider>
  );
};
