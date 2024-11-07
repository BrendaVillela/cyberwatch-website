import React from 'react'
import watch from "../../../assets/watch.jpg";

function Hero() {
  return (
    <section id="Home">
    <div class="py-7 sm:py-0 dark:bg-black" >
        <div class="flex container min-h-[500px] relative justify-center" >
            
            <div class="flex flex-col items-center gap-12 md:flex-row justify-between relative" >

            <div class="text-white text-5xl sm:text-6xl z-10 font-semibold font-poppins leading-relaxed space-y-2">
              <h1>Seu Relógio Inteligente <br/> No Estilo  <span class="bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-violet-700 via-cyan-500 to-indigo-200 bg-clip-text text-transparent">
                Cyberpunk</span> 
              </h1>
              <button id="compre" class="px-6 py-3 font-medium border-4 border-blue-400 bg-slate-900 hover:bg-blue-400 rounded-full text-[18px] sm:text-[24px]" >
Adquira o Seu
            </button>
            </div>

            <div className="relative flex justify-center items-center">
          
      <div className="relative z-10 mt-12 sm:mt-0">
        <img src={watch} className="h-80" alt="Relógio" />
      </div>
    </div>

            </div>
           
            <div class="h-[140px] w-[140px] bg-blue-500  rounded-full absolute top-0 blur-3xl left-40 z-0 animated-wrapper"></div>

        </div>
        
    </div>
    </section>
  )
}

export default Hero
