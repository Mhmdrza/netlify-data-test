import React from 'react'
import Layout from 'components/layout'
import Slide3 from 'components/slide-3'
import text from "../../contents/solutions/index"

const lang = 'fa'

const AllSolutions = () => (
  <Layout>
    <Slide3 data={text[lang].slide3}/>
  </Layout>
)

export default AllSolutions
