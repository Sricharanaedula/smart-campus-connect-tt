import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { apiService } from '../api/services'

export default function LoginPage() {
  const navigate = useNavigate()
  const { login } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [rememberMe, setRememberMe] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setIsLoading(true)

    try {
      const response = await apiService.login(email, password)
      if (response.success) {
        login(response.user)
        navigate('/dashboard')
      }
    } catch (err) {
      setError(err.message || 'Login failed. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-600 to-primary-800 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo and Title */}
        <div className="text-center mb-8">
          <div className="text-6xl mb-4">🎓</div>
          <h1 className="text-4xl font-bold text-white mb-2">Student Services</h1>
          <p className="text-primary-100">Portal</p>
        </div>

        {/* Login Card */}
        <div className="bg-white rounded-lg shadow-soft-lg p-8 mb-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Welcome Back</h2>

          {/* Error Message */}
          {error && (
            <div className="mb-6 p-4 bg-danger-50 border border-danger-200 rounded-lg">
              <p className="text-sm text-danger-600 font-medium">{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit}>
            {/* Email Field */}
            <div className="mb-5">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Student Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="student@university.edu"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-colors"
                required
              />
            </div>

            {/* Password Field */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-colors"
                required
              />
            </div>

            {/* Remember Me and Forgot Password */}
            <div className="flex items-center justify-between mb-6">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 text-primary-600 rounded focus:ring-primary-500"
                />
                <span className="text-sm text-gray-600">Remember me</span>
              </label>
              <a href="#" className="text-sm text-primary-600 hover:text-primary-700 font-medium">
                Forgot Password?
              </a>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-primary-600 hover:bg-primary-700 disabled:bg-gray-400 text-white font-semibold py-2 px-4 rounded-lg transition-colors mb-3"
            >
              {isLoading ? 'Signing in...' : 'Sign In'}
            </button>
          </form>

          {/* Divider */}
          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">Or</span>
            </div>
          </div>

          {/* Demo Credentials */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <p className="text-xs text-gray-600 mb-2">
              <strong>Demo Credentials:</strong>
            </p>
            <p className="text-xs text-gray-600 mb-1">
              Email: <code className="bg-white px-2 py-1 rounded text-primary-600">demo@university.edu</code>
            </p>
            <p className="text-xs text-gray-600">
              Password: <code className="bg-white px-2 py-1 rounded text-primary-600">password123</code>
            </p>
          </div>
        </div>

        {/* Footer Links */}
        <div className="text-center">
          <p className="text-primary-100 text-sm mb-4">
            Don't have an account?{' '}
            <a href="#" className="text-white font-semibold hover:underline">
              Contact IT Support
            </a>
          </p>
          <p className="text-primary-200 text-xs">© 2024 Student Services Portal. All rights reserved.</p>
        </div>
      </div>
    </div>
  )
}
