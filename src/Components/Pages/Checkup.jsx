import React from 'react'
import imgUrl from "../../assets/rafiki2.png"

const Checkup = () => {
  return (
    <div className='service-page'>
      <h2>Check-up</h2>
      <p>
      Stay healthy and live a longer and life with regular health examination.
      </p>
      <div>
        <img src={imgUrl} />
      </div>
    </div>
  )
}

export default Checkup