'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const Announcements = () => {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom flex justify-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl shadow-2xl overflow-hidden max-w-4xl w-full"
        >
          {/* Encabezado */}
          <div className="text-center px-6 py-10">
            <h3 className="text-accent font-semibold text-lg mb-2">
              Últimas Noticias
            </h3>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Anuncio Destacado
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Mantente al tanto de nuestras novedades, eventos y actualizaciones. ¡Entérate de lo último que estamos haciendo!
            </p>
          </div>

          {/* Imagen con object-contain */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative h-64 md:h-[400px] w-full bg-white"
          >
            <Image
              src="/assets/anuncio_ase_ca_lab.png"
              alt="Anuncio ASE-CA LAB"
              fill
              className="object-contain"
              priority
            />
          </motion.div>

        /* Comentario para el push */

          {/* CTA */}
          <div className="px-6 py-8 text-center">
            <Link
              href="https://www.facebook.com/profile.php?id=100068220014623" // <- Reemplaza con tu URL real
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-accent text-white font-semibold px-6 py-3 rounded-full hover:bg-accent/90 transition-colors"
            >
              Ve la última publicación en Facebook
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Announcements
