'use client'

import { motion } from 'framer-motion'
import { Award, BookOpen, Users } from 'lucide-react'

const Certifications = () => {
  const certifications = [
    {
      title: "ISO/IEC-17025:2017",
      description: "(Norma NMX-EC-IMNC-17025:2018) Requisitos generales para competencia técnica de los Laboratorios de Ensayo y Calibración."
    },
    {
      title: "ASTM E8/E8M (NMX-B310)",
      description: "Propiedades Mecánicas de Tensión para Materiales Metálicos."
    },
    {
      title: "NMX-B-079-CANACERO",
      description: "Guía para la Preparación de Muestras Metalográficas ASTM E 3"
    },
    {
      title: "NMX-B-172-CANACERO",
      description: "Métodos de Ensayos Mecánicos para productos de acero ASTM A 370"
    },
    {
      title: "ASTM B557/B557M",
      description: "Propiedades Mecánicas de tensión para productos de forja, fundición de aluminio y aleaciones de magnesio."
    },
    {
      title: "ASTM E 646",
      description: "Exponentes de endurecimiento por deformación por tracción (valores n) de láminas metálicas."
    },
    {
      title: "NMX-B119-CANACERO",
      description: "Determinación de Dureza Rockwell en materiales metálicos ASTM E 18"
    },
    {
      title: "NMX-B-118-CANACERO",
      description: "Determinación de micro dureza en materiales ASTM E384"
    },
    {
      title: "ASTM D143",
      description: "Métodos de Ensayos Mecánicos para Maderas"
    }
  ]

  const features = [
    {
      icon: <BookOpen className="w-8 h-8 text-accent_2" />,
      title: "Presencial",
      description: "Capacitaciones en nuestras instalaciones"
    },
    {
      icon: <Users className="w-8 h-8 text-accent_2" />,
      title: "In Situ",
      description: "Entrenamiento en sus instalaciones"
    },
    {
      icon: <Award className="w-8 h-8 text-accent_2" />,
      title: "En Línea",
      description: "Cursos virtuales interactivos"
    }
  ]

  return (
    <section id="certifications" className="section-padding bg-primary text-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h3 className="text-accent_2 font-semibold text-lg mb-4">
            Nuestras Capacitaciones
          </h3>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Presencial, in situ o en línea
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Ofrecemos una variedad de cursos de capacitación con registro ante la STPS que aseguran la calidad y la competencia técnica. Estas capacitaciones proporcionan a nuestros clientes la confianza y la seguridad que necesitan.
          </p>
        </motion.div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="flex justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-white/80">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300"
            >
              <h4 className="text-lg font-bold text-accent_2 mb-3">
                {cert.title}
              </h4>
              <p className="text-white/90 text-sm leading-relaxed">
                {cert.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certifications