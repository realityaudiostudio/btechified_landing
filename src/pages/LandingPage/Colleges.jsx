import React from "react";
import { useNavigate } from "react-router-dom";
import "./landing.css";

// --- Mock Data for Colleges (Uniform Structure) ---
const partnerColleges = [
//   {
//     id: 1,
//     name: "Model Engineering College",
//     location: "Kochi, Ernakulam",
//     joined: "2024",
//     students: "850+"
//   },
//   {
//     id: 2,
//     name: "TKM Institute of Technology",
//     location: "Kollam",
//     joined: "2023",
//     students: "1,500+"
//   },
//   {
//     id: 3,
//     name: "Royal College of Engineering",
//     location: "Thrissur",
//     joined: "2024",
//     students: "1,200+"
//   },
  {
    id: 1,
    name: "Jyothi Engineering College",
    location: "Thrissur",
    joined: "2025",
    students: "100+"
  }
//   {
//     id: 5,
//     name: "Saintgits College",
//     location: "Kottayam",
//     joined: "2025",
//     students: "900+"
//   },
//   {
//     id: 6,
//     name: "Muthoot Institute",
//     location: "Kochi",
//     joined: "2024",
//     students: "600+"
//   },
//   {
//     id: 7,
//     name: "Rajagiri School of Engineering",
//     location: "Kochi",
//     joined: "2023",
//     students: "2,000+"
//   },
//   {
//     id: 8,
//     name: "College of Engineering Trivandrum",
//     location: "Trivandrum",
//     joined: "2023",
//     students: "2,500+"
//   },
//   {
//     id: 9,
//     name: "SCT College of Engineering",
//     location: "Trivandrum",
//     joined: "2024",
//     students: "1,100+"
//   }
];

const testimonials = [
  {
    quote: "Since adopting BTechified, our semester pass percentage has increased by 18%. The gamification keeps students engaged even after college hours.",
    author: "Dr. S. Menon",
    role: "HOD, Computer Science",
    college: "Royal College of Engineering"
  },
  {
    quote: "The analytics dashboard allows us to identify weak students early. It's not just a learning app; it's a retention tool.",
    author: "Prof. Anjali K.",
    role: "Principal",
    college: "TKM Institute"
  }
];

function Colleges() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-brand selection:text-white overflow-x-hidden">
      
      {/* --- Navbar (Consistent) --- */}
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
              onClick={() => window.location.href = "https://app.btechified.in/"} 
              className="hidden sm:block text-gray-600 font-medium hover:text-brand transition-colors"
            >
              Partner Login
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
      <section className="pt-32 pb-16 px-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand/5 border border-brand/10 rounded-full text-brand font-semibold text-sm mb-6 animate-fade-in-up">
           <span className="w-2 h-2 rounded-full bg-brand"></span>
           Trusted by 25+ Institutions
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-gray-900 mb-6 tracking-tight animate-fade-in-up delay-100">
          Kerala's Smartest Campuses <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-purple-600">
            Are BTechified.
          </span>
        </h1>
        <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-200">
          We partner with forward-thinking colleges to turn their syllabus into a digital campus asset.
          Here is our growing network.
        </p>
      </section>

      {/* --- Trust Measures (Stats) --- */}
      <section className="py-6 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 text-center hover:bg-white hover:shadow-xl transition-all">
                <div className="text-5xl font-bold text-gray-900 mb-2">15k+</div>
                <div className="text-gray-500 font-medium">Active Students</div>
            </div>
            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 text-center hover:bg-white hover:shadow-xl transition-all">
                <div className="text-5xl font-bold text-brand mb-2">24%</div>
                <div className="text-gray-500 font-medium">Avg. Pass Rate Increase</div>
            </div>
            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 text-center hover:bg-white hover:shadow-xl transition-all">
                <div className="text-5xl font-bold text-gray-900 mb-2">1.2M</div>
                <div className="text-gray-500 font-medium">Quests Completed</div>
            </div>
        </div>
      </section>

      {/* --- THE LISTING: Partner Network --- */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900">Our Partner Network</h2>
                <div className="w-20 h-1 bg-brand mx-auto mt-4 rounded-full"></div>
            </div>

            {/* The Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {partnerColleges.map((college) => (
                    <div 
                        key={college.id} 
                        className="group bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-start gap-4"
                    >
                        {/* Generic Icon / Logo Placeholder */}
                        <div className="w-16 h-16 bg-gray-50 rounded-xl flex items-center justify-center text-gray-400 font-bold text-2xl group-hover:bg-brand group-hover:text-white transition-colors">
                            {college.name.charAt(0)}
                        </div>
                        
                        <div className="flex-1">
                            <h3 className="font-bold text-lg text-gray-900 leading-tight mb-2 group-hover:text-brand transition-colors">
                                {college.name}
                            </h3>
                            
                            <div className="flex flex-col gap-1">
                                <div className="flex items-center gap-2 text-sm text-gray-500">
                                    <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    {college.location}
                                </div>
                                <div className="flex items-center gap-2 text-sm text-gray-500">
                                    <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                                    </svg>
                                    {college.students} Students
                                </div>
                            </div>
                        </div>

                        {/* Verified Badge */}
                        <div className="text-brand opacity-0 group-hover:opacity-100 transition-opacity">
                             <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                             </svg>
                        </div>
                    </div>
                ))}
            </div>
    {/*
            <div className="mt-12 text-center">
                 <button className="text-gray-500 font-medium hover:text-brand transition-colors border-b border-gray-300 hover:border-brand pb-0.5">
                    View all 25+ partner colleges
                 </button>
            </div>
        </div>
      </section>
*/}
      {/* --- Testimonials --- */}
      <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">Words from the Principals' Desk</h2>
            <div className="grid md:grid-cols-2 gap-8">
                {testimonials.map((t, i) => (
                    <div key={i} className="bg-white p-10 rounded-3xl border border-gray-100 shadow-sm relative">
                        <div className="absolute top-8 left-8 text-6xl text-brand/10 font-serif leading-none">"</div>
                        <p className="text-gray-600 text-lg leading-relaxed relative z-10 italic mb-8 pt-4">
                            {t.quote}
                        </p>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-gray-200 rounded-full"></div> {/* Placeholder for headshot */}
                            <div>
                                <div className="font-bold text-gray-900">{t.author}</div>
                                <div className="text-sm text-brand">{t.role}, {t.college}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
          </div>
      </section>

      {/* --- CTA: Partnership --- */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-bold mb-6">
             🚀 For College Admins & HODs
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
             Does your campus need an upgrade?
          </h2>
          <p className="text-gray-500 text-lg mb-10 leading-relaxed max-w-2xl mx-auto">
             Join the network. We provide your institution with a dedicated dashboard to track student progress, identify learning gaps, and modernize your internal exams.
          </p>
          
          <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 max-w-md mx-auto">
             <form className="flex flex-col gap-4">
                 <input type="text" placeholder="College Name" className="w-full px-4 py-3 bg-gray-50 rounded-xl border border-gray-200 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-all" />
                 <input type="email" placeholder="Official Email ID" className="w-full px-4 py-3 bg-gray-50 rounded-xl border border-gray-200 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-all" />
                 <button className="w-full py-4 bg-brand text-white font-bold rounded-xl hover:bg-brand-dark transition-all shadow-lg hover:shadow-brand/20">
                     Request Partnership Demo
                 </button>
             </form>
             <p className="text-xs text-gray-400 mt-4">We usually respond within 24 hours.</p>
          </div>
        </div>
      </section>

      {/* --- Footer (Consistent) --- */}
      <footer className="border-t border-gray-100 py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-24 h-24 rounded-lg flex items-center justify-center text-white font-bold"><img src="/images/introos.svg" alt="blogo"/></div>
          </div>
          <div className="flex gap-8 text-sm text-gray-500 font-medium">
            <a href="/inside" className="hover:text-brand transition-colors">Inside this</a>
            <a href="/pricing" className="hover:text-brand transition-colors">Pricing</a>
            <a href="#" className="text-brand font-bold">Colleges</a>
            <a href="#" className="hover:text-brand transition-colors">Contact</a>
          </div>
          <p className="text-sm text-gray-400">© 2025 btechified. Made for KTU Students.</p>
        </div>
      </footer>

    </div>
  );
}

export default Colleges;
