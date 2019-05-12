import React from 'react'
import Button from './button.js';
import HG from './hg.js';


const T1B = ({ texts={} }) => (
  <div className="t1b">
    <HG h1={ texts.h1 } />
    { texts.list &&
      <ul>
        {texts.list.map( satr => <li>{satr}</li>)}
      </ul>
    }
    <p>{ texts.p }</p>
    <Button text={ texts.b0 } type={3}/> 
  </div>
)

export default T1B