import GlowingText from '../ui/GlowingText'
import HeroFrame from '../ui/HeroFrame'

function Hero() {
  return (
    <section className="relative z-10 flex h-[100vh] w-full justify-center items-center">
      <HeroFrame>
        <div className='flex flex-col justify-between h-full w-full p-5 md:p-10'>
          <div>
            <GlowingText className='text-md sm:text-lg lg:text-2xl'>&#60;&#47;Ansh Bhatt&#62;</GlowingText>
          </div>
          <div className='flex flex-col items-center justify-center w-full'>
            <div className='flex justify-start w-[100%] sm:w-[90%] lg:w-[70%]'>
              <GlowingText className='text-5xl lg:text-8xl sm:text-6xl md:text-7xl font-bold flex gap-3'>Your<p className='handwritting'>Vision</p></GlowingText>
            </div>
            <div className='flex justify-end w-[100%] sm:w-[90%] lg:w-[70%]'>
              <GlowingText className='text-5xl lg:text-8xl sm:text-6xl md:text-7xl font-bold flex gap-3'>My<p className='handwritting'>Code</p></GlowingText>
            </div>
          </div>
          <div className='flex justify-center w-full'>
              <GlowingText className='material-icons text-white text-5xl'>arrow_downward</GlowingText>
          </div>
        </div>
      </HeroFrame>
    </section>
  )
}

export default Hero