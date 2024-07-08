import React from 'react'

const BubbleSort = (arr,length) => {
    var results=[];
    for (let i = 0; i <length; i++) {
            for (let j = 0; j < length-1-i; j++) {
                    if(arr[j]>arr[j+1]){
                        let temp=arr[j];
                        arr[j]=arr[j+1];
                        arr[j+1]=temp;
                    } 
                    results.push({
                        array: JSON.parse(JSON.stringify(arr)),
                        comparing: [j, j + 1]
                    });                }        
    }
    return results;
}

export default BubbleSort
