import React from 'react'
import {Link} from 'react-router-dom'

const Botton = (props) => {
  return (
    <>
    <Link className={`btn ${props.class || 'btn-outline-info'}`} to={props.url}>{props.text}</Link>
    </>
  )
}

export default Botton