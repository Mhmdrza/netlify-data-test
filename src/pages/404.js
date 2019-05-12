import React from 'react'
import Layout from '../components/layout'
import text from '../contents/404.js'

const lang = 'fa';

const NotFoundPage = () => (
  <Layout>
    <h1>{text[lang].h1}</h1>
    <p>{text[lang].p}</p>
  </Layout>
)

export default NotFoundPage
