import "./App.css";
import Blur from "./components/overlay/Blur";
import Color from "./components/overlay/Color";
import Navbar from "./components/ui/Navbar";
import Work from "./components/pages/Work";
import { About } from "./components/pages/About";
import { BrowserRouter } from "react-router-dom";
import { Contact } from "./components/sections/Contact";
import Hero from "./components/sections/Hero";
import Git from "./components/pages/Git";
function App() {
  return (
    <>
      <BrowserRouter>
        <Blur />
        <Color />
        <Navbar />
        <svg
          width="full"
          height="full"
          viewBox="0 0 1198 1230.5"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="fixed z-50 top-[-70vh] sm:top-[-48vh] md:top-[-48vh] lg:top-[-450px] left-[-21vw] sm:left-0 right-0 bottom-0 w-[150vw] h-[150vh] md:w-[100vw] md:h-[100vh] pointer-events-none"
        >
          <g filter="url(#filter0_df_856_132)">
            <path
              d="M796 579.696C796 718.428 730.722 828.5 588.237 828.5C445.753 828.5 402 755.732 402 617C402 478.268 445.753 402 588.237 402C730.722 402 796 440.964 796 579.696Z"
              fill="white"
              fill-opacity="0.4"
              shape-rendering="auto"
            />
          </g>
          <defs>
            <filter
              id="filter0_df_856_132"
              x="0"
              y="0"
              width="1198"
              height="1230.5"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dx="10" dy="10" />
              <feGaussianBlur stdDeviation="50" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_856_132"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_856_132"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="100"
                result="effect2_foregroundBlur_856_132"
              />
            </filter>
          </defs>
        </svg>
        <main className="flex flex-col items-center justify-between bg-[#1F1E1E]">
          <hr className="w-full bg-gradient-to-l from-[#1F1E1E] via-[white] to-[#1F1E1E]" />
          <section className="h-[fit-content] mb-[200px]">
            <Hero></Hero>
          </section>
          <section className="h-[fit-content] mb-[200px]">
            <About/>
          </section>
          <section className="h-[fit-content] mb-[200px]">
            <Work/>
          </section>
          <section className="h-[fit-content]">
            <Git/>
          </section>
          <section className="h-[fit-content]">
            <Contact/>
          </section>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
