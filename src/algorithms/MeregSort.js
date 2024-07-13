import React from 'react'

const MeregSort = (arr,length) => {
    console.log(arr);
    Msort(arr,0,length-1);
    console.log(arr);
}
const Msort=(arr,l,r)=>{
    if(l<r){
        let mid=(l+r)/2;
        Msort(arr,l,mid);
        Msort(arr,mid+1,r);

        Merge(arr,l,mid,r);
    }
}
const Merge=(arr,l,mid,r)=>{
    let n1=l+mid+1;
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
export default MeregSort
