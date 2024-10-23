import React from 'react'
import Link from 'next/link'




export default function Header() {

  const links = [
    {href: '/', label: 'Home'},
    { href: '/about', label: 'About' },
    { href: '/events', label: 'Events' },
    { href: '/members', label: 'Members' },
  ];

  return (
    <div className="w-full h-24 flex gap-10 justify-center items-center top-0 bg-transparent bg-opacity-75 backdrop-blur-lg z-10">
      {links.map((link, index) => (
        <Link key={index} href={link.href} className="relative inline-block group">
          <span className="text-white hover:text-red-500 transition-colors duration-300">
            {link.label}
          </span>
          <span className="absolute left-0 right-0 bottom-[-5px] h-0.5 bg-red-500 scale-x-0 transition-transform duration-300 group-hover:scale-x-150" />
        </Link>
      ))}
   </div>
  )
}
