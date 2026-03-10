import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true)
  const location = useLocation()
  const navigate = useNavigate()

  const menuItems = [
    { label: 'Dashboard', path: '/dashboard', icon: '📊' },
    { label: 'My Requests', path: '/requests', icon: '📋' },
    { label: 'Book Appointment', path: '/appointments', icon: '📅' },
    { label: 'Academic Documents', path: '/documents', icon: '📚' },
    { label: 'Campus Facilities', path: '/facilities', icon: '🏢' },
    { label: 'Notifications', path: '/notifications', icon: '🔔' },
    { label: 'Settings', path: '/settings', icon: '⚙️' },
  ]

  const isActive = (path) => location.pathname === path

  return (
    <aside
      className={`${
        isOpen ? 'w-64' : 'w-20'
      } bg-primary-800 text-white h-screen transition-all duration-300 fixed left-0 top-16 overflow-y-auto z-40`}
    >
      <nav className="p-4">
        {menuItems.map((item) => (
          <button
            key={item.path}
            onClick={() => navigate(item.path)}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg mb-2 transition-colors ${
              isActive(item.path)
                ? 'bg-primary-700 text-white'
                : 'text-primary-100 hover:bg-primary-700 hover:text-white'
            }`}
          >
            <span className="text-xl">{item.icon}</span>
            {isOpen && <span className="font-medium">{item.label}</span>}
          </button>
        ))}
      </nav>

      {/* Toggle button - commented out for now, can be added later */}
      {/* <button
        onClick={() => setIsOpen(!isOpen)}
        className="absolute -right-3 top-24 bg-primary-600 p-1 rounded-full text-white hover:bg-primary-700"
      >
        {isOpen ? '←' : '→'}
      </button> */}
    </aside>
  )
}
