import React from 'react'
import T1B from './text-1button'
import AnimatedImage from './animated-image-on-screen';
import Img from 'gatsby-image'

const Slide2 = ({ data={}, reverse, animationClass, mainImage }) => (
  <div className={`screen slide-2 ${ reverse ? 'slide-21' : 'slide-20'}`}>
    <T1B texts={ data.t1b }/>
    { mainImage && <Img fluid={ mainImage } className="bg-img"/> }
    { data.img0 && <AnimatedImage src={ data.img0 } animation="fadeIn" classes={`bg-img`}/>}
    <img alt="" src={ data.img1 } className="bg-img2"/>
    {/* <img src={Img3} className="bg-img3"/> */}
  </div>
)

export default Slide2