import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./landing.css"; // Assuming same CSS file for global styles/brand colors

function PricingPage() {
  const navigate = useNavigate();
  const [billingCycle, setBillingCycle] = useState("yearly"); // 'monthly' or 'yearly'

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-brand selection:text-white overflow-x-hidden">
      
      {/* --- Navbar (Consistent with Landing) --- */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigate("/")}>
            <img 
              src="/images/introos.svg" 
              alt="btechified logo" 
              className="h-10 w-auto object-contain" 
            />
          </div>
          
          <div className="flex items-center gap-4">
            <button 
              onClick={() => navigate("/login")} 
              className="hidden sm:block text-gray-600 font-medium hover:text-brand transition-colors"
            >
              Student Login
            </button>
            <button 
              onClick={() => navigate("/login")} 
              className="bg-gray-900 text-white px-6 py-2.5 rounded-full font-medium hover:bg-brand transition-all shadow-lg hover:shadow-brand/25 transform hover:-translate-y-0.5"
            >
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* --- Header Section --- */}
      <section className="pt-32 pb-12 px-6 relative">
        <div className="text-center max-w-3xl mx-auto relative z-10">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Choose Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-purple-600">Power Level</span>
          </h1>
          <p className="text-xl text-gray-500 mb-10">
            Whether you want to unlock the full map or just conquer a single boss, we have a plan for you.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <span className={`text-sm font-semibold ${billingCycle === 'monthly' ? 'text-gray-900' : 'text-gray-500'}`}>
              Monthly Quest
            </span>
            <button 
              onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
              className="relative w-16 h-8 bg-gray-200 rounded-full p-1 transition-colors duration-300 focus:outline-none"
            >
              <div className={`w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 ${billingCycle === 'yearly' ? 'translate-x-8' : 'translate-x-0'}`}></div>
            </button>
            <span className={`text-sm font-semibold ${billingCycle === 'yearly' ? 'text-gray-900' : 'text-gray-500'}`}>
              Yearly Grind <span className="text-brand text-xs ml-1">(Save ~20%)</span>
            </span>
          </div>
        </div>

        {/* Background Decorations */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-brand/5 rounded-full blur-[120px] pointer-events-none"></div>
      </section>

      {/* --- Pricing Cards --- */}
      <section className="pb-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          
          {/* 1. Single Course (Standard) */}
          <div className="bg-white p-8 rounded-[2rem] border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 relative group">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-gray-900">Solo Quest</h3>
              <p className="text-gray-500 mt-2 text-sm">Perfect for mastering one specific subject.</p>
            </div>
            <div className="mb-8">
              <span className="text-4xl font-bold text-gray-900">Variable</span>
              <span className="text-gray-400 font-medium"> / course</span>
            </div>
            
            <button className="w-full py-3 px-6 rounded-xl border-2 border-gray-900 text-gray-900 font-bold hover:bg-gray-900 hover:text-white transition-all mb-8">
              Select Course
            </button>

            <ul className="space-y-4 text-sm text-gray-600">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-green-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                <span>Full access to 1 Course Syllabus</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-green-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                <span>Lifetime access to course materials</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-green-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                <span>1 Course Completion Certificate</span>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <svg className="w-5 h-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                <span>No 1:1 Mentorship</span>
              </li>
            </ul>
          </div>

          {/* 2. Elite Subscription (Highlighted) */}
          <div className="bg-gray-900 p-8 rounded-[2rem] border border-gray-900 shadow-2xl relative transform md:-translate-y-4 z-10">
            {/* Badge */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg animate-pulse-slow">
              MOST POPULAR
            </div>

            <div className="mb-6">
              <h3 className="text-2xl font-bold text-white">Elite Pass</h3>
              <p className="text-gray-400 mt-2 text-sm">Unlock the entire platform. Unlimited learning.</p>
            </div>
            <div className="mb-8">
              <div className="flex items-end gap-1">
                <span className="text-5xl font-bold text-white">
                  ₹{billingCycle === 'yearly' ? '300' : '399'}
                </span>
                <span className="text-gray-400 font-medium mb-1">/ month</span>
              </div>
              <p className="text-xs text-gray-400 mt-2">
                {billingCycle === 'yearly' ? 'Billed ₹3600 yearly' : 'Billed monthly'}
              </p>
            </div>
            
            <button className="w-full py-4 px-6 rounded-xl bg-brand text-white font-bold shadow-lg hover:bg-brand-dark hover:scale-105 transition-all mb-8">
              Get Elite Access
            </button>

            <ul className="space-y-4 text-sm text-gray-300">
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center shrink-0">
                  <svg className="w-3 h-3 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                </div>
                <span className="font-medium text-white">Access to ALL Courses & Quests</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center shrink-0">
                  <svg className="w-3 h-3 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                </div>
                <span className="font-medium text-white">1:1 Expert Mentorship Sessions</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center shrink-0">
                  <svg className="w-3 h-3 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                </div>
                <span>Internship Opportunities</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center shrink-0">
                  <svg className="w-3 h-3 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                </div>
                <span>Gamified Profile Badge (Pro)</span>
              </li>
            </ul>
          </div>

          {/* 3. For Schools (B2B) */}
          <div className="bg-gradient-to-b from-purple-50 to-white p-8 rounded-[2rem] border border-purple-100 shadow-sm hover:shadow-lg transition-all duration-300">
            <div className="mb-6">
              <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-4 text-purple-600">
                 <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">For Campus</h3>
              <p className="text-gray-500 mt-2 text-sm">Empower your entire batch or college department.</p>
            </div>
            
            <div className="mb-8">
              <span className="text-2xl font-bold text-gray-900">Custom Pricing</span>
            </div>
            
            <button className="w-full py-3 px-6 rounded-xl bg-purple-100 text-purple-700 font-bold hover:bg-purple-200 transition-all mb-8">
              Contact Team
            </button>

            <ul className="space-y-4 text-sm text-gray-600">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-purple-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                <span>Bulk Student Licenses</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-purple-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                <span>Faculty Dashboard</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-purple-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                <span>College Leaderboard</span>
              </li>
            </ul>
          </div>

        </div>
      </section>

      {/* --- FAQ/Trust Section --- */}
      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Unsure where to start?</h2>
          <p className="text-gray-500 mb-8">Join the free tier first. Play the first module of any course for free to see if it fits your style.</p>
          <button 
             onClick={() => navigate("/login")}
             className="text-brand font-bold hover:text-purple-700 underline underline-offset-4"
          >
            Create Free Account &rarr;
          </button>
        </div>
      </section>

      {/* --- Footer (Consistent) --- */}
      <footer className="border-t border-gray-100 py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gray-900 rounded-lg flex items-center justify-center text-white font-bold">B</div>
            <span className="font-bold text-gray-900">btechified</span>
          </div>
          <div className="flex gap-8 text-sm text-gray-500 font-medium">
            <a href="/inside" className="hover:text-brand transition-colors">Courses</a>
            <a href="#" className="text-brand font-bold">Pricing</a>
            <a href="/colleges" className="hover:text-brand transition-colors">For Schools</a>
            <a href="/contact" className="hover:text-brand transition-colors">Contact</a>
          </div>
          <p className="text-sm text-gray-400">© 2025 btechified. Made for KTU Students.</p>
        </div>
      </footer>

    </div>
  );
}

export default PricingPage;