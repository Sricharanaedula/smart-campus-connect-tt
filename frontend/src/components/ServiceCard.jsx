import { useState } from 'react'

export default function ServiceCard({ service, onRequest }) {
  const [isLoading, setIsLoading] = useState(false)

  const handleRequest = async () => {
    setIsLoading(true)
    try {
      await onRequest(service.id)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-soft hover:shadow-soft-lg transition-shadow">
      <div className="text-4xl mb-4">{service.icon}</div>
      <h3 className="text-lg font-semibold text-gray-800 mb-2">{service.name}</h3>
      <p className="text-sm text-gray-600 mb-4">{service.description}</p>
      <button
        onClick={handleRequest}
        disabled={isLoading}
        className="w-full bg-primary-600 hover:bg-primary-700 disabled:bg-gray-400 text-white font-medium py-2 px-4 rounded-lg transition-colors"
      >
        {isLoading ? 'Submitting...' : 'Request Service'}
      </button>
    </div>
  )
}
