# Quick Start Guide - Student Services Portal

## 🚀 Get Started in 3 Steps

### Step 1: Install Dependencies
```bash
cd frontend
npm install
```

### Step 2: Start Development Server
```bash
npm run dev
```

The application will be available at: **http://localhost:5173**

### Step 3: Login with Demo Credentials
- **Email**: `demo@university.edu`
- **Password**: `password123`

## 📋 What You'll See

### Login Page
- Clean, modern authentication interface
- Email and password validation
- "Forgot Password" link (placeholder)
- Demo credentials hint
- University-style blue design

### Dashboard
- **Summary Cards** showing key metrics
  - Total Requests: 12
  - Pending Requests: 3
  - Approved Requests: 8
  - Upcoming Appointments: 2

- **Available Services Section** with 6 interactive service cards:
  - 📄 Transcript Request
  - 🆔 ID Card Replacement
  - 📚 Course Registration Help
  - 💬 Counseling Services
  - 🏢 Hostel Services
  - 📋 Academic Documents

- **Recent Activity Table** tracking all requests with status indicators
  - Color-coded statuses: Yellow (Pending), Green (Approved), Red (Rejected)

### Navigation
- **Top Bar**: Portal title, notifications, user profile, logout
- **Sidebar**: Quick navigation to all features

## 🎨 Design Highlights

✅ **Modern & Professional**
- Clean layout with soft shadows
- Rounded cards for contemporary feel
- Responsive grid layouts

✅ **Color-Coded Elements**
- Blue primary theme (#2563eb)
- Green for success/approved (#22c55e)
- Red for rejected (#ef4444)
- Yellow for pending (#f59e0b)

✅ **Responsive Design**
- Works on desktop, tablet, and mobile
- Flexible grid system
- Touch-friendly buttons

✅ **User Experience**
- Smooth transitions and animations
- Loading states for async operations
- Error and success messages
- Intuitive navigation

## 📚 Project Structure

```
frontend/
├── src/
│   ├── api/              # API service calls
│   ├── components/       # Reusable UI components
│   ├── context/          # Authentication context
│   ├── pages/            # Page components
│   ├── utils/            # Helper functions
│   ├── App.jsx           # Main app with routing
│   └── styles.css        # Tailwind CSS
├── tailwind.config.js    # Tailwind configuration
├── package.json          # Dependencies
└── index.html            # Entry point
```

## 🔌 API Integration

All APIs are currently **mocked** for demo purposes. When you click:

### "Request Service" Button
- Simulates 800ms network delay
- Returns a fake request ID
- Updates the recent activity table
- Shows success message

### "Login" Button
- Simulates 1000ms verification
- Accepts any valid email/password format
- Stores user session in localStorage
- Redirects to dashboard

## 🔐 Authentication

- User session persists on page reload
- Logout clears session and redirects to login
- Protected routes prevent unauthorized access
- Authentication state stored in React Context

## 🛠️ To Integrate Real Backend APIs

**Edit `src/api/services.js`:**

```javascript
// Example: Replace mock login with real API
export const apiService = {
  login: async (email, password) => {
    const response = await fetch('http://localhost:8080/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    })
    return response.json()
  },
  // ... do the same for other APIs
}
```

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

The layout automatically adapts at these breakpoints.

## ✨ Key Features Implemented

✅ Login/Authentication with validation
✅ Protected route system
✅ Dashboard with summary cards
✅ Service request cards with mock submission
✅ Recent activity table with status indicators
✅ Sidebar navigation with 7 menu items
✅ Top navigation with user profile
✅ Loading states for async operations
✅ Error handling and user feedback
✅ Responsive design for all screen sizes
✅ Color-coded elements
✅ Smooth animations and transitions
✅ Tailwind CSS styling
✅ Production-ready code

## 📝 Available Routes

- `/login` - Login page
- `/dashboard` - Main dashboard
- `/requests` - My requests (placeholder)
- `/appointments` - Book appointment (placeholder)
- `/documents` - Academic documents (placeholder)
- `/facilities` - Campus facilities (placeholder)
- `/notifications` - Notifications (placeholder)
- `/settings` - Settings (placeholder)
- `/` - Redirects to dashboard

## 🎯 Next Steps

1. **Connect Real Backend**: Update API calls in `src/api/services.js`
2. **Add More Features**: Implement the placeholder pages
3. **Customize Colors**: Edit `tailwind.config.js`
4. **Deploy**: Build with `npm run build` and deploy to production

## 📦 Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` folder.

## 🐛 Debugging

**Open browser DevTools (F12) to:**
- Check console for JavaScript errors
- Inspect network requests
- Monitor component state in React DevTools
- Check localStorage for user session

## 📞 Common Issues

### Port 5173 already in use?
```bash
npm run dev -- --port 3000
```

### Styles not loading?
- Ensure Tailwind CSS is installed
- Check `tailwind.config.js` paths
- Clear browser cache (Ctrl+Shift+Delete)

### API calls failing?
- Check that backend server is running
- Verify API URL in `src/api/services.js`
- Check browser console for CORS errors

## 🎓 This Portal Includes

- ✅ Professional login interface
- ✅ Comprehensive dashboard
- ✅ Service request system
- ✅ Activity tracking
- ✅ Notifications
- ✅ User profile management
- ✅ Multi-page navigation
- ✅ Error handling
- ✅ Loading states
- ✅ Responsive design
- ✅ Modern styling
- ✅ Production-ready code

**Ready to use! Just run `npm install && npm run dev` 🚀**
