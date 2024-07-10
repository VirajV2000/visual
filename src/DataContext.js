import React, { createContext, useState } from 'react';
import { generateRandomArray } from './functions/generateRandomArray';
import BubbleSort from './algorithms/BubbleSort';
import InsertionSort from './algorithms/InsertionSort';

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
  const setBar=(results)=>{
    results.forEach((step, index) => {
      setTimeout(() => {
        setData(step.array);
        setComparing(step.comparing);
        console.log(step.array);
      }, index * 300); // adjust speed as needed
    });
  }

  const sortArray = () => {
    console.log(method);
    if(method === "BubbleSort"){
      console.log("inside bubble sort array type")
      var results=BubbleSort([...data],data.length);
      console.log(results);
      
      setBar(results);
      // setData(sortedarray);
    }else if(method=="InsertionSort"){
        var results=InsertionSort([...data],data.length);
        console.log(results.array);
        setBar(results);
    }
    else{
      alert("Select an algorithm");
    }
  };

  return (
    <DataContext.Provider value={{ data,method ,randomizeArray, sortArray ,setData,setMethod,comparing,setComparing}}>
      {children}
    </DataContext.Provider>
  );
};
