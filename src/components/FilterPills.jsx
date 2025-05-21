import React from 'react'

const filters = ['All Veterinarians', 'All Pet Owners', 'All Species', 'All Status']

const FilterPills = () => (
  <div className="flex flex-wrap gap-3 mt-6">
    {filters.map((label, index) => (
      <button
        key={index}
        className="bg-white border border-gray-300 px-4 py-2 rounded-full text-sm text-gray-700 hover:bg-teal-50 hover:border-teal-500"
      >
        {label}
      </button>
    ))}
  </div>
)

export default FilterPills
