import React, { useState } from 'react'
import { Calendar, dateFnsLocalizer } from 'react-big-calendar'
import format from 'date-fns/format'
import parse from 'date-fns/parse'
import startOfWeek from 'date-fns/startOfWeek'
import getDay from 'date-fns/getDay'
import enUS from 'date-fns/locale/en-US'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { addHours } from 'date-fns'

const locales = {
  'en-US': enUS,
}

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
})

const initialEvents = [
  {
    id: 0,
    title: 'Phoebe - Vaccination',
    start: new Date(),
    end: addHours(new Date(), 1),
  },
  {
    id: 1,
    title: 'Louie - Checkup',
    start: new Date(new Date().setHours(14, 0)),
    end: new Date(new Date().setHours(15, 0)),
  },
]

const CalendarPage = () => {
  const [events, setEvents] = useState(initialEvents)

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-700 mb-4">Appointment Calendar</h1>
      <div className="bg-white rounded shadow p-4">
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 500 }}
        />
      </div>
    </div>
  )
}

export default CalendarPage
