import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function TopNav() {
  const navigate = useNavigate()
  const { user, logout } = useAuth()

  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  return (
    <nav className="bg-primary-700 text-white shadow-soft sticky top-0 z-50">
      <div className="px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-2xl">🎓</span>
          <h1 className="text-2xl font-bold">Student Services Portal</h1>
        </div>

        <div className="flex items-center gap-4">
          {/* Notifications icon */}
          <button className="p-2 hover:bg-primary-600 rounded-lg transition-colors" title="Notifications">
            <span className="text-xl">🔔</span>
            <span className="absolute top-2 right-6 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              2
            </span>
          </button>

          {/* User profile dropdown */}
          <div className="flex items-center gap-3 pl-4 border-l border-primary-600">
            <div className="text-right hidden sm:block">
              <p className="font-medium text-sm">{user?.name || 'Student'}</p>
              <p className="text-xs text-primary-200">{user?.studentId || 'Student ID'}</p>
            </div>
            <div className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-primary-500 transition-colors">
              <span>👤</span>
            </div>
          </div>

          {/* Logout button */}
          <button
            onClick={handleLogout}
            className="ml-2 px-4 py-2 bg-red-600 hover:bg-red-700 rounded-lg font-medium text-sm transition-colors"
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  )
}
