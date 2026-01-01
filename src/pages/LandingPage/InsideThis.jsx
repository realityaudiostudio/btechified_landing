import React from "react";
import { useNavigate } from "react-router-dom";
import "./landing.css"; 

// --- Visual Mockups for the specific features ---

const CoinSystemVisual = () => (
  <div className="relative w-full h-64 bg-gray-900 rounded-2xl overflow-hidden flex items-center justify-center shadow-2xl border border-gray-800 group">
    <div className="absolute inset-0 bg-brand/10"></div>
    {/* Floating Coin */}
    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-yellow-300 to-yellow-600 border-4 border-yellow-200 flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-500 z-10 animate-float">
       <span className="text-4xl font-black text-yellow-900">B</span>
    </div>
    <div className="absolute bottom-6 text-center">
        <p className="text-yellow-400 font-mono text-sm tracking-widest uppercase">Balance</p>
        <p className="text-white font-bold text-2xl">2,450 Coins</p>
    </div>
    {/* Background particles */}
    <div className="absolute top-10 left-10 w-4 h-4 rounded-full bg-yellow-500 opacity-50 animate-ping"></div>
    <div className="absolute bottom-20 right-20 w-3 h-3 rounded-full bg-yellow-300 opacity-50"></div>
  </div>
);

const BattleVisual = () => (
  <div className="w-full h-64 bg-gradient-to-r from-red-50 to-blue-50 rounded-2xl border-4 border-white shadow-xl flex items-center justify-between px-4 sm:px-10 relative overflow-hidden">
    {/* Player 1 */}
    <div className="text-center z-10">
        <div className="w-16 h-16 bg-blue-100 rounded-full mb-2 mx-auto border-2 border-blue-500"></div>
        <div className="w-20 h-3 bg-gray-200 rounded-full mx-auto overflow-hidden"><div className="w-3/4 h-full bg-green-500"></div></div>
    </div>
    {/* VS Badge */}
    <div className="w-12 h-12 bg-red-600 rounded-lg transform rotate-45 flex items-center justify-center z-10 shadow-lg animate-pulse">
        <span className="transform -rotate-45 text-white font-black text-sm">VS</span>
    </div>
    {/* Player 2 */}
    <div className="text-center z-10">
        <div className="w-16 h-16 bg-red-100 rounded-full mb-2 mx-auto border-2 border-red-500"></div>
        <div className="w-20 h-3 bg-gray-200 rounded-full mx-auto overflow-hidden"><div className="w-1/2 h-full bg-yellow-500"></div></div>
    </div>
  </div>
);

function InsideThis() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-brand selection:text-white overflow-x-hidden">
      
      {/* --- Navbar --- */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigate("/")}>
            <img src="/images/introos.svg" alt="logo" className="h-10 w-auto object-contain" />
          </div>
          <div className="flex items-center gap-4">
            <button onClick={() => window.location.href = "https://app.btechified.in/"} className="bg-gray-900 text-white px-6 py-2.5 rounded-full font-medium hover:bg-brand transition-all shadow-lg hover:shadow-brand/25">
              Open App
            </button>
          </div>
        </div>
      </nav>

      {/* --- Hero: The Philosophy --- */}
      <section className="pt-32 pb-16 px-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-bold mb-6">
            🌱 Activates Relax Mode
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-gray-900 mb-6 tracking-tight">
          Not just for B.Tech students. <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-purple-600">
            For Engineers at heart.
          </span>
        </h1>
        <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
          We combined strict syllabus coverage with a gamified ecosystem. 
          Whether you need to pass an exam or build a career, you do it here without the stress.
        </p>
      </section>

      {/* --- Section 1: The Core Learning Stack --- */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-gray-900">The "Complete" Learning Stack</h2>
                <p className="text-gray-500 mt-2">Everything you need to master a module, all in one place.</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                    { title: "Video Lessons", desc: "Module-wise breakdowns that simplify complex topics.", icon: "🎥" },
                    { title: "Activity Hub", desc: "Practical tasks to apply what you just learned.", icon: "⚡" },
                    { title: "Readables & Notes", desc: "Quick revision materials for last-minute prep.", icon: "📚" },
                    { title: "Live Classes", desc: "Interactive sessions to clear doubts instantly.", icon: "🔴" },
                ].map((item, idx) => (
                    <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
                        <div className="text-4xl mb-4">{item.icon}</div>
                        <h3 className="font-bold text-gray-900 text-lg mb-2">{item.title}</h3>
                        <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* --- Section 2: Student Teachers (The Unique Selling Point) --- */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
            <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Taught by Student Teachers.</h2>
                <h3 className="text-2xl text-gray-500 mb-6">"We speak your language."</h3>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    Tired of professors using jargon you don't understand? 
                    Our courses are taught by <strong>Student Teachers</strong>—seniors and experts who know exactly how to explain concepts simply, without boring you.
                </p>
                <div className="flex gap-3">
                    <span className="px-4 py-2 bg-gray-100 rounded-lg text-gray-700 font-medium">#NoJargon</span>
                    <span className="px-4 py-2 bg-gray-100 rounded-lg text-gray-700 font-medium">#PeerLearning</span>
                </div>
            </div>
            <div className="relative">
                {/* Abstract Card for a 'Student Teacher' */}
                <div className="bg-white p-8 rounded-3xl shadow-2xl border border-gray-100 transform rotate-2 hover:rotate-0 transition-transform duration-500">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-16 h-16 bg-brand rounded-full flex items-center justify-center text-white text-2xl font-bold">ST</div>
                        <div>
                            <p className="font-bold text-lg">Senior Mentor</p>
                            <p className="text-brand font-medium text-sm">Top Rated Instructor</p>
                        </div>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-xl text-gray-600 italic">
                        "I'll explain Big-O notation using a pizza delivery example. Trust me, you'll never forget it."
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* --- Section 3: Gamification (Battles & Warmups) --- */}
      <section className="py-24 px-6 bg-gray-900 text-white rounded-[3rem] mx-4 sm:mx-8">
         <div className="max-w-7xl mx-auto">
             <div className="text-center mb-16">
                 <h2 className="text-3xl sm:text-4xl font-bold mb-4">Gamified to keep you awake.</h2>
                 <p className="text-gray-400">Studying doesn't have to be a lonely struggle.</p>
             </div>

             <div className="grid lg:grid-cols-2 gap-12 items-center">
                 {/* Left: Battle Visual */}
                 <div className="order-2 lg:order-1">
                     <BattleVisual />
                     <div className="grid grid-cols-2 gap-4 mt-8">
                         <div className="bg-gray-800 p-4 rounded-xl">
                             <h4 className="font-bold text-yellow-400 mb-1">Live Battles</h4>
                             <p className="text-sm text-gray-400">Challenge friends to real-time quizzes.</p>
                         </div>
                         <div className="bg-gray-800 p-4 rounded-xl">
                             <h4 className="font-bold text-green-400 mb-1">Warm Up Rewind</h4>
                             <p className="text-sm text-gray-400">Quick gamified sessions to refresh memory.</p>
                         </div>
                     </div>
                 </div>

                 {/* Right: Content */}
                 <div className="order-1 lg:order-2">
                     <h3 className="text-3xl font-bold mb-6">Battle Mode & Streaks</h3>
                     <p className="text-gray-300 text-lg leading-relaxed mb-6">
                        Prove your knowledge in <strong>Live Battle Quizzes</strong>. Maintain your <strong>Daily Streak</strong> to show consistency. Climb the <strong>Leaderboard</strong> and become a legend in your college.
                     </p>
                     <p className="text-gray-300 text-lg">
                        It's the adrenaline of gaming, applied to your Engineering degree.
                     </p>
                 </div>
             </div>
         </div>
      </section>

      {/* --- Section 4: The Economy (Coins) --- */}
      <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
              <div>
                  <h2 className="text-4xl font-bold text-gray-900 mb-6">Learn. Earn. Redeem.</h2>
                  <p className="text-lg text-gray-500 mb-8">
                      We value your time. Every module you finish, every battle you win, you earn <strong>Coins</strong>.
                  </p>
                  <ul className="space-y-4">
                      <li className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-yellow-100 text-yellow-600 flex items-center justify-center font-bold">1</div>
                          <span className="text-gray-700">Complete quests and quizzes to earn coins.</span>
                      </li>
                      <li className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-yellow-100 text-yellow-600 flex items-center justify-center font-bold">2</div>
                          <span className="text-gray-700">Accumulate your wallet balance.</span>
                      </li>
                      <li className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-yellow-100 text-yellow-600 flex items-center justify-center font-bold">3</div>
                          <span className="text-gray-700 font-bold">Redeem for exciting real-world prizes.</span>
                      </li>
                  </ul>
              </div>
              <div>
                  <CoinSystemVisual />
              </div>
          </div>
      </section>

      {/* --- Section 5: Pricing/CTA --- */}
      <section className="py-20 bg-gray-50 border-t border-gray-200">
          <div className="max-w-4xl mx-auto text-center px-6">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Courses for every need</h2>
              <p className="text-gray-500 mb-10">
                  We offer a variety of courses with different pricing plans. Whether you want a single subject or the full semester package.
              </p>
              
              <button 
                onClick={() => window.location.href = "https://app.btechified.in/"}
                className="bg-brand text-white px-10 py-4 rounded-xl font-bold text-xl shadow-xl hover:bg-brand-dark hover:scale-105 transition-all"
              >
                Explore Courses on App
              </button>
          </div>
      </section>

      {/* --- Footer --- */}
      <footer className="border-t border-gray-100 py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-24 h-24 rounded-lg flex items-center justify-center text-white font-bold"><img src="/images/introos.svg" alt="blogo"/></div>
          </div>
          <div className="flex gap-8 text-sm text-gray-500 font-medium">
            <a href="#" className="text-brand font-bold">Inside this</a>
            <a href="/pricing" className="hover:text-brand transition-colors">Pricing</a>
            <a href="/colleges" className="hover:text-brand transition-colors">Colleges</a>
            <a href="/contact" className="hover:text-brand transition-colors">Contact</a>
          </div>
          <p className="text-sm text-gray-400">© 2025 btechified. Made for Students.</p>
        </div>
      </footer>

    </div>
  );
}

export default InsideThis;