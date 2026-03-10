import { useState, useEffect } from 'react'
import TopNav from '../components/TopNav'
import Sidebar from '../components/Sidebar'
import SummaryCard from '../components/SummaryCard'
import ServiceCard from '../components/ServiceCard'
import RecentActivityTable from '../components/RecentActivityTable'
import { apiService } from '../api/services'

export default function DashboardPage() {
  const [dashboard, setDashboard] = useState(null)
  const [services, setServices] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [successMessage, setSuccessMessage] = useState('')

  useEffect(() => {
    loadDashboardData()
  }, [])

  const loadDashboardData = async () => {
    try {
      setLoading(true)
      const [dashboardData, servicesData] = await Promise.all([
        apiService.getDashboardData(),
        apiService.getServices(),
      ])

      setDashboard(dashboardData)
      setServices(servicesData)
    } catch (err) {
      setError('Failed to load dashboard data. Please refresh the page.')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  const handleServiceRequest = async (serviceId) => {
    try {
      const result = await apiService.submitServiceRequest(serviceId, {})
      if (result.success) {
        setSuccessMessage(`Request submitted successfully! ID: ${result.requestId}`)
        setTimeout(() => setSuccessMessage(''), 5000)
        // Reload dashboard to reflect the new request
        loadDashboardData()
      }
    } catch (err) {
      setError('Failed to submit service request. Please try again.')
      console.error(err)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <TopNav />

      <div className="flex">
        <Sidebar />

        {/* Main Content */}
        <main className="flex-1 ml-64 pt-20">
          <div className="p-6 max-w-7xl mx-auto">
            {/* Success Message */}
            {successMessage && (
              <div className="mb-6 p-4 bg-secondary-50 border border-secondary-200 rounded-lg flex items-center gap-3">
                <span className="text-xl">✓</span>
                <p className="text-secondary-700 font-medium">{successMessage}</p>
              </div>
            )}

            {/* Error Message */}
            {error && (
              <div className="mb-6 p-4 bg-danger-50 border border-danger-200 rounded-lg flex items-center gap-3">
                <span className="text-xl">⚠️</span>
                <p className="text-danger-700 font-medium">{error}</p>
              </div>
            )}

            {/* Loading State */}
            {loading ? (
              <div className="text-center py-12">
                <p className="text-gray-600">Loading dashboard...</p>
              </div>
            ) : (
              <>
                {/* Summary Cards Section */}
                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-800 mb-6">Dashboard Overview</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <SummaryCard
                      title="Total Requests"
                      value={dashboard?.summary.totalRequests || 0}
                      icon="📊"
                      color="blue"
                    />
                    <SummaryCard
                      title="Pending Requests"
                      value={dashboard?.summary.pendingRequests || 0}
                      icon="⏳"
                      color="yellow"
                    />
                    <SummaryCard
                      title="Approved Requests"
                      value={dashboard?.summary.approvedRequests || 0}
                      icon="✓"
                      color="green"
                    />
                    <SummaryCard
                      title="Upcoming Appointments"
                      value={dashboard?.summary.upcomingAppointments || 0}
                      icon="📅"
                      color="blue"
                    />
                  </div>
                </section>

                {/* Services Section */}
                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-800 mb-6">Available Services</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service) => (
                      <ServiceCard key={service.id} service={service} onRequest={handleServiceRequest} />
                    ))}
                  </div>
                </section>

                {/* Recent Activity Section */}
                <section>
                  <h2 className="text-2xl font-bold text-gray-800 mb-6">Recent Activity</h2>
                  <RecentActivityTable activities={dashboard?.recentActivity || []} />
                </section>
              </>
            )}
          </div>
        </main>
      </div>
    </div>
  )
}
