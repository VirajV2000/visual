import React from 'react'
import { Link } from 'react-router-dom'

const Card = (props) => {
  return (
    <div className="card mx-5 mt-5 zoom mp-0" style={{width: '18rem'}}>
        <img src={props.src} className="card-img-top" alt="..."/>
        <div className="card-body text-center">
            <h5 className="card-title">{props.title}</h5>
            <Link to={props.href} className="btn btn-primary ">Visualize</Link>
        </div>
    </div>
  )
}

export default Card
