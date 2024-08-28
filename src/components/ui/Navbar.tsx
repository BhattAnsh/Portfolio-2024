import GlowingText from './GlowingText'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="flex justify-between p-4 items-center w-[100vw] fixed z-50 bg-[transparent]">
      <div>
        <img src="./PortfolioLogo.svg" alt="logo" />
      </div>
      <div className="flex space-x-4 justify-center items-center p-4 bg-white/10 backdrop-blur-md rounded-[100px] px-10 text-[#dbdbdb]">
        <GlowingText className="text-lg"><Link to="/">Work</Link></GlowingText>
        <Link to="/about" className="text-lg">About</Link>
        <Link to = "/" className="text-lg">Git</Link>
      </div>
      <div className='flex flex-row items-center justify-center p-5 h-full gap-5 '>
        <Link to="www.youtube.com">Linkedin</Link>
        <Link to="www.youtube.com">Resume</Link>
      </div>
    </nav>
  )
}

export default Navbar
