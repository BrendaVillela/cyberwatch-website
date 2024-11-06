import React, { useState, useEffect } from 'react'
import { useInView } from 'react-intersection-observer';
import color from "../../../assets/color1.png";
import water from "../../../assets/waterproof.png";
import cardio1 from "../../../assets/cardio1.png";

const Stats = () => {
  const [animatedElements, setAnimatedElements] = useState([false, false, false]);

  const [ref1, inView1] = useInView({ threshold: 0.3 });
  const [ref2, inView2] = useInView({ threshold: 0.3 });
  const [ref3, inView3] = useInView({ threshold: 0.3 });

  const elementsInView = [inView1, inView2, inView3];

  useEffect(() => {
    if (inView1) {
      setAnimatedElements((prev) => [true, prev[1], prev[2]]);
      setTimeout(() => {
        if (inView2) {
          setAnimatedElements((prev) => [true, true, prev[2]]);
          setTimeout(() => {
            if (inView3) {
              setAnimatedElements((prev) => [true, true, true]);
            }
          }, 200); 
        }
      }, 400); 
    }
  }, [inView1, inView2, inView3]);

  return (
    <div className='text-white flex flex-col gap-y-10 items-center md:flex-row justify-between text-[24px] font-sans font-semibold mb-10 mt-28 md:mt-12'>
       
      
       <div ref={ref1}
        className={`flex flex-col items-center bg-gray-900 border-t-4 border-blue-400 h-56 w-72 p-6 hover:bg-gray-800 ${
          animatedElements[0] ? 'FadeInDown delay-1' : 'opacity-0'
        }`} >
     <h4>Monitore</h4>
        <img className='h-28 object-contain' src={cardio1} alt="Cardio" />
      </div>


    <div ref={ref2} className={`flex flex-col items-center bg-gray-900 border-t-4 border-blue-400 h-56 w-72 p-6 space-y-2 hover:bg-gray-800 ${ 
      animatedElements[1] ? 'FadeInDown delay-2' : 'opacity-0 invisible'
      }`} >
    <h4>Personalize Seu Led</h4>
    <img src={color} class="h-28 object-contain"></img>
    </div>
    
    <div ref={ref3} className={`flex flex-col items-center bg-gray-900 border-t-4 border-blue-400 h-56 w-72 p-6 space-y-5 hover:bg-gray-800 ${
          animatedElements[2] ? 'FadeInDown opacity-1' : 'opacity-0'
        } delay-3`} >
    <h4>À Prova D'água</h4>
    <img class="h-20 object-contain" src={water}></img>
    </div>
    
    
    </div>

  )
};

export default Stats;

