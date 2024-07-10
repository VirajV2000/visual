import React from "react";

const InsertionSort = (arr, length) => {
  var results = [];
  for (let i = 0; i < length-1; i++) {
    for (let j = i + 1; j > 0; j--) {
      if (arr[j] < arr[j-1]) {
        let temp = arr[j];
        arr[j] = arr[j-1];
        arr[j-1] = temp;       
      }else{
        break;
      }
      results.push({
        array: JSON.parse(JSON.stringify(arr)),
        comparing: [j, j - 1],
      });
      
    }
    
  }
  results.push({
    array: JSON.parse(JSON.stringify(arr)),
    comparing: [],
  });
  return results;
};

export default InsertionSort;
