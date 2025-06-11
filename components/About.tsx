'use client'

import { motion } from 'framer-motion'
import { Play } from 'lucide-react'
import Image from 'next/image'

const About = () => {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/assets/backgound-update.png"
                alt="ASE-CA LAB Background"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-accent font-semibold text-lg mb-4">
              ¿Qué hay de nuevo en ASE-CA LAB?
            </h3>
            <h2 className="text-4xl font-bold text-primary mb-6">
              Videoclip
            </h2>
            
            <div className="bg-white rounded-xl p-6 shadow-lg mb-8">
              <h4 className="text-xl font-bold text-primary mb-4">
                Ensayo de Ponch Test
              </h4>
              <p className="text-gray-600 leading-relaxed">
                Consiste en verificar el apriete de las terminales (conectores) de cualquier tipo de cable, con la finalidad de asegurar que dicho cable no se safara durante su conexión. Debido a un mal ajuste en longitud, vibración o cualquier otro detalle de instalación del cable.
              </p>
            </div>

            <a
              href="https://www.facebook.com/share/r/nXfhz7iwsBe5MyyB/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2"
            >
              <Play size={20} />
              Ver Video
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About