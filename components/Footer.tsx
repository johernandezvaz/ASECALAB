'use client'

import { motion } from 'framer-motion'
import { Facebook } from 'lucide-react'
import Image from 'next/image'

const Footer = () => {
  const quickLinks = [
    { name: 'Inicio', href: '#' },
    { name: 'Misión, Visión, Valores', href: '#values' },
    { name: 'Servicios', href: '#services' },
    { name: 'Capacitaciones', href: '#certifications' },
    { name: 'Contáctanos', href: '#contact' },
  ]

  return (
    <footer className="bg-primary text-white">
      <div className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="mb-6">
                <Image
                  src="/assets/ASE-CA LAB-02.png"
                  alt="ASE-CA LAB Logo"
                  width={80}
                  height={80}
                  className="h-16 w-auto mb-4"
                />
              </div>
              <p className="text-white/90 mb-6 leading-relaxed">
                Si estás interesado en realizar tus pruebas mecánicas o capacitarte, ponte en contacto con nosotros.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://www.facebook.com/profile.php?id=100068220014623"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 hover:bg-accent p-3 rounded-lg transition-all duration-300 hover:scale-110"
                >
                  <Facebook size={24} />
                </a>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-6">Navegación Rápida</h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-white/80 hover:text-accent transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-6">Información de Contacto</h3>
              <div className="space-y-4">
                <p className="text-white/90">
                  Laboratorio especializado en pruebas mecánicas, metalografía y microscopía óptica.
                </p>
                <p className="text-white/90">
                  Servicios de asesoría y capacitación con estándares nacionales e internacionales.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10">
        <div className="container-custom py-6">
          <div className="text-center">
            <p className="text-white/70">
              Creado por{' '}
              <a
                href="https://maikua.com.mx/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent_2 hover:text-accent/80 transition-colors duration-300"
              >
                Maikua
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer