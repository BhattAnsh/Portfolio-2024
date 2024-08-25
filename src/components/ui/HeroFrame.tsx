import { PropsWithChildren } from 'react'


function HeroFrame(props:PropsWithChildren) {
  return (
    <>
        <div className='mt-[40%] sm:mt-[10%] lg:mt-[10%] flex flex-row items-center justify-center w-[90vw] lg:w-[50vw] sm:w-[85vw] md:w-[85vw] h-[50vh] sm:h-[52vh] md:h-[50vh] lg:h-[60vh] sm:p-4 p-3 lg:p-5 rounded-[30px] bg-gradient-to-b from-[#B8B8B8] from-1% to-[#1E1E1E] to-80%'>
            <div className='bg-[#1E1E1E] w-full h-full flex items-center justify-center rounded-[20px]'>
                {props.children}
            </div>
        </div>
    </>
  )
}

export default HeroFrame