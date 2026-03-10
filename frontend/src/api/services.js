// API service endpoints for the Student Services Portal
const API_BASE_URL = '/api'

export const apiService = {
  // Authentication APIs
  login: async (email, password) => {
    // Placeholder for login API
    // In production, this would call your backend authentication endpoint
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (email && password && email.includes('@')) {
          resolve({
            success: true,
            token: 'fake-jwt-token',
            user: {
              id: '1',
              name: 'John Doe',
              email: email,
              studentId: 'STU001234',
            },
          })
        } else {
          reject({
            success: false,
            message: 'Invalid email or password',
          })
        }
      }, 1000)
    })
  },

  logout: async () => {
    // Placeholder for logout API
    return Promise.resolve({ success: true })
  },

  // Dashboard APIs
  getDashboardData: async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          summary: {
            totalRequests: 12,
            pendingRequests: 3,
            approvedRequests: 8,
            upcomingAppointments: 2,
          },
          recentActivity: [
            {
              id: 'REQ001',
              service: 'Transcript Request',
              date: '2026-03-08',
              status: 'approved',
            },
            {
              id: 'REQ002',
              service: 'ID Card Replacement',
              date: '2026-03-07',
              status: 'pending',
            },
            {
              id: 'REQ003',
              service: 'Course Registration Help',
              date: '2026-03-05',
              status: 'approved',
            },
            {
              id: 'REQ004',
              service: 'Counseling Services',
              date: '2026-03-01',
              status: 'rejected',
            },
            {
              id: 'REQ005',
              service: 'Hostel Services',
              date: '2026-02-28',
              status: 'approved',
            },
          ],
        })
      }, 800)
    })
  },

  // Services APIs
  getServices: async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          {
            id: 1,
            name: 'Transcript Request',
            description: 'Request official transcripts to be sent to institutions',
            icon: '📄',
          },
          {
            id: 2,
            name: 'ID Card Replacement',
            description: 'Replace your student ID card if lost or damaged',
            icon: '🆔',
          },
          {
            id: 3,
            name: 'Course Registration Help',
            description: 'Get assistance with course registration and scheduling',
            icon: '📚',
          },
          {
            id: 4,
            name: 'Counseling Services',
            description: 'Access academic and personal counseling support',
            icon: '💬',
          },
          {
            id: 5,
            name: 'Hostel Services',
            description: 'Manage hostel accommodation requests and issues',
            icon: '🏢',
          },
          {
            id: 6,
            name: 'Academic Documents',
            description: 'Request various academic documents and certificates',
            icon: '📋',
          },
        ])
      }, 600)
    })
  },

  // Submit service request
  submitServiceRequest: async (serviceId, request) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          success: true,
          requestId: 'REQ' + Math.floor(Math.random() * 10000),
          message: 'Service request submitted successfully',
        })
      }, 800)
    })
  },

  // Get user appointments
  getUserAppointments: async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          {
            id: 'APT001',
            service: 'Academic Counseling',
            date: '2026-03-15',
            time: '10:00 AM',
            counselor: 'Dr. Sarah Smith',
          },
          {
            id: 'APT002',
            service: 'Financial Aid Review',
            date: '2026-03-20',
            time: '2:00 PM',
            counselor: 'Mr. John Johnson',
          },
        ])
      }, 500)
    })
  },

  // Get notifications
  getNotifications: async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          {
            id: 1,
            message: 'Your transcript request has been approved',
            date: '2026-03-08',
            read: false,
          },
          {
            id: 2,
            message: 'Reminder: Your appointment is tomorrow at 10:00 AM',
            date: '2026-03-09',
            read: false,
          },
          {
            id: 3,
            message: 'Your ID card is ready for pickup',
            date: '2026-03-07',
            read: true,
          },
        ])
      }, 400)
    })
  },
}
