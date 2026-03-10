export default function SummaryCard({ title, value, icon, color = 'blue' }) {
  const colorClass = {
    blue: 'bg-blue-50 border-blue-200',
    green: 'bg-green-50 border-green-200',
    yellow: 'bg-yellow-50 border-yellow-200',
    red: 'bg-red-50 border-red-200',
  }[color]

  const iconColorClass = {
    blue: 'text-blue-600',
    green: 'text-green-600',
    yellow: 'text-yellow-600',
    red: 'text-red-600',
  }[color]

  return (
    <div className={`${colorClass} border rounded-lg p-6 shadow-soft`}>
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-gray-600 mb-2">{title}</p>
          <p className="text-3xl font-bold text-gray-800">{value}</p>
        </div>
        <span className={`text-3xl ${iconColorClass}`}>{icon}</span>
      </div>
    </div>
  )
}
