"use client"

import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement | null>(null)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const navLinkStyle = (href: string) =>
    `text-sm font-medium ${pathname === href ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`

  return (
    <nav className={`bg-white w-full fixed top-0 z-50 transition-all duration-300 ${isScrolled ? 'shadow-lg' : 'shadow-md'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/logos/logo.png"
              alt="Jobipo Logo"
              width={100}
              height={100}
              className="w-24 h-24 object-contain"
              priority
            />
            <div className="flex flex-col justify-center leading-none">
              <span className="text-base font-bold text-blue-900">Jobipo</span>
              <span className="text-[10px] text-gray-500 tracking-tight">Powered by Adshrtech Media Private Limited.</span>
            </div>
          </Link>

          {/* Hamburger Menu */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 focus:outline-none"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-4 lg:space-x-8">
            <Link href="/" className={navLinkStyle('/')}>HOME</Link>

            {/* Dropdown Menu */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsDropdownOpen(prev => !prev)}
                className="text-gray-700 hover:text-blue-600 text-sm font-medium focus:outline-none"
              >
                FIND JOBS
              </button>
              {isDropdownOpen && (
                <div className="absolute left-0 mt-2 w-56 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                  <Link href="/findJobs/freshersjob" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-600">Freshers Jobs</Link>
                  <Link href="/findJobs/internships" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-600">Internships</Link>
                  <Link href="/findJobs/fullTime" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-600">Full-Time Jobs</Link>
                  <Link href="/findJobs/partTime" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-600">Part-Time Jobs</Link>
                  <Link href="/findJobs/workFromHome" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-600">Work From Home</Link>
                  <Link href="/findJobs/nightShifts" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-600">Night Shifts Jobs</Link>
                  <Link href="/findJobs/jobsForWomen" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-600">Jobs for Women</Link>
                  <Link href="/findJobs/localJobs" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-600">Local Jobs</Link>
                </div>
              )}
            </div>

            <Link href="/employers" className={navLinkStyle('/employers')}>EMPLOYERS</Link>
            <Link href="/affiliate" className={navLinkStyle('/affiliate')}>AFFILIATE</Link>
            <Link href="/blog" className={navLinkStyle('/blog')}>BLOG</Link>
            <Link href="/contact" className={navLinkStyle('/contact')}>CONTACT</Link>
          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex md:items-center md:space-x-1">
            <Link href="https://jobipo.com/Agent/Login"
              target="_blank">
              <button className="bg-blue-900 text-white px-3 py-2 text-sm font-medium rounded-l-full hover:bg-blue-700 transition duration-300">
                JOB SEEKER
              </button>
            </Link>
            <Link href="https://jobipo.com/employer/create-account"
             target="_blank">
              <button className="bg-orange-400 text-white px-3 py-2 text-sm font-medium rounded-r-full hover:bg-orange-600 transition duration-300">
                POST A JOB
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
          <Link href="/" onClick={toggleMenu} className="block px-3 py-2 text-gray-700 hover:text-blue-600 text-sm font-medium hover:bg-gray-50 rounded-md">HOME</Link>
          <Link href="/findJobs" onClick={toggleMenu} className="block px-3 py-2 text-gray-700 hover:text-blue-600 text-sm font-medium hover:bg-gray-50 rounded-md">FIND JOBS</Link>
          <Link href="/employers" onClick={toggleMenu} className="block px-3 py-2 text-gray-700 hover:text-blue-600 text-sm font-medium hover:bg-gray-50 rounded-md">EMPLOYERS</Link>
          <Link href="/affiliate" onClick={toggleMenu} className="block px-3 py-2 text-gray-700 hover:text-blue-600 text-sm font-medium hover:bg-gray-50 rounded-md">AFFILIATE</Link>
          <Link href="/blog" onClick={toggleMenu} className="block px-3 py-2 text-gray-700 hover:text-blue-600 text-sm font-medium hover:bg-gray-50 rounded-md">BLOG</Link>
          <Link href="/contact" onClick={toggleMenu} className="block px-3 py-2 text-gray-700 hover:text-blue-600 text-sm font-medium hover:bg-gray-50 rounded-md">CONTACT</Link>
          <div className="flex flex-col space-y-2 px-3 py-2">
            <Link href="/Agent/Login">
              <button onClick={toggleMenu} className="w-full bg-blue-900 text-white px-4 py-2 text-sm font-medium rounded-full hover:bg-blue-700 transition-all duration-300">JOB SEEKER</button>
            </Link>
            <Link href="/employer/create-account">
              <button onClick={toggleMenu} className="w-full bg-orange-400 text-white px-4 py-2 text-sm font-medium rounded-full hover:bg-orange-600 transition-all duration-300">POST A JOB</button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
