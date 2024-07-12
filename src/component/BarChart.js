import React, { useContext, useEffect, useState } from 'react';
import { DataContext } from '../DataContext';

const BarChart = () => {
  const { data,comparing} = useContext(DataContext);
  const [swappingIndices, setSwappingIndices] = useState([]);
 
  useEffect(() => {
    if (comparing.length > 0) {
      setSwappingIndices(comparing);
      setTimeout(() => {
        setSwappingIndices([]);
      }, 500); // Duration of the swap animation
    }
  }, [comparing]);
  
  return (
    <div className="container">
      <div className="bar-chart my-5">
        
      {data.map((value, index) => (
        <div
          key={index}
          className={`bar ${swappingIndices.includes(index) ? 'swapping' : ''}`}
          style={{
            height: `${value*5}px`,
            width:'100px',
            backgroundColor: comparing.includes(index) ? 'red' : '#3498db',
          }}
        >
          {value} 
        </div>
      ))}
    </div>
    </div>
    
  );
};

export default BarChart;
