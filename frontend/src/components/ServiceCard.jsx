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
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm hover:shadow-soft transition-all flex flex-col h-full group">
      <div className="text-4xl mb-5 group-hover:scale-110 transition-transform origin-left">{service.icon}</div>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">{service.name}</h3>
      <p className="text-sm text-slate-600 dark:text-slate-400 mb-6 flex-1">{service.description}</p>
      <button
        onClick={handleRequest}
        disabled={isLoading}
        className="w-full mt-auto bg-primary-600 hover:bg-primary-700 disabled:opacity-70 disabled:cursor-not-allowed text-white font-medium py-2.5 px-4 rounded-xl transition-all active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900 flex justify-center items-center"
      >
        {isLoading ? (
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            <span>Submitting...</span>
          </div>
        ) : (
          'Request Service'
        )}
      </button>
    </div>
  )
}
