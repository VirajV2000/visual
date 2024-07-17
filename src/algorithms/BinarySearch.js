import React from 'react'

const BinarySearch = (arr,length,target)=>{
    var found=false;
    for (let i = 0; i < length-1; i++) {
        for (let j = i + 1; j > 0; j--) {
          if (arr[j] < arr[j-1]) {
            let temp = arr[j];
            arr[j] = arr[j-1];
            arr[j-1] = temp;       
          }else{
            break;
          }
        }
      }
    var results=[];
    var start=0;
    var end=length-1;
    while(start<=end){
        results.push({
            array: JSON.parse(JSON.stringify(arr)),
            comparing: [start,end],
        });
        var mid=start+Math.floor((end-start)/2);
        if (target>arr[mid]) {
            start=mid+1;
        } else if (target<arr[mid]) {
            end=mid-1;
        }
        else if(target==arr[mid]){
            results.push({
                array: JSON.parse(JSON.stringify(arr)),
                comparing: [mid],
                found:mid,
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
// const sort=(arr,length)=>{
//   for (let i = 0; i < length-1; i++) {
//     for (let j = i + 1; j > 0; j--) {
//       if (arr[j] < arr[j-1]) {
//         let temp = arr[j];
//         arr[j] = arr[j-1];
//         arr[j-1] = temp;       
//       }else{
//         break;
//       }
      
//     }
//   }
//   return arr;
// }
export default BinarySearch
