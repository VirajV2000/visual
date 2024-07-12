import React from 'react'

const QuickSort = (arr,length) => {
    var results=[];
    Sort(arr,0,length-1,results);
    results.push({
        array: JSON.parse(JSON.stringify(arr)),   
        comparing: [],     //for red color bar
      });
    return results;
}

const Sort=(arr,low,high,results)=>{
    if(low<high){
        let pivot=partition(arr,low,high,results);
    
        Sort(arr,0,pivot-1,results);
        Sort(arr,pivot+1,high,results);
    }
}
const partition=(arr,low,high ,results)=>{
    let pivot=arr[high];
    let i=low-1;
    for (let j = low; j < high; j++){
        
        results.push({
            array: JSON.parse(JSON.stringify(arr)),   
            comparing: [j,high],     //for red color bar
          });
        if(arr[j]<pivot){
            i++;
            swap(arr,i,j)
         }
            
    }
    swap(arr,i+1,high);
    results.push({
        array: JSON.parse(JSON.stringify(arr)),   
        comparing: [i+1,high],     //for red color bar
      });
    return i+1;
}

const swap=(arr,i,j)=>{
    let temp=arr[i];
    arr[i]=arr[j];
    arr[j]=temp;
}
export default QuickSort
