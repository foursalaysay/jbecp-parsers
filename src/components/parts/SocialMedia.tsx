import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

const navLinks = [
    {
      label: "Home",
      href: "/",
      image: "/fb.png", // Replace with the actual path to your image
    },
    {
      label: "Search",
      href: "/search",
      image: "/ig.png",
    },
    {
      label: "Notifications",
      href: "/notifications",
      image: "/x.png",
    },
  ];
  

export default function SocialMedia() {
  return (
    <div className='flex flex-row gap-2'>
    {navLinks.map((link, index) => (
        <Link
            key={index} // Use a unique key if possible, like an ID
            href={link.href}
            className="flex items-center py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-800 rounded"
        >
            <Image
                src={link.image}
                alt={link.label}
                height={30}
                width={30}
                className=" rounded-full filter invert" // Adjust the size as needed
            />
        </Link>
    ))}
    </div>
  )
}
