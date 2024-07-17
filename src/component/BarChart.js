import React, { useContext, useEffect, useState } from 'react';
import { DataContext } from '../DataContext';
import Navbar from './Navbar';
import HomeNav from './HomeNav';

const BarChart = (props) => {
  const { data,comparing,foundIndex} = useContext(DataContext);
  const [swappingIndices, setSwappingIndices] = useState([]);
 
  useEffect(() => {
    if (comparing.length > 0) {
      setSwappingIndices(comparing);
      setTimeout(() => {
        setSwappingIndices([]);
      }, 500); 
    }
  }, [comparing]);
  
  return (
    <>
    {props.type=="sort" && <Navbar/>}
    {props.type=="search" && <HomeNav type="search"/>}

    <div className="container">
      <div className="bar-chart my-5">
        
      {data.map((value, index) => (
        <div
          key={index}
          className={`bar`}
          style={{
            height: `${value*5}px`,
            width:'100px',
            backgroundColor: foundIndex === index ? 'green' :(comparing.includes(index) ? 'red' : '#3498db'),
          }}
        >
          {value} 
        </div>
      ))}
    </div>
    </div>
    </>
  );
};

export default BarChart;
