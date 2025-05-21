import React, { useState } from 'react'

const DateFilter = () => {
  const [selectedDate, setSelectedDate] = useState('')

  return (
    <div className="mt-6">
      <label className="block text-sm text-gray-600 mb-1">Filter by Date:</label>
      <input
        type="date"
        value={selectedDate}
        onChange={(e) => setSelectedDate(e.target.value)}
        className="border border-gray-300 rounded px-3 py-2 text-sm"
      />
    </div>
  )
}

export default DateFilter
