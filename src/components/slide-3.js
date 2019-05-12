import React from 'react'
import HG from './hg.js'
import Card from './card-1.js';


const Slide3 = ({ data={}, whiteBackground }) => (
  <div className={`slide-3 ${whiteBackground? 'bg-white' : ''}`}>
    <HG h1={ data.hg.h1 } h2={ data.hg.h2 }/>
    <br/>
    <br/>
    <br/>
    { data.cards && <div className='card-container'> 
      {data.cards.map(card => <Card heading={card.heading} text={card.text} icon={card.icon} img={card.img} url={card.url}/> )}
    </div>}
    { data.p && <p>{data.p}</p>}
  </div>
)

export default Slide3