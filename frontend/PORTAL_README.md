# Student Services Portal - Frontend Documentation

## Project Overview

A modern, production-ready Student Services Portal built with React, React Router, and Tailwind CSS. The application provides students with a comprehensive dashboard to manage academic and campus resources.

## Features

### 1. **Authentication System**
- Clean, modern login page with email and password validation
- JWT token-based authentication (placeholder)
- Protected routes that redirect to login if not authenticated
- Persistent user session using localStorage
- Login with demo credentials: `demo@university.edu` / `password123`

### 2. **Dashboard**
- **Summary Cards**: Display key metrics
  - Total Requests Submitted
  - Pending Requests
  - Approved Requests  
  - Upcoming Appointments

- **Services Section**: Browse and request services
  - 6 different student services with icons
  - One-click service request submission
  - Loading states and success/error feedback

- **Recent Activity Table**: Track request history
  - Request ID, Service name, Date, Status
  - Color-coded status indicators (Pending/Yellow, Approved/Green, Rejected/Red)

### 3. **Navigation**
- **Top Navigation Bar**: Portal title, notifications icon, user profile, logout
- **Sidebar Navigation**: Quick access to all major sections
  - Dashboard, My Requests, Book Appointment, Academic Documents
  - Campus Facilities, Notifications, Settings

### 4. **Placeholder Pages**
- Dedicated pages for all navigation items (coming soon placeholders)
- Consistent layout with dashboard styling
- Ready for implementation of specific features

## Project Structure

```
frontend/
├── src/
│   ├── api/
│   │   └── services.js           # API service calls and placeholders
│   ├── components/
│   │   ├── TopNav.jsx            # Top navigation bar
│   │   ├── Sidebar.jsx           # Left sidebar navigation
│   │   ├── SummaryCard.jsx       # Dashboard summary cards
│   │   ├── ServiceCard.jsx       # Service request card
│   │   ├── StatusBadge.jsx       # Status indicator badge
│   │   └── RecentActivityTable.jsx # Activity table
│   ├── context/
│   │   └── AuthContext.jsx       # Authentication context & hooks
│   ├── pages/
│   │   ├── LoginPage.jsx         # Login page
│   │   ├── DashboardPage.jsx     # Main dashboard
│   │   └── PlaceholderPage.jsx   # Placeholder for future pages
│   ├── utils/
│   │   └── dateUtils.js          # Date formatting utilities
│   ├── App.jsx                   # Main app with routing
│   ├── main.jsx                  # React DOM entry point
│   ├── styles.css                # Tailwind CSS configuration
│   └── index.css                 # Additional CSS imports
├── tailwind.config.js            # Tailwind CSS configuration
├── postcss.config.js             # PostCSS configuration
├── vite.config.js                # Vite configuration with API proxy
├── index.html                    # HTML entry point
├── package.json                  # Dependencies and scripts
└── node_modules/                 # Installed packages
```

## Installation & Setup

### Prerequisites
- Node.js 16+ and npm

### Installation Steps

1. **Navigate to frontend directory**
   ```bash
   cd frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:5173`

4. **Build for production**
   ```bash
   npm run build
   ```

## API Integration

### Authentication APIs
- **Login**: `/api/auth/login` - POST
  - Expected request: `{ email: string, password: string }`
  - Expected response: `{ success: boolean, token: string, user: object }`

- **Logout**: `/api/auth/logout` - POST

### Dashboard APIs
- **Get Dashboard Data**: `/api/dashboard` - GET
  - Returns: Summary stats and recent activity

- **Get Services**: `/api/services` - GET
  - Returns: List of available services

### Request APIs
- **Submit Service Request**: `/api/requests` - POST
  - Request: `{ serviceId: number, additionalData: any }`
  - Response: `{ success: boolean, requestId: string }`

- **Get User Appointments**: `/api/appointments` - GET
- **Get Notifications**: `/api/notifications` - GET

## Current API Behavior

All APIs are currently **mocked** with realistic placeholder responses. The mocks include:

- 1 second delay for login (simulating network request)
- Mock dashboard data with 5 recent activities
- 6 sample student services
- Realistic success/error responses

**To integrate real APIs**, update the `src/api/services.js` file:

1. Replace mock implementations with actual fetch calls
2. Update endpoints to match your backend URL
3. Remove setTimeout delays
4. Handle real error responses from server

## Design Features

### Color Scheme
- **Primary**: Blue (#3b82f6 - #1e3a8a)
- **Secondary**: Green (#22c55e - #16a34a)
- **Danger**: Red (#ef4444 - #dc2626)
- **Warning**: Yellow/Amber (#f59e0b - #d97706)

### Components Styling
- Soft shadows for depth
- Rounded corners (lg) for modern feel
- Responsive grid layouts
- Smooth transitions on hover
- Color-coded status indicators
- Consistent padding and spacing

### Responsive Design
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px)
- Flexible grid system
- Mobile-optimized navigation

## Authentication Context

The `AuthContext` provides authentication state management:

```javascript
const { user, isAuthenticated, login, logout, loading } = useAuth()
```

- **user**: Current user object
- **isAuthenticated**: Boolean flag
- **login(userData)**: Set user and save to localStorage
- **logout()**: Clear user data
- **loading**: Initial auth state loading

## Using Protected Routes

```javascript
<ProtectedRoute>
  <DashboardPage />
</ProtectedRoute>
```

Automatically redirects to login if user is not authenticated.

## Customization

### Changing Colors
1. Edit `tailwind.config.js` - Update color palette
2. Update color references in components (e.g., `bg-primary-600`)

### Adding New Pages
1. Create page component in `src/pages/`
2. Add route in `App.jsx`:
   ```javascript
   <Route path="/new-page" element={<ProtectedRoute><NewPage /></ProtectedRoute>} />
   ```
3. Add navigation item in `Sidebar.jsx`

### Updating API Endpoints
1. Edit `src/api/services.js`
2. Replace mock implementations with real API calls
3. Update error handling as needed

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance Optimizations

- Code splitting with React Router
- Lazy loading of components
- Optimized Tailwind CSS builds
- Efficient re-renders with proper React dependencies

## Development Best Practices

1. **Component Structure**: Keep components focused and reusable
2. **Styling**: Use Tailwind CSS utility classes
3. **State Management**: Use React Context for global state
4. **API Calls**: Centralize in `src/api/services.js`
5. **Error Handling**: Provide user feedback for all async operations

## Production Checklist

- [ ] Replace API mocks with real endpoints
- [ ] Set up environment variables for API URL
- [ ] Configure CORS properly
- [ ] Implement real authentication with secure token storage
- [ ] Add error tracking (e.g., Sentry)
- [ ] Set up analytics
- [ ] Test on multiple browsers
- [ ] Optimize images and assets
- [ ] Set up proper CSP headers
- [ ] Implement rate limiting on password attempts

## Troubleshooting

### Login not working
- Check browser console for errors
- Verify API endpoint is correct in `src/api/services.js`
- Ensure backend server is running on port 8080

### Styles not applying
- Ensure Tailwind CSS is properly installed
- Check tailwind.config.js includes the correct content paths
- Run `npm run dev` to rebuild CSS

### Routes not working
- Verify React Router setup in App.jsx
- Check that route paths match sidebar navigation
- Ensure ProtectedRoute wrapper is used for protected pages

## Support

For issues or questions:
1. Check the component implementation
2. Review API response format
3. Check browser console for error messages
4. Verify all dependencies are installed

## License

Copyright 2024 Student Services Portal. All rights reserved.
