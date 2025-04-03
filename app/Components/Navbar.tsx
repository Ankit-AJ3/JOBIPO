"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="bg-white shadow-md w-full fixed top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src="/logos/logo.png"
              alt="Jobipo Logo"
              width={120}
              height={40}
              className="cursor-pointer"
            />
          </div>

          {/* Hamburger Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600 text-sm font-medium">
              HOME
            </Link>
            <Link href="/find-jobs" className="text-gray-700 hover:text-blue-600 text-sm font-medium">
              FIND JOBS
            </Link>
            <Link href="/employers" className="text-gray-700 hover:text-blue-600 text-sm font-medium">
              EMPLOYERS
            </Link>
            <Link href="/candidates" className="text-gray-700 hover:text-blue-600 text-sm font-medium">
              CANDIDATES
            </Link>
            <Link href="/blog" className="text-gray-700 hover:text-blue-600 text-sm font-medium">
              BLOG
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600 text-sm font-medium">
              CONTACT
            </Link>
          </div>

          {/* Desktop Action Buttons */}
          <div className="hidden md:flex items-center space-x-0">
            <button className="bg-blue-900 text-white px-4 py-2 text-sm font-medium rounded-l-full hover:bg-blue-700 transition duration-300">
              JOB SEEKER
            </button>
            <button className="bg-orange-400 text-white px-4 py-2 text-sm font-medium rounded-r-full hover:bg-orange-600 transition duration-300">
              POST A JOB
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white">
          <Link href="/" className="block px-3 py-2 text-gray-700 hover:text-blue-600 text-sm font-medium">
            HOME
          </Link>
          <Link href="/find-jobs" className="block px-3 py-2 text-gray-700 hover:text-blue-600 text-sm font-medium">
            FIND JOBS
          </Link>
          <Link href="/employers" className="block px-3 py-2 text-gray-700 hover:text-blue-600 text-sm font-medium">
            EMPLOYERS
          </Link>
          <Link href="/candidates" className="block px-3 py-2 text-gray-700 hover:text-blue-600 text-sm font-medium">
            CANDIDATES
          </Link>
          <Link href="/blog" className="block px-3 py-2 text-gray-700 hover:text-blue-600 text-sm font-medium">
            BLOG
          </Link>
          <Link href="/contact" className="block px-3 py-2 text-gray-700 hover:text-blue-600 text-sm font-medium">
            CONTACT
          </Link>
          <div className="flex flex-col space-y-2 px-3 py-2">
            <button className="bg-blue-600 text-white px-4 py-2 text-sm font-medium rounded-full hover:bg-blue-700 transition duration-300">
              JOB SEEKER
            </button>
            <button className="bg-orange-500 text-white px-4 py-2 text-sm font-medium rounded-full hover:bg-orange-600 transition duration-300">
              POST A JOB
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

