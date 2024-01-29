import { Col } from 'react-bootstrap'
import { CircleCross } from '../../assets/icons/svgIcons'
import React from 'react'
import { NavLink } from 'react-router-dom'

interface headsection {
    title:string
}
const index : React.FC<headsection> = ({title}) => {
  return (
    <Col xs={12} className="d-flex justify-content-between align-items-center" style={{height : 60}}>
    <p className="my-auto text-white fs-24-400 text-capitalize">{title}</p>
    <div className="icon-box">
        <NavLink to={'/'}>
        <CircleCross color={'white'} className={'cursor-pointer'} />
        </NavLink>
    </div>
</Col>
  )
}

export default index