import React from 'react'

const Navbar = () => {
  return (
    <nav className="bg-white shadow px-6 py-4 flex justify-between items-center">
      <div className="text-xl font-bold text-teal-600">Vet</div>
      <div className="space-x-4 text-sm text-gray-600">
        <a href="#" className="hover:text-teal-600">Dashboard</a>
        <a href="#" className="hover:text-teal-600">Calendar</a>
      </div>
    </nav>
  )
}

export default Navbar
