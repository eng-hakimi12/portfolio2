import React from 'react';

function Header() {
  return (
    <div className="flex bg-gray-900 m-0 pl-14 py-4">
      <h2 className="font-bold text-3xl text-white">
        ENG <span className="text-yellow-500">Hakimi</span>
      </h2>
      <ul className="sm:flex hidden pl-[40%] pt-1 text-base text-gray-300 font-normal">
        <li className="pr-6"><a href="#home">HOME</a></li>
        <li className="pr-6"><a href="#about">ABOUT</a></li>
        <li className="pr-6"><a href="#skills">SKILLS</a></li>
        <li className="pr-6"><a href="#portfolio">PORTFOLIO</a></li>
        <li className="pr-6"><a href="#contact">CONTACT</a></li>
      </ul>
      <div>
      <img src="/src/assets/menu.png" className="w-[50px ] sm:hidden ml-20 bg-white mt-4 w-[30px] "/>
      </div>
      </div>
  );
}

export default Header;
