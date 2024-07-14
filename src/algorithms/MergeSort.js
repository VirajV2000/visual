import React from 'react'

const MergeSort = (arr,length) => {
    console.log(arr);
    var results=[];
    Msort(arr,0,length-1,results);
    console.log(arr);
    return results;
}
const Msort=(arr,l,r,results)=>{
    if(l<r){
        results.push({
            array: JSON.parse(JSON.stringify(arr)),   
            comparing: [l,r],     //for red color bar
          });
        let mid=Math.floor((l+r)/2);
        console.log(mid);
        Msort(arr,l,mid,results);
        Msort(arr,mid+1,r,results);

        Merge(arr,l,mid,r,results);
        results.push({
            array: JSON.parse(JSON.stringify(arr)),   
            comparing: [],     //for red color bar
          });
    }
}
const Merge=(arr,l,mid,r,results)=>{
    let n1=mid-l+1;
    let n2=r-mid;
    let L=[];
    let R=[];
    for(let i=0;i<n1;i++){
        L[i]=arr[l+i];
        
    }
    for (let j = 0; j <n2; j++) {
        R[j]=arr[mid+1+j];
        
    }
    let i=0,j=0;
    let k=l;
    while(i<n1 && j<n2){
        if(L[i]<=R[j]){
            arr[k]=L[i];
            i++;
            k++;
            
        }else{
            arr[k]=R[j];
            j++;
            k++;
        }
    }
    while(i<n1){
        arr[k]=L[i];
        i++;
        k++;
    }
    while(j<n2){
        arr[k]=R[j];
        j++;
        k++;
    }
}
export default MergeSort
