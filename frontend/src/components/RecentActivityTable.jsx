import StatusBadge from './StatusBadge'
import { formatDate } from '../utils/dateUtils'

export default function RecentActivityTable({ activities = [] }) {
  return (
    <div className="bg-white rounded-lg shadow-soft overflow-hidden">
      <div className="px-6 py-4 border-b border-gray-200">
        <h3 className="text-lg font-semibold text-gray-800">Recent Activity</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-200">
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Request ID</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Service</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Date</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Status</th>
            </tr>
          </thead>
          <tbody>
            {activities.length === 0 ? (
              <tr>
                <td colSpan="4" className="px-6 py-8 text-center text-gray-500">
                  No recent activity
                </td>
              </tr>
            ) : (
              activities.map((activity) => (
                <tr key={activity.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 text-sm font-medium text-primary-600">{activity.id}</td>
                  <td className="px-6 py-4 text-sm text-gray-700">{activity.service}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{formatDate(activity.date)}</td>
                  <td className="px-6 py-4">
                    <StatusBadge status={activity.status} />
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
