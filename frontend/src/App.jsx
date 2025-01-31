import '@fontsource/inter';
import React, { useState, useEffect } from "react";
import FunInfo from './components/FunInfo.jsx';
import PluginInfo from './components/PluginInfo.jsx';
import WebappsInfo from './components/WebappsInfo.jsx';

function App() {
  const [activeCategory, setActiveCategory] = useState("web apps");
  const [loading, setLoading] = useState(true); // Track loading state

  const categories = ["web apps", "plugins", "fun"];

  useEffect(() => {
    // Simulate loading for 2 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer); // Clean up the timer
  }, []);

  return (
    <div className="min-h-screen bg-[#18181b] text-white relative">
      {/* Blur overlay on loading */}
      {loading && (
        <div className="absolute inset-0 bg-[#18181b] bg-opacity-70 flex items-center justify-center z-50">
          <div className="text-white text-xl font-semibold animate-pulse">{'</>'}</div>
        </div>
      )}

      {/* Main content with conditional blur */}
      <div className={`${loading ? "blur-sm" : "blur-none"} transition duration-300`}>
        <div className="flex justify-center">
          <div className="flex justify-between flex-wrap p-6 pt-12 pb-0 w-full lg:max-w-[50%] md:max-w-[60%] sm:max-w-[80%] max-w-[100%] sm:mb-0 mb-6">
            <h1 className="font-semibold text-xl mb-4">Hi, I'm Jay Kishan</h1>
            <div className='flex gap-4'>
              <a href="https://www.linkedin.com/in/jay-kishan-kharwar/"  target={"_blank"} rel="noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#ffffff" fill="none">
                  <path d="M7 10V17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M11 13V17M11 13C11 11.3431 12.3431 10 14 10C15.6569 10 17 11.3431 17 13V17M11 13V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M7.00801 7L6.99902 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                </svg>
              </a>
              <a href="https://github.com/officialjaykishan0001/" target={"_blank"} rel="noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#ffffff" fill="none">
                  <path d="M6.51734 17.1132C6.91177 17.6905 8.10883 18.9228 9.74168 19.2333M9.86428 22C8.83582 21.8306 2 19.6057 2 12.0926C2 5.06329 8.0019 2 12.0008 2C15.9996 2 22 5.06329 22 12.0926C22 19.6057 15.1642 21.8306 14.1357 22C14.1357 22 13.9267 18.5826 14.0487 17.9969C14.1706 17.4113 13.7552 16.4688 13.7552 16.4688C14.7262 16.1055 16.2043 15.5847 16.7001 14.1874C17.0848 13.1032 17.3268 11.5288 16.2508 10.0489C16.2508 10.0489 16.5318 7.65809 15.9996 7.56548C15.4675 7.47287 13.8998 8.51192 13.8998 8.51192C13.4432 8.38248 12.4243 8.13476 12.0018 8.17939C11.5792 8.13476 10.5568 8.38248 10.1002 8.51192C10.1002 8.51192 8.53249 7.47287 8.00036 7.56548C7.46823 7.65809 7.74917 10.0489 7.74917 10.0489C6.67316 11.5288 6.91516 13.1032 7.2999 14.1874C7.79575 15.5847 9.27384 16.1055 10.2448 16.4688C10.2448 16.4688 9.82944 17.4113 9.95135 17.9969C10.0733 18.5826 9.86428 22 9.86428 22Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </a>
              <a href="https://twiter.com/">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#ffffff" fill="none">
                  <path d="M2.50012 12C2.50012 7.52166 2.50012 5.28249 3.89136 3.89124C5.28261 2.5 7.52178 2.5 12.0001 2.5C16.4785 2.5 18.7176 2.5 20.1089 3.89124C21.5001 5.28249 21.5001 7.52166 21.5001 12C21.5001 16.4783 21.5001 18.7175 20.1089 20.1088C18.7176 21.5 16.4785 21.5 12.0001 21.5C7.52178 21.5 5.28261 21.5 3.89136 20.1088C2.50012 18.7175 2.50012 16.4783 2.50012 12Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M7.00012 17L11.1937 12.8065M17.0001 7L12.8066 11.1935M12.8066 11.1935L9.7779 7H7.00012L11.1937 12.8065M12.8066 11.1935L17.0001 17H14.2223L11.1937 12.8065" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </a>
              <a href="mailto:jaykishankharwar215@gmail.com" target={"_blank"} rel="noreferrer" className='text-[#737373] text-[14px] font-normal'>
                jaykishankharwar215@gmail.com
              </a>
            </div>
          </div>
        </div>
        <div className="text-[#737373] flex justify-center  ">
          <div className='px-6 w-full lg:max-w-[50%] md:max-w-[60%] sm:max-w-[80%] max-w-[100%]'>
            <ul className="flex list-disc ml-4 flex-col gap-2 text-[14px] font-normal">
              <li>I'm a full-stack developer from India.</li>
              <li>Currently exploring GenAI and Automation</li>
              <li>Focusing on personal projects and freelance work.</li>
              <li>Web app development and GenAI freelance services offered.</li>
              <li>Let's talk how we can work together!</li>
            </ul>
          </div>
        </div>
        <div className="text-[#737373] flex justify-center mt-5 ">
          <div className='px-6 w-full lg:max-w-[50%] md:max-w-[60%] sm:max-w-[80%] max-w-[100%] flex items-center gap-2 mb-1 font-normal text-[12px]'>
            {categories.map((category, index) => (
              <div
                key={index}
                className={`cursor-pointer border border-[#737373] rounded-full px-2 py-[2px] font-bolder ${activeCategory === category ? "text-[#d3d3cceb]" : "text-[#737373]"
                  }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </div>
            ))}
          </div>
        </div>
        <div className="text-[#737373] flex justify-center mt-3 min-h-[132px]">
          {activeCategory === "web apps" && <WebappsInfo />}
          {activeCategory === "plugins" && <PluginInfo />}
          {activeCategory === "fun" && <FunInfo />}
        </div>
        <div className="text-[#737373] flex justify-center mt-4 ">
          <div className='px-6 w-full lg:max-w-[50%] md:max-w-[60%] sm:max-w-[80%] max-w-[100%]'>
            <h1 className='text-[18px] text-[#ffff]'>Writings</h1>
            <div className='flex flex-col gap-2 mt-3 text-[#d3d3ccb0] text-[14px] '>
              <div className='flex justify-between'>
                <span className='hover:text-[#EBE3AC] cursor-pointer'>How to use reactjs on windows 7</span>
                <p>26 Jan, 2025</p>
              </div>
              <div className='flex justify-between'>
                <span className='hover:text-[#EBE3AC] cursor-pointer'>Quick start-up on cmake</span>
                <p>31 Dec, 2024</p>
              </div>
              <div className='flex justify-between'>
                <span className='hover:text-[#EBE3AC] cursor-pointer'>Automation Quick Guide for begineer</span>
                <p>2 Feb, 2025</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
