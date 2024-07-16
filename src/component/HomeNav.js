import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { DataContext } from '../DataContext';

const HomeNav = (props) => {
  const { randomizeArray,method ,setMethod} = useContext(DataContext);

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
        {props.type!=="search" &&
        <li className="nav-item">
          <Link className="nav-link" to="/search">Search</Link>
        </li>}
        {props.type=="sort" &&
        <li className="nav-item">
          <Link className="nav-link" to="/sort">Sort</Link>
        </li>}
        <li className="nav-item">
          <Link className="nav-link" to="#"onClick={randomizeArray}>Randomize</Link>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            select 
          </Link>
          {props.type=="search" && 
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="#" >Linear Search</Link></li>
            <li><Link className="dropdown-item" to="#" >Binear Search </Link></li>
            {/* <li><Link className="dropdown-item" to="#">Something else here</Link></li> */}
          </ul>}
        </li>
        <li className="nav-item">
          <Link className="nav-link disabled" aria-disabled="true">Disabled</Link>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success"  >Sort</button>
      </form>
    </div>
  </div>
</nav>
  )
}

export default HomeNav
