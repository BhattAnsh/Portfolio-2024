import React from 'react'
import { ShootingStars } from '../ui/shooting-stars'
import { StarsBackground } from '../ui/stars-background'
import { Spotlight } from '../ui/backgrounds/spotlight'

type Props = {}

function Hero({ }: Props) {
  return (
    <div className="relative z-10 flex h-[100vh] w-full justify-center">
      {/* <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      /> */}
      <h2 className="relative flex-col md:flex-row z-10 text-3xl md:text-5xl md:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-white to-white flex items-center gap-2 md:gap-8">
        <h1>Hey, I am Ansh Bhatt</h1>
      </h2>
      <ShootingStars></ShootingStars>
      <StarsBackground></StarsBackground>
    </div>
  )
}

export default Hero