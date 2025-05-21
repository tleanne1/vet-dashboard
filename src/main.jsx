import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css'
import CalendarPage from './pages/CalendarPage'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<CalendarPage />} /> {/* Default to Calendar */}
      </Routes>
    </Router>
  </React.StrictMode>,
)
