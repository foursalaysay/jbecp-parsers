"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Home, Search, Bell, User } from "lucide-react"

export function MobileNavDropdown() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <header className="bg-transparent">
      <nav className="container px-8 py-3">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <span className="text-2xl font-semibold text-red-500">Par<span className="text-white">sers</span></span>
          </div>
          <button
            onClick={toggleMenu}
            className="text-white hover:text-white focus:outline-none focus:text-white"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        {isOpen && (
          <div className="absolute top-16 left-0 right-0 bg-transparent text-white">
            <div className="relative container mx-auto px-4 py-2 bg-transparent overflow-hidden">
  {/* Background blur effect */}
  <div className="absolute inset-0 bg-gray-800 opacity-50 backdrop-blur-sm z-0"></div>

  {/* Links container */}
  <div className="relative z-10">
    <Link
      href="/"
      className="block py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-800 rounded"
      onClick={toggleMenu}
    >
      <div className="flex items-center">
        <Home className="h-5 w-5 mr-2" />
        Home
      </div>
    </Link>
    <Link
      href="/about"
      className="block py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-800 rounded"
      onClick={toggleMenu}
    >
      <div className="flex items-center">
        <Search className="h-5 w-5 mr-2" />
        About
      </div>
    </Link>
    <Link
      href="/events"
      className="block py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-800 rounded"
      onClick={toggleMenu}
    >
      <div className="flex items-center">
        <Bell className="h-5 w-5 mr-2" />
        Events
      </div>
    </Link>
    <Link
      href="/members"
      className="block py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-800 rounded"
      onClick={toggleMenu}
    >
      <div className="flex items-center">
        <User className="h-5 w-5 mr-2" />
        Members
      </div>
    </Link>
  </div>
</div>

          </div>
        )}
      </nav>
    </header>
  )
}