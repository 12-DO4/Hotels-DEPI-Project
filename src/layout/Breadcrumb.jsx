import React from 'react'
import '../assets/css/breadcrumb.css'
import { Link } from 'react-router-dom'

function Breadcrumb({ pageName }) {
  return (
    <section className="breadcrumb text-white p-rel">
      <div className="overlay w-100">
        <div className="container py-5">
          <div className="breadcrumb-content my-5 py-5">
            <h3 className="text-center">{ pageName }</h3>
          </div>
        </div>
      </div>
      <nav className="breadcrumb-menu p-3 rounded-3 sec-bg" aria-label="breadcrumb">
        <ol className="breadcrumb m-0 p-0 flex-nowrap">
          <li className="breadcrumb-item"><Link to={'/'}>Home</Link></li>
          <li className="breadcrumb-item" aria-current="page">{ pageName }</li>
        </ol>
      </nav>
    </section>
  )
}

export default Breadcrumb