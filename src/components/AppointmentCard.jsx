import React from 'react'

const statusStyles = {
  confirmed: 'bg-teal-100 text-teal-700',
  pending: 'bg-yellow-100 text-yellow-700',
  completed: 'bg-indigo-100 text-indigo-700',
}

const AppointmentCard = ({ appointment }) => (
  <div className="bg-white border border-gray-200 rounded-lg p-4 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 shadow-sm">
    <div>
      <p className="text-xl font-semibold">{appointment.time}</p>
      <p className="text-lg font-bold mt-1">{appointment.pet}</p>
      <p className="text-sm text-gray-500">{appointment.owner}</p>
    </div>
    <div className="flex flex-col sm:items-end space-y-2">
      <span className={`px-2 py-1 text-xs font-semibold rounded-full ${statusStyles[appointment.status]}`}>
        {appointment.status.toUpperCase()}
      </span>
      <div className="flex flex-col sm:flex-row sm:space-x-2 space-y-2 sm:space-y-0">
        <button className="border border-gray-300 text-gray-700 px-3 py-1 rounded-md text-sm hover:bg-slate-100 transition">
          Complete
        </button>
        <button className="border border-gray-300 text-gray-700 px-3 py-1 rounded-md text-sm hover:bg-slate-100 transition">
          Reschedule
        </button>
        <button className="border border-gray-300 text-gray-700 px-3 py-1 rounded-md text-sm hover:bg-slate-100 transition">
          Add Notes
        </button>
      </div>
    </div>
  </div>
)

export default AppointmentCard

