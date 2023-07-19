'use client'
import React from 'react'
import Image from "next/image";
import Link from 'next/link';
import { useRouter } from 'next/router';

function ClickOn(){
        const router=useRouter();
        router.push('/')
    }

const Footer = () => {
  return (
    <section className="mt-[150px] bg-slate-900 h-auto w-2/2 pb-2"><div className="flex flex-col mt-4 justify-center items-center">
    <text className="text-2xl text-gray-200 mt-6">Connect on </text>
    <div className="flex gap-x-4 mt-4 cursor-pointer">
      {/* Footer Images */}
   <Link href="https://www.linkedin.com/in/syed-shahmir-sultan-578730252/"><Image src="/images/linkedin1.jpg" alt="picture of linkedin logo" height={20} width={40} className="rounded-full"/></Link>
    <Link href="https://github.com/syedshahmirsultan"><Image src="/images/github.png" alt="picture of github logo" height={2} width={40} className="h-[40px] w-[40px] rounded-full"/></Link>
    </div>

<div className="flex flex-col sm:flex-row sm:space-x-6 lg:space-x-28 mt-8">
  {/* Footer Links */}
<Link href="#home" onClick={ClickOn} className="text-2xl text-gray-500 hover:text-teal-500">Home</Link>
    <Link href="#about" onClick={ClickOn} className="text-2xl text-gray-500 hover:text-teal-500">About Me</Link>
    <Link href="#skills" onClick={ClickOn} className="text-2xl text-gray-500 hover:text-teal-500">Skills</Link>
      <Link href="#education"onClick={ClickOn} className="text-2xl text-gray-500 hover:text-teal-500">Education</Link>
      <Link href="#interests" onClick={ClickOn} className="text-2xl text-gray-500 hover:text-teal-500">Interests</Link>
      <Link href="#goals" onClick={ClickOn} className="text-2xl text-gray-500 hover:text-teal-500">Goals</Link>
    
    
    </div></div> 
    </section>
    
      
    
  )
}

export default Footer;

