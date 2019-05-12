/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it
const React = require('react')

exports.onRenderBody = ({ setPreBodyComponents }) => {
  setPreBodyComponents([
    <noscript key="noscript">Your browser does not support JavaScript!</noscript>,
    <div key="pre-render" className="header-fake-bg" style={{
      position: 'fixed',
      top:'0',
      left:'0',
      width: '100%',
      boxShadow: '0 1px 22px 0 rgba(21, 107, 227, 0.6)',
      backgroundImage: 'linear-gradient(275deg, #0058cb, #2276f2)',
      height: '5rem',
    }}/>
  ])
}