import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Users, Brain, BarChart3, ChevronRight } from 'lucide-react';
import Navbar from '../components/Navbar';

export default function LandingPage() {
  const features = [
    {
      title: "Smart Services",
      description: "Instantly access campus resources, book facilities, and manage requests effortlessly.",
      icon: Sparkles,
      color: "from-blue-500 to-primary-600"
    },
    {
      title: "Student Collaboration",
      description: "Connect with peers, join study groups, and collaborate on projects seamlessly.",
      icon: Users,
      color: "from-purple-500 to-accent-600"
    },
    {
      title: "AI Recommendations",
      description: "Personalized suggestions for courses, clubs, and events based on your interests.",
      icon: Brain,
      color: "from-emerald-400 to-emerald-600"
    },
    {
      title: "Dashboard Analytics",
      description: "Track your academic progress and campus engagement with intuitive visualizations.",
      icon: BarChart3,
      color: "from-orange-400 to-rose-500"
    }
  ];

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark transition-colors duration-300">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        {/* Abstract Background Shapes */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-500/10 dark:bg-primary-500/5 rounded-full blur-3xl" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent-500/10 dark:bg-accent-500/5 rounded-full blur-3xl translate-x-1/3 -translate-y-1/2" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 dark:bg-slate-800 text-sm font-medium text-slate-600 dark:text-slate-300 mb-8 border border-slate-200 dark:border-slate-700 shadow-sm">
            <Sparkles size={16} className="text-accent-500" />
            <span>Introducing CampusX 2.0</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8">
            <span className="block text-slate-900 dark:text-white mb-2">AI-Powered</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-600">
              Campus Platform
            </span>
          </h1>
          
          <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-600 dark:text-slate-400 mb-10">
            Smart Campus. Smarter You. Revolutionize your campus experience with AI-driven student services, seamless collaboration, and powerful analytics.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/signup"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white bg-primary-600 hover:bg-primary-700 rounded-xl transition-all shadow-soft-lg hover:-translate-y-0.5"
            >
              Get Started
              <ArrowRight size={20} />
            </Link>
            <Link
              to="/explore"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-slate-700 dark:text-white bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 rounded-xl transition-all shadow-sm focus:outline-none"
            >
              Explore Features
            </Link>
          </div>
          
          {/* Abstract Dashboard Graphic Preview */}
          <div className="mt-20 mx-auto max-w-5xl relative">
             <div className="absolute -inset-1 bg-gradient-to-r from-primary-600 to-accent-600 rounded-2xl blur opacity-20 dark:opacity-30"></div>
             <div className="relative bg-white dark:bg-slate-900 ring-1 ring-slate-200 dark:ring-slate-800 rounded-2xl shadow-2xl p-2 sm:p-4">
                <div className="rounded-xl overflow-hidden border border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 flex aspect-[16/9] md:aspect-[21/9]">
                   {/* Fake Sidebar */}
                   <div className="w-16 md:w-48 bg-white dark:bg-slate-950 border-r border-slate-200 dark:border-slate-800 p-4 hidden sm:flex flex-col gap-4">
                      <div className="h-6 w-24 bg-slate-200 dark:bg-slate-800 rounded mb-8 hidden md:block"></div>
                      <div className="h-8 w-8 md:w-full bg-primary-100 dark:bg-primary-900/30 rounded"></div>
                      <div className="h-8 w-8 md:w-full bg-slate-100 dark:bg-slate-800 rounded"></div>
                      <div className="h-8 w-8 md:w-full bg-slate-100 dark:bg-slate-800 rounded"></div>
                   </div>
                   {/* Fake Content */}
                   <div className="flex-1 p-6 flex flex-col gap-6">
                      <div className="flex justify-between items-center">
                         <div className="h-8 w-48 bg-slate-200 dark:bg-slate-800 rounded"></div>
                         <div className="h-8 w-8 rounded-full bg-slate-200 dark:bg-slate-800"></div>
                      </div>
                      <div className="grid grid-cols-3 gap-4">
                         <div className="h-24 bg-white dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm"></div>
                         <div className="h-24 bg-white dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm"></div>
                         <div className="h-24 bg-white dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm hidden md:block"></div>
                      </div>
                      <div className="flex-1 bg-white dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm mb-4"></div>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 bg-slate-50 dark:bg-slate-900/50" id="features">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl mb-4">
              Everything you need to succeed
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              A comprehensive suite of tools designed to streamline your academic journey and campus life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="bg-white dark:bg-slate-800 rounded-3xl p-8 border border-slate-100 dark:border-slate-700 shadow-soft hover:shadow-soft-lg transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className={`w-14 h-14 rounded-2xl mb-6 flex items-center justify-center bg-gradient-to-br ${feature.color} shadow-inner`}>
                  <feature.icon className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">{feature.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                  {feature.description}
                </p>
                <div className="flex items-center text-primary-600 dark:text-primary-400 font-medium group-hover:gap-2 transition-all cursor-pointer">
                  <span>Learn more</span>
                  <ChevronRight size={18} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Testimonial / Footer minimal */}
      <div className="py-12 border-t border-slate-200 dark:border-slate-800 mt-20 text-center">
         <p className="text-slate-500 dark:text-slate-400 font-medium">© {new Date().getFullYear()} CampusX Platform. All rights reserved.</p>
      </div>
    </div>
  );
}
