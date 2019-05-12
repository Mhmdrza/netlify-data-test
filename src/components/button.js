import React from 'react'

const Header = ({ text, type, icon }) => (
  <button className={`btn type-${type}`}>{text}<i className={`btn_icon ${icon? icon :''}`} /></button>
)

export default Header
