import React, { createContext, useState } from 'react';
import { generateRandomArray } from './functions/generateRandomArray';
import BubbleSort from './algorithms/BubbleSort';
import InsertionSort from './algorithms/InsertionSort';
import SelectionSort from './algorithms/SelectionSort';
import QuickSort from './algorithms/QuickSort';
import MeregSort from './algorithms/MergeSort';

// Create the context
export const DataContext = createContext();

// Create a provider component
export const DataProvider = ({ children }) => {
  const [data, setData] = useState(generateRandomArray(10, 10, 150));
  const [method,setMethod]=useState("Select Algorithm");
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
      }, index * 1000); // adjust speed as needed
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
    }else if(method=="SelectionSort"){
      console.log("inside bubble sort array type")
      var results=SelectionSort([...data],data.length);

      setBar(results);
    }else if(method=="QuickSort"){
      console.log("inside quick sort array type")
      var results=QuickSort([...data],data.length);
      console.log(results);
      setBar(results);
    }else if(method=="MergeSort"){
      console.log("inside quick sort array type")
      var results=MeregSort([...data],data.length);
      console.log(results);
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
