import React from 'react'
import fundo from '../../assets/fundo.png';

const Produto = () => {
  return (
<section id="Produto">
  <div className="relative mb-32 mt-28 text-white overflow-hidden">
    <img className="absolute inset-0 w-full h-full object-cover" src={fundo} alt="Fundo" />
    {/* Sobreposição com opacidade */}
    <div className="absolute inset-0 bg-black opacity-35"></div>
    {/* Conteúdo da seção */}
    <div className="relative z-10 px-4 py-4 sm:px-6 sm:py-6 rounded-lg flex flex-col sm:flex-row gap-y-4 sm:gap-x-8 mx-auto items-center justify-center min-h-[200px] sm:min-h-[300px]">
      <h2 className="text-4xl sm:text-5xl font-semibold text-center sm:text-left mb-2 sm:mb-0">
        Escolha Seu Modelo
      </h2>
      <button className="bg-gradient-to-r from-blue-300 to-blue-800 rounded-xl px-6 py-3 sm:px-8 sm:py-4 font-semibold hover:scale-105 transition-transform text-sm sm:text-base">
        Explore Aqui
      </button>
    </div>
  </div>
</section>

  )
}

export default Produto