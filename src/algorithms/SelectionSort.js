import React from 'react'

const SelectionSort = (arr,length) => {
    var results=[];
        for (let i = 0; i < arr.length; i++) {
            let last=arr.length-i-1;
            let  max=maxIndex(arr,last);
            swap(arr,last,max);

            results.push({
                array: JSON.parse(JSON.stringify(arr)),   
                 comparing: [],     //for red color bar
              });
        } 
        return results;   
}
const swap=(arr,last,max)=>{
    let temp=arr[last];
    arr[last]=arr[max];
    arr[max]=temp;
}
const maxIndex=(arr,last)=>{
    let max=0;
    for (let j = 0; j <= last; j++) {
        if(arr[j]>arr[max]){
            max=j;
        }
        
    }
    return max;
};
export default SelectionSort
