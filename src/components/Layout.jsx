import React from 'react'
import Navbar from './Navbar'

const Layout = ({ children }) => (
  <div className="min-h-screen bg-gray-50 text-gray-800">
    <Navbar />
    <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      {children}
    </main>
  </div>
)

export default Layout
