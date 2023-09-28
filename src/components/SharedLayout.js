import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'

const SharedLayout = ({onChange, checked, theme}) => {
  return (
    <>
      <Navbar onChange={onChange} checked={checked}/>
      <Outlet />
    </>
  )
}

export default SharedLayout