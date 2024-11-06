
import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import menu from "../../assets/menu.png";
import close from "../../assets/close.png";

const NavLink = [

  {
    id: "Home",
    name: "Home",
    link: "#Home",
  },

  {
    id: "Recursos",
    name: "Recursos",
    link: "#Recursos",
  },

  {
    id: "Produto",
    name: "Produto",
    link: "#Produto",
  },

];
 
const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div class="flex justify-between text-center items-center container">
    <div class="flex w-full items-center">
        <img src={logo} class="h-24" />
        
</div>

{/* Menu */}
<div className="z-50">
<nav>
    <ul class="items-center gap-8 sm:flex hidden">
    
          {NavLink.map((item) => {
            return (
              <li key={item.id} class="text-white">
                <a href={item.link} class="font-semibold">{item.name}</a>
            </li>
            );
          })}
           </ul>
      
      {/* Mobile Menu */}
      <div class="sm:hidden flex justify-end items-center" >
    <img src={toggle ? close : menu}
    class="h-10 object-contain z-50"
     onClick={() => setToggle((prev) => !prev)} 
     style={{ cursor: 'pointer' }} />

<div 
className={`${toggle ? 'flex' : 'hidden'} p-6 bg-gradient-to-r from-slate-900 to-slate-800 absolute sidebar top-20 right-0 mx-4 my-2 rounded-xl min-w-[140px]`}
>
<ul class="items-center flex-col flex gap-4 w-full">
    
    {NavLink.map((item) => {
      return (
        <li key={item.id} class="text-white">
          <a href={item.link} class="font-semibold mb-4 "  onClick={() => setToggle(false)} >{item.name}</a>
      </li>
      );
    })}
     </ul>

</div>
    </div>

</nav>
  
</div>

</div>
  )
}

export default Navbar