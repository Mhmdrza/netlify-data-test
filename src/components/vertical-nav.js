import React from 'react';
import { Link } from 'gatsby';
//import Ink from 'react-ink';




const VT = () => (
  <>
    <nav className="vertical-nav">
      <span>آتین</span>
      <Link to={'/fellan/'}>مشتریان</Link>
      <Link to={'/fellan2/'}>قیمت‌گذاری</Link>
      <Link to={'/fellan3/'}>سوالات متداول</Link>
      <Link to={'/fellan4/'}>دانلود منابع</Link>
      <Link to={'/fellan5/'}>توسعه‌دهندگان</Link>
    </nav>
  </> 
);

export default VT;
