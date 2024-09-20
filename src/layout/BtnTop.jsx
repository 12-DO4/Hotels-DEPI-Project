import React from 'react'

function BtnTop() {
  
  // go to top function
  const handleScrollToTop = (event) => {
    event.preventDefault(); // Prevent the default action of the link
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Smooth scroll to top
  };

  return (
    <button className="btn btn-secondary btn-up p-3 m-5 rounded-circle text-white position-fixed bottom-0 end-0" onClick={handleScrollToTop}>
      <i className="flaticon-up-chevron d-flex"></i>
    </button>
  )
}

export default BtnTop