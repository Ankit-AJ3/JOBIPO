import React from 'react'

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#306188', padding: '2rem', textAlign: 'center', fontSize: '1.2rem' }}>
      <p className='text-white'>&copy; {new Date().getFullYear()} My Company. All rights reserved.</p>
      <nav style={{ marginTop: '1rem' }}>
      <a href="/privacy" style={{ margin: '0 1.5rem', textDecoration: 'none', color: '#fff' }}>Privacy Policy</a>
      <a href="/terms" style={{ margin: '0 1.5rem', textDecoration: 'none', color: '#fff' }}>Terms of Service</a>
      <a href="/contact" style={{ margin: '0 1.5rem', textDecoration: 'none', color: '#fff' }}>Contact Us</a>
      </nav>
    </footer>
  )
}

export default Footer
