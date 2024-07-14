import React, { useContext, useState } from 'react'
import BubbleSort from '../algorithms/BubbleSort';
import SortControl from './SortControl';
import { DataContext } from '../DataContext';
import { Link } from 'react-router-dom';

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
    <Link className="navbar-brand" to="#">Navbar</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="#"onClick={randomizeArray}>Randomize</Link>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            {method}
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="#" onClick={()=>{handleAlgorithmChange("BubbleSort");console.log(method);}}>Bubble sort</Link></li>
            <li><Link className="dropdown-item" to="#" onClick={()=>{handleAlgorithmChange("InsertionSort");console.log(method);}}>Insertion Sort</Link></li>
            <li><Link className="dropdown-item" to="#" onClick={()=>{handleAlgorithmChange("SelectionSort");console.log(method);}}>Selection Sort</Link></li>
            <li><Link className="dropdown-item" to="#" onClick={()=>{handleAlgorithmChange("QuickSort");console.log(method);}}>Quick Sort</Link></li>
            <li><Link className="dropdown-item" to="#" onClick={()=>{handleAlgorithmChange("MergeSort");console.log(method);}}>Merge Sort</Link></li>




            {/* <li><Link className="dropdown-item" to="#">Something else here</Link></li> */}
          </ul>
        </li>
        <li className="nav-item">
          <Link className="nav-link disabled" aria-disabled="true">Disabled</Link>
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
