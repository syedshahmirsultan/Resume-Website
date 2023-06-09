"use client"
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
function HandleClick() {
  const Router = useRouter();
  Router.push('/');

}

const NavBar=()=>(
  
<div className="mx-auto w-auto fix top-0 z-500">
    <div className="bg-slate-700 h-auto  flex flex-col z-100 items-center text-2xl font-semibold text-white pb-10 sm:flex-row justify-evenly">
    {/*NavBar Links */}
        
        <Link href='#about' onClick={HandleClick} className="scroll-smooth hover:text-teal-600 mt-4 hover:scale-110">About Me</Link>
        <Link href="#skills" onClick={HandleClick} className="scroll-smooth hover:text-teal-600 mt-4 hover:scale-110">Skills</Link>
        <Link href="#education" onClick={HandleClick} className="scroll-smooth hover:text-teal-600 mt-4 hover:scale-110 ">Education</Link>
        <Link href="#interests" onClick={HandleClick} className="scroll-smooth hover:text-teal-600 mt-4 hover:scale-110">Interests</Link>
        <Link href="#goals" onClick={HandleClick} className="scroll-smooth hover:text-teal-600 mt-4 hover:scale-110">Goals</Link>

      </div></div>)
  

export default NavBar;









