import React, { useContext, useState } from 'react'
import BubbleSort from '../algorithms/BubbleSort';
import SortControl from './SortControl';
import { DataContext } from '../DataContext';

const Navbar = () => {
  const { randomizeArray, sortArray,method ,setMethod} = useContext(DataContext);

    console.log("onclick type:",typeof onClick);
    console.log(sortArray);
    const handleSortClick = (event) => {
      event.preventDefault();

      console.log("clicked")
      sortArray();
    };
    const handleAlgorithmChange = (algorithm) => {
      setMethod(algorithm);
      console.log("Selected Algorithm:", algorithm);
    };
    // const [method,setMethod]=useState("Algorithm");
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#"onClick={randomizeArray}>Randomize</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Select algorithm
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#" onClick={()=>{handleAlgorithmChange("BubbleSort");console.log(method);}}>Bubble sort</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success"  onClick={handleSortClick}>Sort</button>
      </form>
    </div>
  </div>
</nav>
  )
}

export default Navbar
