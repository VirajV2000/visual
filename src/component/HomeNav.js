import React from 'react'
import { Link } from 'react-router-dom'

const HomeNav = () => {
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
          <Link className="nav-link active" aria-current="page" to="#">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/search">Search</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/sort">Sort</Link>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            select 
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="#" >Bubble sort</Link></li>
            <li><Link className="dropdown-item" to="#" >Insertion Sort</Link></li>
            <li><Link className="dropdown-item" to="#">Selection Sort</Link></li>
            <li><Link className="dropdown-item" to="#" >ck Sort</Link></li>
            <li><Link className="dropdown-item" to="#" >ge Sort</Link></li>




            {/* <li><Link className="dropdown-item" to="#">Something else here</Link></li> */}
          </ul>
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
