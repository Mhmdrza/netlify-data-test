import React from 'react'
import Layout from 'components/layout'
import Slide1 from 'components/slide-1'
import Slide3 from 'components/slide-3'
import text from "../../contents/products/user-provisioning"

const lang = 'fa';

const IndexPage = () => (
  <Layout>
    <div className="header-fake-bg"/>
    <Slide1 data={text[lang].slide1} inverted/>
    <Slide3 data={text[lang].slide2}/>
    <Slide3 data={text[lang].slide3} whiteBackground/>
  </Layout>
)

export default IndexPage
