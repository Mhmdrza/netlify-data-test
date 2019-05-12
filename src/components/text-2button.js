import React from 'react'
import Button from './button.js';



const T2B = ({ texts={}, inverted }) => (
  <div className={`t2b ${inverted ? 't2b-inverted' : ''}`}>
    <h1>{ texts.h1 }</h1>
    <p className="white">{ texts.p }</p>
    <br/>
    <Button text={texts.b0} type={inverted ? '1i' : '1'} icon={'fa fa-angle-left'}/>
    <Button text={texts.b1} type={inverted ? '2i' : '2'}/>  
  </div>
)                       

export default T2B