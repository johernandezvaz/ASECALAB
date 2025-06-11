'use client'

import { motion } from 'framer-motion'
import { Target, Eye, Heart } from 'lucide-react'

const Values = () => {
  const values = [
    {
      icon: <Target className="w-12 h-12 text-accent" />,
      title: "Misión",
      description: "Contribuir a la industria ofreciendo nuestros servicios como proveedor de laboratorio de pruebas mecánicas, metalografía y microscopía óptica, verificando el cumplimiento de los estándares nacionales e internacionales en sus productos y materia prima. Así como asesorar y capacitar en la implementación de ensayos mecánicos, metalográficos u ópticos."
    },
    {
      icon: <Eye className="w-12 h-12 text-accent" />,
      title: "Visión",
      description: "Ser líder a nivel local, estatal, nacional e internacional, entendiendo al cliente y proporcionándole servicios de pruebas mecánicas, metalografía y microscopía óptica, eficaces y confiables con informes de resultados oportunos y con tiempo de entrega acorde a sus necesidades. Así como asesorar y capacitar, transmitiendo conocimientos para la formación de recurso humano de nuevas generaciones."
    },
    {
      icon: <Heart className="w-12 h-12 text-accent" />,
      title: "Valores",
      description: "Transparencia - Lo que se ofrece se cumple, no hay letras chiquitas. Honestidad - Ética y confidencialidad en sus productos y resultados. Coherencia como valor empresarial - Los compromisos internos y externos se respetan y están en constante retroalimentación con nuestros clientes. Puntualidad en las entregas - Entendemos y nos ponemos en los zapatos del cliente, por lo que la fecha que se establece, se cumple, llueva, truene o relampaguee. Excelencia - Los que formamos parte de esta empresa, estamos en constante búsqueda de la excelencia, buscando mejorar día a día. Adaptabilidad - Nos adaptamos a las necesidades del cliente, ya que entendemos los imprevistos y urgencias en una línea de producción. Constancia - Somos constantes y perseverantes en los objetivos que nos trazamos. Cercanía - Somos cercanos a nuestros clientes, haciéndonos partícipes en su filosofía corporativa, ya que ellos son parte del crecimiento de nuestra empresa."
    }
  ]

  return (
    <section
  id="values"
  className="section-padding relative bg-cover bg-center bg-no-repeat before:content-[''] before:absolute before:inset-0 before:bg-black/50 before:z-0"
  style={{ backgroundImage: "url('/assets/background.jpg')" }}
>
  <div className="container-custom relative z-10">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {values.map((value, index) => (
        <motion.div
          key={value.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
          viewport={{ once: true }}
          className="card p-8 text-center bg-white/80 backdrop-blur-sm rounded-lg"
        >
          <div className="flex justify-center mb-6">
            {value.icon}
          </div>
          <h3 className="text-2xl font-bold text-primary mb-4">
            {value.title}
          </h3>
          <p className="text-gray-600 leading-relaxed">
            {value.description}
          </p>
        </motion.div>
      ))}
    </div>
  </div>
</section>

  )
}

export default Values