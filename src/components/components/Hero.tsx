"use client";

import React, { useState } from 'react';
import { ChevronRight, Plus } from 'lucide-react';

const HeroSection: React.FC = () => {
  const [isDesignMode, setIsDesignMode] = useState(true);

  return (
    <div className="min-h-screen bg-gray-50 relative overflow-hidden flex flex-col">
      
      <nav className="flex items-center justify-between px-6 py-4 bg-white/80 backdrop-blur-sm">
        <div className="text-xl font-bold text-gray-900">Tech Hustlers</div>
        <div className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">About</a>
          <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Blogs</a>
          <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Contact</a>
        </div>
        <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors">
          Become a member
        </button>
      </nav>

      
      <div className="relative z-20 max-w-4xl mx-auto px-6 pt-16 pb-8 text-center">
        
        <h1 className="text-5xl md:text-7xl font-bold text-gray-800 leading-tight mb-8">
          A community for both
          <br />
          <span className="inline-flex items-center gap-4">
            <span className={`transition-colors duration-300 ${isDesignMode ? 'text-purple-500' : 'text-gray-400'}`}>
              Design
            </span>
            
            <button
              onClick={() => setIsDesignMode(!isDesignMode)}
              className="relative inline-flex h-8 w-14 items-center rounded-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300 hover:shadow-lg"
            >
              <span
                className={`inline-block h-6 w-6 transform rounded-full bg-white shadow-lg transition-transform duration-300 ${
                  isDesignMode ? 'translate-x-1' : 'translate-x-7'
                }`}
              />
            </button>
            <span className={`transition-colors duration-300 ${!isDesignMode ? 'text-gray-800' : 'text-gray-400'}`}>
              Dev
            </span>
            </span>
        </h1>

        
        <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
          Join a community of builders, creators, and dreamers shaping
          <br />
          the future with code and creativity.
        </p>

        
        <button className="group inline-flex items-center gap-2 bg-gray-800 text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-900 transition-all duration-300 hover:shadow-xl hover:scale-105">
          Get Started
          <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
        </button>
      </div>

      
      <div className="relative z-10 w-full mt-12 md:mt-16 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-start justify-items-center">
          
          <div className="transform rotate-3 hover:rotate-6 transition-transform duration-700">
            <div className="bg-white rounded-2xl shadow-2xl p-6 w-72 md:w-80 border border-gray-100">
              
              <div className="flex items-center gap-2 mb-6">
                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              </div>
              
              
              <div className="space-y-4">
                <div className="flex">
                  <div className="w-10 h-10 bg-gray-200 rounded-lg"></div>
                </div>
                <div className="ml-auto">
                  <div className="bg-purple-500 rounded-2xl px-4 py-2 text-white text-sm max-w-xs">
                    Hey! Working on something cool
                  </div>
                </div>
                <div className="flex">
                  <div className="bg-pink-200 rounded-2xl px-4 py-2 text-gray-800 text-sm max-w-xs">
                    That sounds awesome! 🚀
                  </div>
                </div>
              </div>
            </div>
          </div>

          
          <div className="transform -rotate-2 hover:rotate-0 transition-transform duration-700">
            <div className="bg-gradient-to-br from-purple-400 to-pink-400 rounded-3xl shadow-2xl p-8 w-56 md:w-64 text-white">
              <h3 className="text-lg font-semibold mb-2">Find friends</h3>
              <p className="text-purple-100 text-sm mb-6">in Tech</p>
              
              
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-white/20 rounded-full mr-3"></div>
                <div className="w-12 h-12 bg-white/20 rounded-full"></div>
              </div>
              
              <button className="w-full bg-white/20 backdrop-blur-sm rounded-xl py-3 px-4 flex items-center justify-between text-sm font-medium hover:bg-white/30 transition-colors">
                Find me a Team
                <Plus className="w-5 h-5" />
              </button>
            </div>
          </div>

          
          <div className="transform -rotate-3 hover:-rotate-6 transition-transform duration-700">
            <div className="bg-gray-900 rounded-2xl shadow-2xl overflow-hidden w-72 md:w-80">
              
              <div className="flex items-center gap-2 p-4 bg-gray-800">
                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              </div>
              
              
              <div className="p-4 text-sm font-mono">
                <div className="text-gray-400 mb-2">{'// App.tsx'}</div>
                <div className="text-blue-400">import <span className="text-yellow-300">React</span> from <span className="text-green-400">&apos;react&apos;</span>;</div>
                <div className="text-blue-400 mt-2">function <span className="text-yellow-300">App</span>() {'{'}</div>
                <div className="text-gray-300 ml-4 mt-1">return (</div>
                <div className="text-gray-300 ml-8 mt-1">&lt;<span className="text-red-400">div</span>&gt;</div>
                <div className="text-gray-300 ml-12 mt-1">&lt;<span className="text-red-400">h1</span>&gt;Hello World&lt;/<span className="text-red-400">h1</span>&gt;</div>
                <div className="text-gray-300 ml-8 mt-1">&lt;/<span className="text-red-400">div</span>&gt;</div>
                <div className="text-gray-300 ml-4 mt-1">);</div>
                <div className="text-gray-300 mt-1">{'}'}</div>
                <div className="text-blue-400 mt-2">export default <span className="text-yellow-300">App</span>;</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-40 left-1/4 w-2 h-2 bg-purple-300 rounded-full opacity-60"></div>
        <div className="absolute top-60 right-1/3 w-1 h-1 bg-pink-300 rounded-full opacity-60"></div>
        <div className="absolute bottom-40 left-1/5 w-3 h-3 bg-blue-300 rounded-full opacity-40"></div>
        <div className="absolute top-32 right-1/5 w-1 h-1 bg-green-300 rounded-full opacity-60"></div>
      </div>
    </div>
  );
};

export default HeroSection;