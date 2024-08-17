import './App.css'
import Index from './components/pages'
import Hero from './components/sections/Hero'
import Blur from './components/overlay/Blur'
import Color from './components/overlay/Color'
import About from './components/sections/About'
function App() {

  return (
    <>
        <Blur />
        <Color />
        <main
            className="flex flex-col items-center justify-center bg-black h-full w-full"
        >
          <Hero></Hero>
          <About></About>
        </main>
    </>
  )
}

export default App
