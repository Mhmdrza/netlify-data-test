import React from 'react'
import T2B from './text-2button'
import AnimatedImage from './animated-image-on-screen';
import Img from 'gatsby-image'


const Slide1 = ({ data={}, inverted, customSlideClass, mainImage }) => (
  <div className={`screen ${ customSlideClass ? customSlideClass : 'slide-1'} ${inverted? 'no-bg' : ''}`}>
    <T2B texts={ data.t2b } inverted={inverted}/>
    {/* They are intentionally swicthed their position despite their numerial order */}
    { data.img1 && <img alt="" src={ data.img1 } className="bg-img2"/>}
    { data.img0 && <AnimatedImage src={ data.img0 } animation="fadeIn" classes={`bg-img`}/>}
    { mainImage && <Img fluid={ mainImage } className="bg-img"/> }
  </div>
) 

export default Slide1
