import React from 'react'
import Link from 'next/link'


export default function Header() {
  return (
     <div className="w-full h-24 flex px-16 justify-center items-center fixed top-0 bg-white bg-opacity-75 backdrop-blur-lg z-10">
     <div className="flex flex-row gap-10">
          
       <Link href="/events" className="relative inline-block group">
        <span className="text-black hover:text-red-500 transition-colors duration-300">About</span>
        <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-red-500 scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
      </Link>
      <Link href="/events" className="relative inline-block group">
        <span className="text-black hover:text-red-500 transition-colors duration-300">Events</span>
        <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-red-500 scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
      </Link>
      <Link href="/events" className="relative inline-block group">
        <span className="text-black hover:text-red-500 transition-colors duration-300">Members</span>
        <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-red-500 scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
      </Link>

     </div>
   </div>
  )
}
