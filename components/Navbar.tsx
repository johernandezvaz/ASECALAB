'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: 'Inicio', href: '#' },
    { name: 'Misión, Visión, Valores', href: '#values' },
    { name: 'Servicios', href: '#services' },
    { name: 'Anuncios', href: '#announcements' },
    { name: 'Capacitaciones', href: '#certifications' },
  ]

  // Cerrar menú al cambiar tamaño de pantalla
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false)
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <nav className={`absolute top-0 left-0 w-full z-50 ${isOpen ? 'bg-white' : 'bg-transparent'} md:bg-transparent transition-colors duration-300`}>
      <div className="container-custom">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src="/assets/ASE-CA LAB-02.png"
              alt="ASE-CA LAB Logo"
              width={60}
              height={60}
              className="h-12 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-white font-medium hover:text-white/80 transition-colors duration-300"
              >
                {item.name}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-white text-black px-4 py-2 rounded-md font-semibold hover:bg-gray-100 transition-colors duration-300"
            >
              Contáctanos
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="transition-colors text-black"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 bg-white backdrop-blur-sm">
            <div className="flex flex-col space-y-4 text-black px-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="font-medium hover:text-accent transition-colors duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <a
                href="#contact"
                className="bg-accent text-white px-4 py-2 rounded-md font-semibold hover:bg-opacity-90 transition-colors duration-300 text-center"
                onClick={() => setIsOpen(false)}
              >
                Contáctanos
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
