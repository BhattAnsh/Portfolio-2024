import React from 'react'
import { PropsWithChildren } from 'react'

type Props = {}

function HeroFrame(props:PropsWithChildren<Props>) {
  return (
    <>
        <div className='mt-[10%] flex flex-row items-center justify-center w-[50vw] h-[60vh] p-5 rounded-[30px] bg-gradient-to-b from-[#B8B8B8] from-1% to-[#1E1E1E] to-80%'>
            <div className='bg-[#1E1E1E] w-full h-full flex items-center justify-center rounded-[20px]'>
                {props.children}
            </div>
        </div>
    </>
  )
}

export default HeroFrame