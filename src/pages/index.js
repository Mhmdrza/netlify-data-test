import React from 'react'
import { graphql } from 'gatsby'
import '../defered styles/iran-sans.css'
import text from "../contents/index"
import Layout from 'components/layout'
import Slide1 from '../components/slide-1'
import Slide2 from '../components/slide-2'
import Slide21 from '../components/slide-2'
import Slide3 from '../components/slide-3'
import Slide31 from '../components/slide-3'

const lang = 'fa'

const LandingPage = (props) =>{
  let imageSource = props.data
  return(
    <Layout>
      <Slide1 data={text[lang].slide1} customSlideClass="slide-1-landing" mainImage={imageSource.Slide1.childImageSharp.fluid}/>
      <Slide2 data={text[lang].slide2} animationClass='fadeIn' mainImage={imageSource.Slide2.childImageSharp.fluid}/>
      <Slide3 data={text[lang].slide3}/>
      <Slide21 data={text[lang].slide21} reverse animationClass='fadeIn' mainImage={imageSource.Slide3.childImageSharp.fluid}/>
      <Slide31 data={text[lang].slide31}/>
    </Layout>
  )
}

export default LandingPage

export const query = graphql`
  query {
    Slide1 : file(relativePath: { eq: "Group-180.png" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    Slide2 : file(relativePath: { eq: "Group-177.png" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    Slide3 : file(relativePath: { eq: "Group 181.png" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`