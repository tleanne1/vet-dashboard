import React from 'react'

const statusStyles = {
  confirmed: 'bg-teal-100 text-teal-700',
  pending: 'bg-yellow-100 text-yellow-700',
  completed: 'bg-indigo-100 text-indigo-700',
}

const AppointmentCard = ({ appointment }) => {
  return (
    <div className="bg-white border rounded-lg p-4 flex items-start justify-between shadow-sm">
      <div>
        <p className="text-xl font-semibold">{appointment.time}</p>
        <p className="text-lg font-bold mt-1">{appointment.pet}</p>
        <p className="text-sm text-gray-500">{appointment.owner}</p>
      </div>
      <div className="flex flex-col items-end space-y-2">
        <span
          className={`px-2 py-1 text-xs font-semibold rounded-full ${
            statusStyles[appointment.status]
          }`}
        >
          {appointment.status.toUpperCase()}
        </span>
        <div className="flex space-x-2">
          <button className="border px-3 py-1 rounded-md text-sm">Complete</button>
          <button className="border px-3 py-1 rounded-md text-sm">Reschedule</button>
          <button className="border px-3 py-1 rounded-md text-sm">Add Notes</button>
        </div>
      </div>
    </div>
  )
}

export default AppointmentCard
