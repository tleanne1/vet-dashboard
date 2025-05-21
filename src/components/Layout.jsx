import React from 'react'
import Navbar from './Navbar'

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Navbar />
      <main>{children}</main>
    </div>
  )
}

export default Layout
