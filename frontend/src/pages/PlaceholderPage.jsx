import TopNav from '../components/TopNav'
import Sidebar from '../components/Sidebar'

export default function PlaceholderPage({ title, icon = '📄' }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <TopNav />

      <div className="flex">
        <Sidebar />

        {/* Main Content */}
        <main className="flex-1 ml-64 pt-20">
          <div className="p-6 max-w-7xl mx-auto">
            <div className="bg-white rounded-lg shadow-soft p-12 text-center">
              <div className="text-6xl mb-4">{icon}</div>
              <h1 className="text-3xl font-bold text-gray-800 mb-4">{title}</h1>
              <p className="text-gray-600 mb-6">This page is coming soon. Check back later for updates.</p>
              <div className="inline-block bg-gray-100 rounded-lg p-6">
                <p className="text-sm text-gray-600">
                  📌 This is a placeholder page. In a production environment, this would display
                  <br />
                  relevant content and functionality for {title.toLowerCase()}.
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
