'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/assets/hero_section.jpg"
          alt="ASE-CA LAB Hero Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-primary/80"></div>
      </div>

      

      {/* Gradient Overlays */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-accent/20 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-accent/20 to-transparent rounded-full blur-3xl"></div>

      <div className="container-custom relative z-10">
        <div className="text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          >
            Laboratorio de<br />
            <span className="text-gradient bg-gradient-to-r from-white to-white bg-clip-text text-transparent">
              Pruebas Mecánicas
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto"
          >
            Asesoría y Capacitación de Ensayos Mecánicos
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <a
              href="#contact"
              className="btn-primary text-lg px-8 py-4 inline-block"
            >
              Contáctanos
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero