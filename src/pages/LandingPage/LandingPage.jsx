import React from "react";
import { useNavigate } from "react-router-dom";
import "./landing.css";
// Keeping your original image imports
import Aalkar from "/images/people.png"; 

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-brand selection:text-white overflow-x-hidden">
      
      {/* --- Navbar (Unchanged) --- */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img 
              src="/images/introos.svg" 
              alt="btechified logo" 
              className="h-10 w-auto object-contain" 
            />
          </div>
          
          <div className="flex items-center gap-4">
            <button 
              onClick={() => window.location.href = "https://app.btechified.in/"} 
              className="hidden sm:block text-gray-600 font-medium hover:text-brand transition-colors"
            >
              Sign In
            </button>
            <button 
              onClick={() => window.location.href = "https://app.btechified.in/"} 
              className="bg-gray-900 text-white px-6 py-2.5 rounded-full font-medium hover:bg-brand transition-all shadow-lg hover:shadow-brand/25 transform hover:-translate-y-0.5"
            >
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* --- Hero Section --- */}
      <section className="pt-32 pb-20 px-6 relative">
        {/* Background Blobs */}
        <div className="absolute top-20 right-0 -mr-20 w-96 h-96 bg-brand/10 rounded-full blur-[100px] pointer-events-none animate-pulse-slow"></div>
        <div className="absolute bottom-0 left-0 -ml-20 w-72 h-72 bg-purple-100 rounded-full blur-[80px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
          
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 border border-green-200 rounded-full text-green-700 font-bold text-sm mb-6 animate-fade-in-up">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Relax Mode Activated 🍃
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 leading-[1.1] mb-6 tracking-tight animate-fade-in-up delay-100">
              Master Engineering. <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-purple-600">
                Play the Game.
              </span>
            </h1>
            
            <p className="text-xl text-gray-500 mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed animate-fade-in-up delay-200">
              A gamified platform for B.Tech students and engineering lovers. Learn from <b>Student Teachers</b> who keep it simple, battle in quizzes, and earn real rewards.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start animate-fade-in-up delay-300">
              <button 
                onClick={() => navigate("/login")}
                className="w-full sm:w-auto px-8 py-4 bg-brand text-white rounded-xl font-bold text-lg shadow-xl shadow-brand/20 hover:bg-brand-dark hover:scale-105 transition-all"
              >
                Start Learning
              </button>
              <button 
                onClick={() => document.getElementById('features').scrollIntoView({ behavior: 'smooth' })}
                className="w-full sm:w-auto px-8 py-4 bg-white text-gray-700 border border-gray-200 rounded-xl font-bold text-lg hover:bg-gray-50 hover:border-gray-300 transition-all flex items-center justify-center gap-2"
              >
                What's Inside?
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>

            {/* Social Proof - Keeping Image Unchanged */}
            <div className="mt-10 flex items-center justify-center lg:justify-start gap-4 animate-fade-in-up delay-400">
              <div className="flex -space-x-4">
                <img className="w-12 h-12 rounded-full border-4 border-white object-cover" src={Aalkar} alt="User" />
                <div className="w-12 h-12 rounded-full border-4 border-white bg-gray-100 flex items-center justify-center text-xs font-bold text-gray-600">
                  +100
                </div>
              </div>
              <div className="text-sm">
                <p className="font-bold text-gray-900">Engineers learning now</p>
                <div className="flex text-yellow-400 text-xs">★★★★★</div>
              </div>
            </div>
          </div>

          {/* Right Image/Illustration - Keeping Image Unchanged */}
            <div className="relative animate-float lg:block">
            <img 
              src="/images/share.svg" 
              alt="Gamified Learning Illustration" 
              className="w-full h-auto drop-shadow-2xl hover:scale-[1.02] transition-transform duration-500"
            />
            
            {/* Floating Badge 1 - Coins */}
            <div className="absolute top-10 -left-5 sm:-left-10 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-3 animate-bounce-slow hidden sm:flex">
              <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-600">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <div>
                <p className="text-xs text-gray-500 font-bold uppercase">Rewards</p>
                <p className="font-bold text-gray-900">500 Coins Earned</p>
              </div>
            </div>

             {/* Floating Badge 2 - Live Battle */}
             <div className="absolute bottom-20 -right-5 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-3 animate-bounce-slow delay-700 hidden sm:flex">
              <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center text-red-600">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <div>
                <p className="text-xs text-gray-500 font-bold uppercase">Live Battle</p>
                <p className="font-bold text-gray-900">You vs Batchmates</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* --- Features Grid --- */}

      <section id="features" className="py-24 bg-gray-50 relative">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center max-w-2xl mx-auto mb-16">

            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Why BTech Students love this?</h2>

            <p className="text-gray-500 text-lg">We bridge the gap between your university exams and industry demands—without the boredom.</p>

          </div>



          <div className="grid md:grid-cols-3 gap-8">

            {[

              {

                title: "Gamified Syllabus",

                desc: "Forget boring PDFs. Complete modules as 'Quests', earn XP for every topic you master, and track your semester progress.",

                icon: "M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z M21 12a9 9 0 11-18 0 9 9 0 0118 0z" // Play button icon

              },

              {

                title: "Skill Enhancement",

                desc: "Don't just pass exams. Learn the practical coding and engineering skills that KTU theory misses, all within the same platform.",

                icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" // Beaker/Potion icon

              },

              {

                title: "The Leaderboards",

                desc: "Compete with batchmates and students across Kerala. Earn badges, climb the ranks, and showcase your profile to recruiters.",

                icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" // Checkmark/Badge icon

              }

            ].map((feature, idx) => (

              <div key={idx} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">

                <div className="w-14 h-14 bg-brand/10 rounded-2xl flex items-center justify-center text-brand mb-6">

                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">

                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={feature.icon} />

                  </svg>

                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>

                <p className="text-gray-500 leading-relaxed">{feature.desc}</p>

              </div>

            ))}

          </div>
          {/* Quick List of Content Types */}
          <div className="mt-16 flex flex-wrap justify-center gap-4 sm:gap-8 opacity-70">
             {["Module-wise Videos", "Readable Notes", "Activity Hub", "Live Classes", "Leaderboards"].map((item, i) => (
                 <div key={i} className="flex items-center gap-2 text-gray-500 font-semibold">
                    <span className="text-brand">✓</span> {item}
                 </div>
             ))}
          </div>

        </div>

      </section>

      {/* --- CTA Section --- */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto bg-gray-900 rounded-[2.5rem] p-12 sm:p-20 text-center relative overflow-hidden">
          {/* Decorative gradients */}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-brand/20 to-transparent pointer-events-none"></div>
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-brand rounded-full blur-[100px] opacity-50"></div>

          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 relative z-10">
            Variety of courses. <br/> One Gamified Platform.
          </h2>
          <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto relative z-10">
            Join BTechified with students who are making learning addictive. Check out our pricing and start your first quest today.
          </p>
          
          <button 
            onClick={() => window.location.href = "https://app.btechified.in/"}
            className="px-10 py-4 bg-white text-gray-900 rounded-xl font-bold text-lg shadow-lg hover:bg-brand hover:text-white hover:scale-105 transition-all relative z-10"
          >
            Start Learning
          </button>
        </div>
      </section>

      {/* --- Footer (Unchanged) --- */}
      <footer className="border-t border-gray-100 py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-24 h-24 rounded-lg flex items-center justify-center text-white font-bold"><img src="/images/introos.svg" alt="blogo"/></div>
          </div>
          <div className="flex gap-8 text-sm text-gray-500 font-medium">
            <a href="/inside" className="hover:text-brand transition-colors">Inside this</a>
            <a href="/pricing" className="hover:text-brand transition-colors">Pricing</a>
            <a href="/colleges" className="hover:text-brand transition-colors">Colleges</a>
            <a href="/contact" className="hover:text-brand transition-colors">Contact</a>
          </div>
          <p className="text-sm text-gray-400">© 2025 btechified. Made for KTU Students.</p>
        </div>
      </footer>

    </div>
  );
}

export default LandingPage;