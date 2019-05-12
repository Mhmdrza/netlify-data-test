import React from 'react'
import Layout from 'components/layout'
import Slide2 from 'components/slide-2'
import LocationOnMaps from 'images/authin-location.png'
import HG from 'components/hg'
import text from "../contents/contactus"

const lang = 'fa';

const AllProducts = () => (
  <Layout>
    <Slide2 data={text[lang].slide2} animationClass='fadeIn'/>
    <div className="screen contactus-slide">
      <div className=' contact-us'>
        <HG h1={text[lang].contactusCard.h1}/> 
        <p>{text[lang].contactusCard.address}</p>
        <p>{text[lang].contactusCard.phone}</p>
        <p>{text[lang].contactusCard.fax}</p>
        <p>
          <a href={'mailto:' +text[lang].contactusCard.email}>{text[lang].contactusCard.email}</a>
        </p>
        <br/>
        <i className="fa fa-facebook-square"/>
        <i className="fa fa-github"/>
        <i className="fa fa-google-plus-square"/>
        <i className="fa fa-skype"/>
        <i className="fa fa-twitter"/>
        <i className="fa fa-whatsapp"/>
      </div>
      <img className="map-image" src={LocationOnMaps} alt="authin location on map" />
    </div>
  </Layout>
)

export default AllProducts