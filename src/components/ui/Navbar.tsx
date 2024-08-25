import GlowingText from './GlowingText'

function Navbar() {
  return (
    <nav className="flex justify-center p-4 items-center w-[100vw] fixed z-50 bg-[transparent]">
      <div className="flex space-x-4 justify-center items-center p-4 bg-white/10 backdrop-blur-md rounded-[100px] px-10 text-[#dbdbdb]">
        <GlowingText className="text-lg"><a href="#">Home</a></GlowingText>
        <a href="#" className="text-lg">About</a>
        <a href="#" className="text-lg">Git</a>
      </div>
    </nav>
  )
}

export default Navbar
