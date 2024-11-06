import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Navbar/Hero/Hero'
import Stats from './components/Navbar/Hero/Stats'
import Recursos from './components/Recursos/Recursos'
import Produto from './components/Produto/Produto'
import Footer from './components/Navbar/footer'


const App = () => {
  return (
    <div className="bg-[#040422] overflow-hidden" >
    <div class="container mx-auto w-full">
    <Navbar/>
    <Hero />
    <Stats/>
    <Recursos/>
    <Produto/>
    </div>
    <Footer/>
    </div>
    
  )
}

export default App