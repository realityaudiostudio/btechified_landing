import React from "react";
import { useNavigate } from "react-router-dom";
import "./landing.css";

function Contact() {
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

      {/* --- Main Grid Layout --- */}
      <section className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
            
            {/* Left Column: Context & Info */}
            <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-bold mb-6">
                    <span className="animate-pulse">💬</span> Player Support
                </div>
                <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                    Stuck on a level? <br/>
                    <span className="text-brand">Let's talk.</span>
                </h1>
                <p className="text-xl text-gray-500 mb-10 leading-relaxed">
                    Whether you are a student facing a bug, a parent with a question, or a college principal looking for a partnership—we are all ears.
                </p>

                {/* Contact Cards */}
                <div className="space-y-6">
                    
                    {/* Card 1: Students */}
                    <div className="flex items-start gap-4 p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:bg-white hover:shadow-lg transition-all">
                        <div className="w-12 h-12 bg-brand/10 text-brand rounded-xl flex items-center justify-center text-2xl">
                            🎓
                        </div>
                        <div>
                            <h3 className="font-bold text-gray-900 text-lg">Student Support</h3>
                            <p className="text-gray-500 text-sm mb-2">Issues with login, payments, or quests?</p>
                            <a href="mailto:help@btechified.in" className="text-brand font-bold hover:underline">help@btechified.in</a>
                        </div>
                    </div>

                    {/* Card 2: Colleges */}
                    <div className="flex items-start gap-4 p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:bg-white hover:shadow-lg transition-all">
                        <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center text-2xl">
                            🤝
                        </div>
                        <div>
                            <h3 className="font-bold text-gray-900 text-lg">Institutional Partnerships</h3>
                            <p className="text-gray-500 text-sm mb-2">For onboarding your campus.</p>
                            <a href="mailto:partners@btechified.in" className="text-brand font-bold hover:underline">partners@btechified.in</a>
                        </div>
                    </div>

                    {/* Card 3: Location */}
                    <div className="flex items-start gap-4 p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:bg-white hover:shadow-lg transition-all">
                        <div className="w-12 h-12 bg-green-100 text-green-600 rounded-xl flex items-center justify-center text-2xl">
                            📍
                        </div>
                        <div>
                            <h3 className="font-bold text-gray-900 text-lg">HQ</h3>
                            <p className="text-gray-500 text-sm">
                                BTechified Labs, Startup Village,<br/>
                                Kochi, Kerala - 682021
                            </p>
                        </div>
                    </div>

                </div>
            </div>

            {/* Right Column: The Form */}
            <div className="bg-white p-8 sm:p-10 rounded-[2.5rem] shadow-2xl border border-gray-100 relative">
                 {/* Decoration */}
                 <div className="absolute top-0 right-0 w-32 h-32 bg-brand/5 rounded-bl-[2.5rem] rounded-tr-[2.5rem] pointer-events-none"></div>

                 <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a message</h2>
                 
                 <form className="space-y-5">
                    
                    <div className="grid sm:grid-cols-2 gap-5">
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-gray-700 ml-1">Name</label>
                            <input 
                                type="text" 
                                placeholder="Your Name" 
                                className="w-full px-4 py-3 bg-gray-50 rounded-xl border border-gray-200 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-all"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-gray-700 ml-1">I am a...</label>
                            <select className="w-full px-4 py-3 bg-gray-50 rounded-xl border border-gray-200 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-all appearance-none cursor-pointer">
                                <option>Student</option>
                                <option>College Admin</option>
                                <option>Parent</option>
                                <option>Teacher</option>
                            </select>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-bold text-gray-700 ml-1">Email</label>
                        <input 
                            type="email" 
                            placeholder="you@college.edu" 
                            className="w-full px-4 py-3 bg-gray-50 rounded-xl border border-gray-200 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-all"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-bold text-gray-700 ml-1">Subject</label>
                        <input 
                            type="text" 
                            placeholder="How can we help?" 
                            className="w-full px-4 py-3 bg-gray-50 rounded-xl border border-gray-200 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-all"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-bold text-gray-700 ml-1">Message</label>
                        <textarea 
                            rows="4"
                            placeholder="Tell us more about your inquiry..." 
                            className="w-full px-4 py-3 bg-gray-50 rounded-xl border border-gray-200 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-all resize-none"
                        ></textarea>
                    </div>

                    <button className="w-full py-4 bg-gray-900 text-white font-bold rounded-xl hover:bg-brand transition-all shadow-lg hover:shadow-brand/20 transform hover:-translate-y-1">
                        Send Message
                    </button>
                    
                    <p className="text-center text-xs text-gray-400 mt-4">
                        By sending this, you agree to our Terms of Service.
                    </p>

                 </form>
            </div>

        </div>
      </section>

      {/* --- Socials Section --- */}
      <section className="bg-gray-50 py-16 text-center border-t border-gray-200">
         <h3 className="text-gray-900 font-bold text-xl mb-8">Follow the journey on social</h3>
         <div className="flex justify-center gap-6">
             {['Instagram', 'LinkedIn', 'Twitter', 'YouTube'].map((social) => (
                 <a key={social} href="#" className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-400 hover:text-brand hover:scale-110 shadow-sm hover:shadow-md transition-all">
                     {/* You can replace these with actual SVG icons later */}
                     <span className="text-xs font-bold">{social[0]}</span>
                 </a>
             ))}
         </div>
      </section>

      {/* --- Footer (Consistent) --- */}
      <footer className="border-t border-gray-200 py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-24 h-24 rounded-lg flex items-center justify-center text-white font-bold"><img src="/images/introos.svg" alt="blogo"/></div>
          </div>
          <div className="flex gap-8 text-sm text-gray-500 font-medium">
            <a href="/inside" className="hover:text-brand transition-colors">Inside this</a>
            <a href="/pricing" className="hover:text-brand transition-colors">Pricing</a>
            <a href="/colleges" className="hover:text-brand transition-colors">Colleges</a>
            <a href="#" className="text-brand font-bold">Contact</a>
          </div>
          <p className="text-sm text-gray-400">© 2025 btechified. Made for KTU Students.</p>
        </div>
      </footer>

    </div>
  );
}

export default Contact;