import React from 'react'
import Layout from '../../components/layout'
import Slide1 from '../../components/slide-1'
import Slide3 from '../../components/slide-3'
import { graphql, Link } from 'gatsby'
import Helmet from 'react-helmet'

const lang = 'fa';
let text={}

export const ProductTemplate = ({
  
}) => (
  <Layout>
    <div className="header-fake-bg"/>
    <Slide1 data={text[lang].slide1} inverted/>
    <Slide3 data={text[lang].slide2}/>
    <Slide3 data={text[lang].slide3} whiteBackground/>
  </Layout>
)

const ProductPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <ProductTemplate
        content={post.html}
        description={post.frontmatter.description}
        helmet={
          <Helmet titleTemplate="%s | Blog">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
      />
    </Layout>
  )
}

export default ProductPage

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
      }
    }
  }
`