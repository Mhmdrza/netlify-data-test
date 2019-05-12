import React from 'react'
import VT from './vertical-nav';
import Slide1 from '../components/slide-1'
import Slide1Img0 from '../images/Group 229.svg'
import Slide1Img1 from '../images/World-Map.svg'
import AuthinInfo from '../images/Group 175.png'

const lang = 'fa';
const text = {
  'fa' : {
    'slide11': {
      't2b': {
        'h1': `برنامه‌های خود را امن‌تر سازید`,
        'p': `افزایش بهره وری کاربران و انعطاف پذیری کسب‌وکار با مدیریت
        و نظارت متمرکز بر حساب‌های کاربری`,
        'b0': `ارائه دمو           `,
        'b1': 'ارتباط با پشتیبانی'
      },
      'img0' : Slide1Img0,
      'img1' : Slide1Img1,
    }
  }
}

const Footer = ({ children }) => (
  <footer className="footer">
    <Slide1 data={text[lang].slide11} customSlideClass="footer-slide"/>
    
    <div className="nav-scetion">
      <div className="card-container">
        <img className="authin-info" alt="" src={AuthinInfo}/>
        <VT />
        <VT />
        <VT />
        <VT />
      </div>
      <hr/>
      <p className="copyright"> تمامی حقوق برای شرکت آتین محفوظ می‌باشد ©</p>
      <br/>
    </div>
  </footer>
)

export default Footer
