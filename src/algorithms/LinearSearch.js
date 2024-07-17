import React from 'react'

const LinearSearch = (arr,length,target) => {
  var results=[];
  console.log("Linear search target",target);
  for (let i = 0; i < length; i++) {
    results.push({
        array: JSON.parse(JSON.stringify(arr)),
        comparing: [i],
    });
    // console.log(typeof(target))
    if(arr[i] == target){

        results.push({
            array: JSON.parse(JSON.stringify(arr)),
            comparing: [i],
            found:i,
        });
        break;  
    }    
  }
  return results;
}

export default LinearSearch
