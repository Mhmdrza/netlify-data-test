import React from 'react'
import Layout from 'components/layout'
import Slide31 from 'components/slide-3'
import text from "../../contents/products/index"

const lang = 'fa';

const AllProducts = () => (
  <Layout>
    <Slide31 data={text[lang].slide31}/>
  </Layout>
)

export default AllProducts