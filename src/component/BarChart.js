import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../DataContext";
import Navbar from "./Navbar";
import HomeNav from "./HomeNav";

const BarChart = (props) => {
  const { data, comparing, foundIndex } = useContext(DataContext);
  const [swappingIndices, setSwappingIndices] = useState([]);
  const [searchCompleted, setSearchCompleted] = useState(false);

  useEffect(() => {
    if (comparing.length > 0) {
      setSwappingIndices(comparing);
      setTimeout(() => {
        setSwappingIndices([]);
      }, 500);
    }
  }, [comparing]);
  
  useEffect(() => {
    if (foundIndex !== null && comparing.length == 0) {
      setSearchCompleted(true);
    }
  }, [foundIndex, comparing]);
  return (
    <>
      {props.type == "sort" && <Navbar />}
      {props.type == "search" && <HomeNav type="search" />}

      <div className="container">
        <div className="bar-chart my-5">
          {data.map((value, index) => (
            <div
              key={index}
              className="d-flex flex-column align-items-center mx-2"
            >
              <div
                key={index}
                className={`bar`}
                style={{
                  height: `${value * 5}px`,
                  width: "100px",
                  backgroundColor:
                    foundIndex === index
                      ? "green"
                      : comparing.includes(index)
                      ? "red"
                      : "#3498db",
                }}
              >
                {value}
              </div>
              {props.type == "search" && (
                <div className="index-value mt-2">
                  <span
                    className="badge "
                    style={{
                      backgroundColor:
                        foundIndex === index ? "green" : "#007bff",
                    }}
                  >
                    {index}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
        {props.type == "search" && searchCompleted && foundIndex == null && (
          <div className="alert alert-danger mt-3" role="alert">
            Element  not found.
          </div>
        )}
      </div>
    </>
  );
};

export default BarChart;
