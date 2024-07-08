import React, { useContext } from 'react';
import { DataContext } from '../DataContext';

const BarChart = () => {
  const { data} = useContext(DataContext);

  return (
    <div className="container">
      <div className="bar-chart my-5">
        
      {data.map((value, index) => (
        <div
          key={index}
          className="bar"
          style={{
            height: `${value*5}px`,
            width:'100px',
            
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
