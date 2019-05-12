import React from 'react'
//import TrackVisibility from 'react-on-screen';
import LazyLoad from 'react-lazyload';


// const Image = ({ animation, classes, src, alt, once }) => {
//   return <TrackVisibility partialVisibility once={once}>
//     {({ isVisible }) => (
//       <LazyLoad height={200}>
//         <img alt={alt? alt : ''} src={src} className={`${isVisible ? 'animated ' + animation : 'hide '} ${classes}`}/>
//       </LazyLoad>
//     )}
//   </TrackVisibility>
// }
const Image = ({ animation, classes, src, alt, once }) => {
  return  (
    <LazyLoad height={200}>
      <img alt={alt? alt : ''} src={src} className={`animated ${animation} ${classes}`}/>
    </LazyLoad>
  )
}
    
export default Image
