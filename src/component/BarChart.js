import React from 'react';

const BarChart = ({ data }) => {
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
