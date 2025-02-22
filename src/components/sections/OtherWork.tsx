"use client"

import { Link } from 'react-router-dom';

const OtherWork = () => {

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-center">
        <Link 
          to="/projects"
          className="w-full max-w-sm group"
        >
          <div className="bg-neutral-900 rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105 shadow-xl h-full">
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3 text-white group-hover:text-purple-400 transition-colors">
                Legacy Projects Archive
              </h3>
              <p className="text-gray-300 mb-4">
                Explore my collection of legacy projects, including web applications, tools, and experiments
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-neutral-800 rounded-full text-sm text-gray-200">React</span>
                <span className="px-3 py-1 bg-neutral-800 rounded-full text-sm text-gray-200">Next.js</span>
                <span className="px-3 py-1 bg-neutral-800 rounded-full text-sm text-gray-200">Vue.js</span>
                <span className="px-3 py-1 bg-neutral-800 rounded-full text-sm text-gray-200">More...</span>
              </div>
              <div className="inline-block w-full text-center px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg group-hover:from-purple-700 group-hover:to-blue-700 transition-all duration-300 font-medium shadow-lg group-hover:shadow-xl">
                Browse All Projects
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default OtherWork;