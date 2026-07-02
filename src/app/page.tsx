import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-gray-100 font-sans selection:bg-cyan-500 selection:text-black">
      {/* Navbar */}
      <nav className="border-b border-gray-800 bg-black/50 backdrop-blur-md fixed top-0 w-full z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-xl font-bold tracking-tighter text-white">
            NextGen<span className="text-cyan-400">Builders</span>
          </div>
          <div>
            <a href="#about" className="text-sm font-medium text-gray-400 hover:text-cyan-300 transition-colors">Program</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main>
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 flex flex-col items-center justify-center text-center px-6 overflow-hidden">
          {/* Glowing Background Elements */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-600/20 rounded-full blur-[120px] pointer-events-none"></div>
          <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-purple-600/20 rounded-full blur-[100px] pointer-events-none"></div>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white z-10 drop-shadow-sm mb-6">
            Build the Future of <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">the Web</span>
          </h1>
          
          <p className="max-w-2xl text-lg md:text-xl text-gray-400 mb-10 z-10 leading-relaxed">
            Welcome to the ultimate web development training program. Master modern frameworks, build scalable applications, and become the engineer tomorrow needs.
          </p>

          <div className="z-10 flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-3 rounded-full bg-cyan-500 text-black font-semibold text-lg hover:bg-cyan-400 transition-all shadow-[0_0_20px_rgba(34,211,238,0.4)] hover:shadow-[0_0_30px_rgba(34,211,238,0.6)]">
              Apply Now
            </button>
            <button className="px-8 py-3 rounded-full bg-gray-900 border border-gray-700 text-white font-semibold text-lg hover:bg-gray-800 transition-all">
              Learn More
            </button>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 px-6 bg-gradient-to-b from-black to-gray-900 relative">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">About the Program</h2>
              <p className="text-gray-400 max-w-xl mx-auto">Everything you need to go from beginner to professional, focusing on modern stacks and best practices.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Card 1 */}
              <div className="p-8 rounded-2xl bg-gray-900/50 border border-gray-800 hover:border-cyan-500/50 transition-colors group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="w-12 h-12 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center mb-6">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Modern Frameworks</h3>
                <p className="text-gray-400 leading-relaxed">
                  Deep dive into React, Next.js, and modern styling solutions like Tailwind CSS. Build fast, SEO-friendly applications.
                </p>
              </div>

              {/* Card 2 */}
              <div className="p-8 rounded-2xl bg-gray-900/50 border border-gray-800 hover:border-purple-500/50 transition-colors group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="w-12 h-12 rounded-lg bg-purple-500/10 text-purple-400 flex items-center justify-center mb-6">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"></path></svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Scalable Architecture</h3>
                <p className="text-gray-400 leading-relaxed">
                  Learn to design scalable databases, handle authentications, and deploy your apps globally with edge computing.
                </p>
              </div>

              {/* Card 3 */}
              <div className="p-8 rounded-2xl bg-gray-900/50 border border-gray-800 hover:border-blue-500/50 transition-colors group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="w-12 h-12 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center mb-6">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Career Readiness</h3>
                <p className="text-gray-400 leading-relaxed">
                  Build a standout portfolio, practice technical interviews, and get connected with our network of hiring partners.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-800 bg-black py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-2xl font-bold tracking-tighter text-white">
            NextGen<span className="text-cyan-400">Builders</span>
          </div>
          <div className="flex gap-6">
            <a href="#" className="text-gray-500 hover:text-white transition-colors">Twitter</a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors">GitHub</a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors">Discord</a>
          </div>
          <div className="text-gray-600 text-sm">
            &copy; {new Date().getFullYear()} NextGen Builders. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
