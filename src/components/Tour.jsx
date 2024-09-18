import React, { useState, useEffect } from "react";
import Card from "../layout/Card";
import axios from "axios";


function Tour() {
  const [travels, setTravels] = useState([])
  
  useEffect(async() => {
    async function handleFetch() {
      const response = await axios.get('/data.json')
      setTravels(response.data['travels']);
    }
    handleFetch();
  }, [])
  
  console.log(travels)

  return (
    <section className="tours p-rel pt-5">
      <div className="container mt-5">
        <div className="row cards row-cols-1 row-cols-md-2 row-cols-xl-3 g-4 px-3 px-md-0">
          <div className="col">
            {/* { travels.map(travel => (
              <Card traveldetails={travel} />
            )) } */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Tour