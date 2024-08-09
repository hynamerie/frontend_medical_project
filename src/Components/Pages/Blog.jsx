import React from 'react'
import imgUrl from "../../assets/pana2.png"

const Blog = () => {
  return (
    <div className='service-page'>
      <h2>Health Blog</h2>
      <div>
        <img src={imgUrl} style={{height: "40vh"}}/>
      </div>
      <p>
        Love yourself enough to live a healthy style.
      </p>
    </div>
  )
}

export default Blog