import React from 'react'
import Layout from './components/Layout'
import FilterPills from './components/FilterPills'
import AppointmentCard from './components/AppointmentCard'
import DateFilter from './components/DateFilter'

const appointments = [
  {
    time: '8:00 AM',
    pet: 'Phoebe',
    owner: 'John Smith',
    status: 'confirmed',
  },
  {
    time: '9:30 AM',
    pet: 'Muffin',
    owner: 'Sarah Johnson',
    status: 'pending',
  },
  {
    time: '11:00 AM',
    pet: 'Bella',
    owner: 'Emily Davis',
    status: 'confirmed',
  },
  {
    time: '1:00 PM',
    pet: 'Louie',
    owner: 'Michael Brown',
    status: 'completed',
  },
]

const App = () => {
  return (
    <Layout>
      <div className="p-6">
        <h1 className="text-2xl font-bold text-gray-700 mb-4">Appointments</h1>
        <DateFilter />
        <FilterPills />
        <div className="mt-6 space-y-4">
          {appointments.map((appt, i) => (
            <AppointmentCard key={i} appointment={appt} />
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default App
