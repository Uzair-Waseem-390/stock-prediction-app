import React from 'react'

const Botton = (props) => {
  return (
    <>
    <a className={`btn ${props.class || 'btn-outline-info'}`} href={props.href}>{props.text}</a>
    </>
  )
}

export default Botton