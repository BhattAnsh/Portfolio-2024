// import React, { useState } from 'react';
import GlowingText from './GlowingText';
import { Link } from 'react-router-dom';
// import { TbSocial } from 'react-icons/tb';

function Navbar() {
  // const [isRotated, setIsRotated] = useState(false);

  // const handleIconClick = () => {
  //   setIsRotated(!isRotated);
  // };

  return (
    <nav className="flex justify-center p-4 items-center w-[100vw] fixed z-50 bg-[transparent]">
      {/* <div>
        <img src="./PortfolioLogo.svg" alt="logo" />
      </div> */}
      <div className="flex space-x-4 justify-center items-center p-4 bg-white/10 backdrop-blur-md rounded-[100px] px-8 text-[#dbdbdb]">
        <GlowingText className="text-lg"><Link to="/">Portfolio</Link></GlowingText>
        <a href="./CV.pdf" className="text-lg">Resume</a>
      </div>
      {/* <div className='flex flex-row items-center justify-center p-2 md:p-5 h-full gap-5'>
        <Link className='hidden md:block' to="https://www.linkedin.com">LinkedIn</Link>
        <Link className='hidden md:block' to="https://www.example.com/resume.pdf">Resume</Link>
        <TbSocial
          className={`text-white transform transition-transform duration-500 text-2xl ${isRotated ? 'rotate-180' : ''}`}
          onClick={handleIconClick}
        />
      </div> */}
    </nav>
  );
}

export default Navbar;
