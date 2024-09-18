import React from 'react'
import '../assets/css/breadcrumb.css'

function Breadcrumb() {
  return (
    <section className="breadcrumb text-white p-rel">
      <div className="overlay w-100">
        <div className="container py-5">
          <div className="breadcrumb-content my-5 py-5">
            <h3 className="text-center">Tour Grid</h3>
          </div>
        </div>
      </div>
      <nav className="breadcrumb-menu p-3 rounded-3 sec-bg" aria-label="breadcrumb">
        <ol className="breadcrumb m-0 p-0 flex-nowrap">
          <li className="breadcrumb-item"><a href="/index.html">Home</a></li>
          <li className="breadcrumb-item" aria-current="page">Tour</li>
        </ol>
      </nav>
    </section>
  )
}

export default Breadcrumb