import React from 'react'
import UnderLine from 'images/headers-underneath.png'


const HG = ({ h1, h2 }) => (
  <>
    <h1>{h1}</h1>
    { h2 && <h2>{h2}</h2> }
    <img alt="" src={UnderLine} className='under-line--orange'/>
  </>
)

export default HG
