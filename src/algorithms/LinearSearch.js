import React from 'react'

const LinearSearch = (arr,length,target) => {
  var results=[];
  var found=false;
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
        found=true;
        break;  
    }    
  }
  if(!found){results.push({
    array: JSON.parse(JSON.stringify(arr)),
    comparing: [],
    found:null  , 
});}
  return results;
}

export default LinearSearch
