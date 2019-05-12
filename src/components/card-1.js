import React from 'react'
import { Link } from 'gatsby'

const Card = ({ heading, text, icon, img, url }) => (
    <Link className="card-base" to={url}>
        { img && <img className={`img-1`} alt="" src={img}/>}
        { icon && <i className={`img-2 ${icon}`} />}
        <h2>{heading}</h2>
        <p>{text}</p>
    </Link>
)

export default Card