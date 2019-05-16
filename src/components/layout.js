import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import '../components/styles/layout.css'
import '../normalize.css'
import '../defered styles/iran-sans.css'
import '../defered styles/font-awesome.css'
import Header from './header'
import Footer from './footer';
import SEO from '../components/seo'


const Layout = ({ children, seoKeywords, seoPageDescription }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        {/* <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} /> */}
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: seoPageDescription },
            { name: 'keywords', content: seoKeywords },
          ]}
        >
          <html lang="fa" dir="rtl"/>
          {/* <link rel="stylesheet" href="/iran-sans.css" media="none" onload="if(media!='all')media='all'"></link>
          <link rel="stylesheet" href="/font-awesome.css" media="none" onload="if(media!='all')media='all'"></link> */}
        </Helmet>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div className="page">
          {children}
          <Footer/>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
