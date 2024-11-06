import React from 'react'
import logo from "../../assets/logo.png";
import instagram from "../../assets/instagram.png";
import facebook from "../../assets/facebook.png";
import x from "../../assets/x.png";

const footerLink = [

  {
    id: 4,
    name: "Contato",

  },

  {
    id: 5,
    name: "Sobre Nós",

  },

  {
    id: 6,
    name: "Termos e serviços",

  },


]


const footer = () => {
  
  return (
    <div className='bg-black inset-x-0'>
     <div className="container mx-auto p-6 grid gap-8 md:grid-cols-3 grid-cols-1 items-center">
    {/* Logo */}
    <div className="flex justify-center md:justify-start">
      <img className="h-36 w-36" src={logo} alt="Logo" />
    </div>

    {/* Links */}
    <div className="flex flex-col mx-auto">
      <h2 className="text-white font-medium text-xl mb-2">Links</h2>
      <ul className="space-y-1">
        {footerLink.map((item) => (
          <li key={item.id} className="text-white border-b-2 border-transparent hover:border-gray-100 duration-200">
            <a href={item.link} className="font-normal whitespace-nowrap">
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </div>

    {/* Social Media */}
    <div className="flex justify-center md:justify-end gap-x-4 items-center">
      <a href="http://instagram.com">
      <img  className="h-10" src={instagram} alt="Instagram" />
      </a>
      <a href="http://facebook.com">
      <img className="h-10" src={facebook} alt="Facebook" />
      </a>
      <a href="http://x.com">
      <img className="h-10" src={x} alt="X" />
      </a>
    </div>
  </div>

    <div>
        <p className='text-white font-normal text-center items-center mb-1'>2023 CyberWatch. Todos os Direitos Reservados. </p>
    </div>
    </div>
  )
}

export default footer