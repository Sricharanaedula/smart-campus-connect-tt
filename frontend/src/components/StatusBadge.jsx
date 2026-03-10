export default function StatusBadge({ status }) {
  const statusConfig = {
    pending: {
      bg: 'bg-warning-50',
      text: 'text-warning-600',
      label: 'Pending',
    },
    approved: {
      bg: 'bg-secondary-50',
      text: 'text-secondary-600',
      label: 'Approved',
    },
    rejected: {
      bg: 'bg-danger-50',
      text: 'text-danger-600',
      label: 'Rejected',
    },
  }

  const config = statusConfig[status] || statusConfig.pending

  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${config.bg} ${config.text}`}>
      {config.label}
    </span>
  )
}
