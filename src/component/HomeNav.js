import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { DataContext } from '../DataContext';

const HomeNav = (props) => {
  const { randomizeArray,method ,setMethod,search} = useContext(DataContext);
  const handleAlgorithmChange = (algorithm) => {
    setMethod(algorithm);
    console.log("Selected Algorithm:", algorithm);
  };
  const handleSearchClick = (event) => {
    event.preventDefault();

    const target=document.getElementById('input').value;
    if(target){
      console.log("clicked")
      search(target);
    }else{
      alert("Enter a value to search");
    }
    
  };
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
          <Link className="nav-link" to="/search">Search</Link>
        </li>
        
        <li className="nav-item">
          <Link className="nav-link" to="/sort">Sort</Link>
        </li>
        {(props.type=="sort" || props.type=="search") &&
        <li className="nav-item">
          <Link className="nav-link" to="#"onClick={randomizeArray}>Randomize</Link>
        </li>}
        {(props.type!=undefined || props.type=="search" )&& 
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            {method} 
          </Link>
          
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="#" onClick={()=>{handleAlgorithmChange("LinearSearch");console.log(method);}}>Linear Search</Link></li>
            <li><Link className="dropdown-item" to="#"  onClick={()=>{handleAlgorithmChange("BinarySearch");console.log(method);}}>Binear Search </Link></li>
            {/* <li><Link className="dropdown-item" to="#">Something else here</Link></li> */}
          </ul>
        </li>}
        <li className="nav-item">
          <Link className="nav-link disabled" aria-disabled="true">Disabled</Link>
        </li>
      </ul>
      {props.type==undefined || props.type=="search" &&
      <form className="d-flex" role="search">
        <input className="form-control me-2" id="input" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success"  onClick={handleSearchClick}>Search</button>
      </form>}
    </div>
  </div>
</nav>
  )
}

export default HomeNav
