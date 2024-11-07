import React from 'react'
import imgUrl from "../../assets/cuate2.png"

const Blog = () => {
  return (
    <div className='service-page'>
      <h2>Health Blog</h2>
      <p>
        Love yourself enough to live a healthy style.
      </p>
      <div>
        <img src={imgUrl} />
      </div>
    </div>
  )
}

export default Blog