import  React from 'react'
import kmh from '../../assets/kmh.png';
import temperatura from '../../assets/temperatura.png';
import distance from '../../assets/distance.png';
import cardio2 from '../../assets/cardio2.png';

const Recursos = () => {
  return (
      <section id="Recursos">
    <div class="text-white text-normal text-poppins text-[28px] p-6 mt-28 font-medium flex flex-col gap-y-16">
  <h2 className='text-[36px] sm:text-[48px] font-semibold px-0 sm:px-4'>Pratique Esportes Com Cyberwatch</h2>
  
  <div className="flex flex-col sm:flex-row items-center justify-center gap-x-18 gap-y-10 w-full">
    <div className="flex flex-col gap-y-10 items-center w-full">
      <div className="flex flex-col items-center gap-y-2">
        <img className="h-28" src={kmh} alt="Velocidade"/>
        <h3 className="text-center text-blue-200">Cheque a Velocidade</h3>
      </div>
      <div className="flex flex-col items-center gap-x-2">
        <img className="h-28" src={temperatura} alt="Temperatura"/>
        <h3 className="text-center text-blue-200">Medidor de Temperatura</h3>
      </div>
    </div>
    
    <div className="flex flex-col gap-y-10 items-center w-full">
      <div className="flex flex-col gap-y-2 items-center">
        <img className="h-28" src={distance} alt="Distância"/>
        <h3 className="text-center text-blue-200">Distância Percorrida</h3>
      </div>
      <div className="flex flex-col gap-x-2 items-center">
        <img className="h-28" src={cardio2} alt="Batimentos"/>
        <h3 className="text-center text-blue-200">Verifique os Batimentos</h3>
      </div>
    </div>
  </div>
</div>

</section>
  )
}

export default Recursos

