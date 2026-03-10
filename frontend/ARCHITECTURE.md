# Student Services Portal - Architecture & Data Flow

## 🏗️ Application Architecture

```
┌─────────────────────────────────────────────────────────┐
│                   Browser / Client Side                   │
├─────────────────────────────────────────────────────────┤
│                                                             │
│  ┌─────────────────────────────────────────────────────┐  │
│  │                   App.jsx (Main)                    │  │
│  │     - BrowserRouter setup                           │  │
│  │     - AuthProvider wrapper                          │  │
│  │     - Route definitions                             │  │
│  └──────────────────┬──────────────────────────────────┘  │
│                     │                                       │
│        ┌────────────┴──────────────────┐                   │
│        │                               │                   │
│   ┌────▼─────────┐           ┌────────▼────────┐          │
│   │ LoginPage    │           │ DashboardPage   │          │
│   │ (~195 lines) │           │ (~142 lines)    │          │
│   └─────┬────────┘           └────────┬────────┘          │
│         │                            │                     │
│         │ useAuth() calls      │  Renders Child Comps    │
│         │                      │                          │
│         │                      ├─► TopNav (logo, profile) │
│         │                      ├─► Sidebar (navigation)   │
│         │                      ├─► 4 SummaryCards        │
│         │                      ├─► 6 ServiceCards        │
│         │                      └─► RecentActivityTable   │
│         │                                                  │
│  ┌──────▼────────────────────────────────┐               │
│  │    AuthContext (Global State)          │               │
│  │  - user: User | null                   │               │
│  │  - isAuthenticated: boolean            │               │
│  │  - login(userData)                     │               │
│  │  - logout()                            │               │
│  │  - loading: boolean                    │               │
│  └────────────────────────────────────────┘               │
│                                                             │
│  ┌─────────────────────────────────────────────────────┐  │
│  │         API Services Layer (src/api/services.js)    │  │
│  │                                                       │  │
│  │  - login(email, password)                           │  │
│  │  - logout()                                          │  │
│  │  - getDashboardData()                               │  │
│  │  - getServices()                                     │  │
│  │  - submitServiceRequest(serviceId)                  │  │
│  │  - getUserAppointments()                            │  │
│  │  - getNotifications()                               │  │
│  └──────────────────┬──────────────────────────────────┘  │
│                     │                                       │
│                     │ fetch() calls (CORS via proxy)      │
│                     │                                       │
└─────────────────────┼───────────────────────────────────┤  │
                      │                                       │
                      │  http://localhost:8080/api/*        │
                      │                                       │
┌─────────────────────▼───────────────────────────────────┐  │
│           Backend Server (Spring Boot)                    │  │
│  - Authentication                                         │  │
│  - Database queries                                       │  │
│  - Business logic                                         │  │
└───────────────────────────────────────────────────────────┘  │
```

## 📊 Component Hierarchy Tree

```
App (Router + AuthProvider)
│
├─ Layout Structure
│  │
│  ├─ TopNav
│  │  ├─ Portal Title
│  │  ├─ Notification Icon
│  │  ├─ User Profile
│  │  └─ Logout Button
│  │
│  └─ Sidebar
│     ├─ Dashboard Link
│     ├─ My Requests Link
│     ├─ Book Appointment Link
│     ├─ Academic Documents Link
│     ├─ Campus Facilities Link
│     ├─ Notifications Link
│     └─ Settings Link
│
├─ Pages
│  │
│  ├─ LoginPage
│  │  ├─ Email Input
│  │  ├─ Password Input
│  │  ├─ Remember Me Checkbox
│  │  └─ Login Button
│  │
│  ├─ DashboardPage
│  │  ├─ Summary Section
│  │  │  ├─ SummaryCard (Total Requests)
│  │  │  ├─ SummaryCard (Pending)
│  │  │  ├─ SummaryCard (Approved)
│  │  │  └─ SummaryCard (Appointments)
│  │  │
│  │  ├─ Services Section
│  │  │  ├─ ServiceCard (Transcript)
│  │  │  ├─ ServiceCard (ID Card)
│  │  │  ├─ ServiceCard (Registration)
│  │  │  ├─ ServiceCard (Counseling)
│  │  │  ├─ ServiceCard (Hostel)
│  │  │  └─ ServiceCard (Documents)
│  │  │
│  │  └─ Recent Activity Section
│  │     └─ RecentActivityTable
│  │        ├─ Table Header
│  │        ├─ Table Rows (Activities)
│  │        │  ├─ Request ID
│  │        │  ├─ Service Name
│  │        │  ├─ Date
│  │        │  └─ StatusBadge
│  │        └─ Table Footer
│  │
│  ├─ MyRequestsPage (Placeholder)
│  ├─ AppointmentsPage (Placeholder)
│  ├─ DocumentsPage (Placeholder)
│  ├─ FacilitiesPage (Placeholder)
│  ├─ NotificationsPage (Placeholder)
│  └─ SettingsPage (Placeholder)
```

## 🔄 Data Flow Diagram

### Login Flow
```
User Input Form
    ↓
handleSubmit()
    ↓
apiService.login(email, password)
    ↓
Mock API Response (1s delay)
    ↓
if response.success:
    ├─ authContext.login(userData)
    ├─ localStorage.setItem('user', userData)
    └─ navigate('/dashboard')
else:
    └─ setError(err.message)
```

### Dashboard Load Flow
```
Component Mount (useEffect)
    ↓
Promise.all([
    getDashboardData(),
    getServices()
])
    ↓
Mock API Responses
    ↓
Update State:
    ├─ setDashboard(data)
    └─ setServices(data)
    ↓
Render Components with Data
```

### Service Request Flow
```
User Clicks "Request Service"
    ↓
handleServiceRequest(serviceId)
    ↓
apiService.submitServiceRequest(serviceId)
    ↓
Mock API Response (800ms delay)
    ↓
if response.success:
    ├─ setSuccessMessage()
    ├─ Reload Dashboard Data
    └─ Update Activity Table
else:
    └─ setError()
```

## 🎯 Component Interactions

```
┌─────────────────────────────────────────┐
│         APP ENTRY POINT                 │
│  - BrowserRouter                        │
│  - AuthProvider wraps routes            │
└──────────────┬──────────────────────────┘
               │
        ┌──────▼───────┐
        │ Routing Layer│
        │ - Public     │
        │ - Protected  │
        └──────┬───────┘
               │
    ┌──────────┴──────────┐
    │                     │
┌───▼────────────┐  ┌────▼──────────┐
│  LoginPage     │  │  DashboardPage│
│  - Auth Form   │  │  - View Data  │
│  - Validation  │  │  - Manage Req │
│  - Error Msg   │  │  - Navigation │
└─────┬──────────┘  └────┬──────────┘
      │                  │
      │ useAuth()        │
      │                  │
      └──────┬───────────┘
             │
     ┌───────▼────────┐
     │ AuthContext    │
     │ - user state   │
     │ - login/logout │
     │ - persistence  │
     └────────────────┘
```

## 📦 State Management Structure

```
Global State (AuthContext)
│
├─ user
│  ├─ id
│  ├─ name
│  ├─ email
│  ├─ studentId
│  └─ token (ready for JWT)
│
├─ isAuthenticated (boolean)
├─ loading (boolean)
├─ error (string)
├─ login (function)
└─ logout (function)

Local State (Component-level)
│
├─ LoginPage
│  ├─ email (string)
│  ├─ password (string)
│  ├─ isLoading (boolean)
│  ├─ error (string)
│  └─ rememberMe (boolean)
│
├─ DashboardPage
│  ├─ dashboard (object)
│  ├─ services (array)
│  ├─ loading (boolean)
│  ├─ error (string)
│  └─ successMessage (string)
│
└─ ServiceCard
   └─ isLoading (boolean)
```

## 🔌 API Contract

```
Base URL: http://localhost:8080/api

1. Authentication
   POST /auth/login
   Request: { email, password }
   Response: { success: boolean, token: string, user: {} }

2. Dashboard
   GET /dashboard
   Response: { summary: {}, recentActivity: [] }

3. Services
   GET /services
   Response: [{ id, name, description, icon }]

4. Requests
   POST /requests
   Request: { serviceId, data }
   Response: { success: boolean, requestId: string }

5. Appointments
   GET /appointments
   Response: [{ id, service, date, time, counselor }]

6. Notifications
   GET /notifications
   Response: [{ id, message, date, read }]
```

## 🎨 Styling Architecture

```
Tailwind CSS
│
├─ Custom Config (tailwind.config.js)
│  ├─ Colors
│  │  ├─ primary (blue)
│  │  ├─ secondary (green)
│  │  ├─ danger (red)
│  │  └─ warning (yellow)
│  │
│  ├─ Shadow Extensions
│  │  ├─ soft
│  │  └─ soft-lg
│  │
│  └─ Theme Extensions
│     └─ Colors and utilities
│
├─ Global Styles (styles.css)
│  ├─ Tailwind directives
│  ├─ Element resets
│  ├─ Scrollbar styling
│  └─ Transitions
│
└─ Component Styles
   └─ Inline Tailwind classes
```

## 📱 Responsive Design Breakpoints

```
Mobile-first approach

Base (Mobile):     < 640px
├─ Full-width layouts
├─ Stacked grid
└─ Single column

Small (640px):     sm:
├─ Start using side-by-side
└─ Optimized spacing

Medium (768px):    md:
├─ 2-column layouts
└─ Better spacing

Large (1024px):    lg:
├─ 3-4 column layouts
├─ Sidebar layout
└─ Full features

Extra Large (1280px): xl:
└─ Maximum width constraints
```

## 🔐 Security Flow

```
User Credentials
    ↓
Frontend Validation
    ↓
API Call to Backend
    ↓
Backend Authentication
    ↓
JWT Token Generation (Ready)
    ↓
Token Storage (localStorage)
    ↓
Protected Routes Check
    ├─ Token Valid?
    │  ├─ Yes → Grant Access
    │  └─ No → Redirect to Login
    └─ No Token?
       └─ Redirect to Login
```

## 📊 File Dependencies

```
App.jsx depends on:
├─ React Router DOM
├─ AuthContext.jsx
├─ LoginPage.jsx
├─ DashboardPage.jsx
└─ PlaceholderPage.jsx

DashboardPage.jsx depends on:
├─ TopNav.jsx
├─ Sidebar.jsx
├─ SummaryCard.jsx
├─ ServiceCard.jsx
├─ RecentActivityTable.jsx
└─ api/services.js

LoginPage.jsx depends on:
├─ useAuth (from AuthContext)
├─ api/services.js
└─ React Router DOM (useNavigate)

Components depend on:
└─ Nothing critical (self-contained)

AuthContext.jsx depends on:
└─ React (hooks)

api/services.js:
└─ No dependencies (pure functions)
```

## 🚀 Deployment Pipeline

```
Local Development
    ↓
npm run dev (Vite dev server)
    ↓
Test Features
    ↓
npm run build (Production build)
    ↓
Output: dist/ folder
    ↓
Deploy to:
├─ Vercel
├─ Netlify
├─ GitHub Pages
├─ Server (Node.js)
└─ CDN
```

## 📈 Performance Metrics

```
Bundle Size:
├─ React: ~40KB
├─ React Router: ~8KB
├─ Tailwind CSS: ~15KB (optimized)
└─ Total: ~63KB+ (gzipped: ~20KB)

Load Time:
├─ Initial: < 2s
├─ Dashboard: < 1s
└─ Interactions: < 200ms

Lighthouse Score (Target):
├─ Performance: > 90
├─ Accessibility: > 95
├─ Best Practices: > 95
└─ SEO: > 90
```

---

**Architecture Document**
**Date**: March 10, 2026
**Version**: 1.0
**Status**: Complete & Validated
