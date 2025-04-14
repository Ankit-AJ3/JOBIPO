"use client"

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className={`bg-white w-full fixed top-0 z-50 transition-all duration-300 
      ${isScrolled ? 'shadow-lg' : 'shadow-md'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                src="/logos/logo.png"
                alt="Jobipo Logo"
                width={100}
                height={35}
                className="cursor-pointer w-auto h-auto"
                priority
              />
            </Link>
          </div>

          {/* Hamburger Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg
                className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex md:items-center md:space-x-4 lg:space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600 text-sm font-medium">HOME</Link>
            <Link href="/findJobs" className="text-gray-700 hover:text-blue-600 text-sm font-medium">FIND JOBS</Link>
            <Link href="/employers" className="text-gray-700 hover:text-blue-600 text-sm font-medium">EMPLOYERS</Link>
            <Link href="/candidates" className="text-gray-700 hover:text-blue-600 text-sm font-medium">CANDIDATES</Link>
            <Link href="/blog" className="text-gray-700 hover:text-blue-600 text-sm font-medium">BLOG</Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600 text-sm font-medium">CONTACT</Link>
          </div>

          {/* Desktop Action Buttons */}
          <div className="hidden md:flex md:items-center md:space-x-1">
            <button className="bg-blue-900 text-white px-3 py-2 text-sm font-medium rounded-l-full hover:bg-blue-700 transition duration-300">
              JOB SEEKER
            </button>
            <button className="bg-orange-400 text-white px-3 py-2 text-sm font-medium rounded-r-full hover:bg-orange-600 transition duration-300">
              POST A JOB
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
          <Link href="/" 
            onClick={toggleMenu} 
            className="block px-3 py-2 text-gray-700 hover:text-blue-600 text-sm font-medium hover:bg-gray-50 rounded-md"
          >
            HOME
          </Link>
          <Link href="/findJobs" 
            onClick={toggleMenu} 
            className="block px-3 py-2 text-gray-700 hover:text-blue-600 text-sm font-medium hover:bg-gray-50 rounded-md"
          >
            FIND JOBS
          </Link>
          <Link href="/employers" 
            onClick={toggleMenu} 
            className="block px-3 py-2 text-gray-700 hover:text-blue-600 text-sm font-medium hover:bg-gray-50 rounded-md"
          >
            EMPLOYERS
          </Link>
          <Link href="/candidates" 
            onClick={toggleMenu} 
            className="block px-3 py-2 text-gray-700 hover:text-blue-600 text-sm font-medium hover:bg-gray-50 rounded-md"
          >
            CANDIDATES
          </Link>
          <Link href="/blog" 
            onClick={toggleMenu} 
            className="block px-3 py-2 text-gray-700 hover:text-blue-600 text-sm font-medium hover:bg-gray-50 rounded-md"
          >
            BLOG
          </Link>
          <Link href="/contact" 
            onClick={toggleMenu} 
            className="block px-3 py-2 text-gray-700 hover:text-blue-600 text-sm font-medium hover:bg-gray-50 rounded-md"
          >
            CONTACT
          </Link>
          <div className="flex flex-col space-y-2 px-3 py-2">
            <button 
              onClick={toggleMenu} 
              className="w-full bg-blue-900 text-white px-4 py-2 text-sm font-medium rounded-full hover:bg-blue-700 transition-all duration-300"
            >
              JOB SEEKER
            </button>
            <button 
              onClick={toggleMenu} 
              className="w-full bg-orange-400 text-white px-4 py-2 text-sm font-medium rounded-full hover:bg-orange-600 transition-all duration-300"
            >
              POST A JOB
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

