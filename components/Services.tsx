'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const Services = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const services = [
    {
      image: "/assets/slide-1.png",
      title: "Materiales",
      description: "Pruebas especializadas en diversos materiales"
    },
    {
      image: "/assets/slide-2.png",
      title: "Polímeros",
      description: "Análisis y ensayos de materiales poliméricos"
    },
    {
      image: "/assets/slide-3.png",
      title: "Metálicas",
      description: "Pruebas mecánicas en estructuras metálicas"
    },
    {
      image: "/assets/slide-4.png",
      title: "Madera",
      description: "Ensayos mecánicos en materiales de madera"
    },
    {
      image: "/assets/slide-5.png",
      title: "Misceláneos",
      description: "Pruebas diversas en materiales especiales"
    },
    {
      image: "/assets/slide-6.png",
      title: "Cartón y Papel",
      description: "Análisis de resistencia en materiales de papel"
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % services.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [services.length])

  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h3 className="text-accent font-semibold text-lg mb-4">Servicios</h3>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Explora nuestro catálogo
          </h2>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  index === currentSlide ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <h3 className="text-3xl font-bold mb-2">{service.title}</h3>
                  <p className="text-lg opacity-90">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-accent w-8' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services