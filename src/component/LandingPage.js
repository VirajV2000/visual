import React from 'react'
import HomeNav from './HomeNav'
import Card from './Card'

const LandingPage = () => {
  return (
    <>
      <HomeNav/>
      <div className="container my-5 text-center">
        <h2 className='text-center'>Algorithm Visualizer</h2>
        <div className="row d-flex justify-content-center">
          <Card title="Search Algorithm" href="/search"/>
          <Card title="Sort Algorithm" href="/sort"/>
        </div>
      </div>
    </>
  )
}

export default LandingPage
