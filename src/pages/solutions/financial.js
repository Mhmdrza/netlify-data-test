import React from 'react'
import Layout from 'components/layout'
import Slide1 from 'components/slide-1'
import Slide2 from 'components/slide-2'
import Slide3 from 'components/slide-3'
import text from "../../contents/solutions/financial"

const lang = 'fa'

const IndexPage = () => (
  <Layout>
    <Slide1 data={text[lang].slide1}/>
    <Slide3 data={text[lang].slide3}/>
    <Slide2 data={text[lang].slide2} animationClass='fadeIn'/>  
  </Layout>
)

export default IndexPage
