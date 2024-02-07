import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Outlet } from 'react-router'
import { ScrollRestoration } from 'react-router-dom'

function Layout() {
  return (
    <>
    <Navbar/>
    <ScrollRestoration />
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Layout