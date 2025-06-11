'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Send, CheckCircle, AlertCircle } from 'lucide-react'

declare global {
  interface Window {
    emailjs: any;
  }
}

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    city: '',
    message: ''
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  useEffect(() => {
    // Initialize EmailJS
    if (typeof window !== 'undefined' && window.emailjs) {
      window.emailjs.init("OymTMs4wyLL2auEw7") // Replace with your actual public key
    }
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    try {
      if (typeof window !== 'undefined' && window.emailjs) {
        const templateParams = {
          name: formData.name,
          email: formData.email,
          number: formData.number,
          city: formData.city,
          message: formData.message,
        }

        await window.emailjs.send(
          'service_xb5qah1', // Replace with your service ID
          'template_rduhoii', // Replace with your template ID
          templateParams
        )

        setStatus('success')
        setFormData({ name: '', email: '', number: '', city: '', message: '' })
      } else {
        throw new Error('EmailJS not loaded')
      }
    } catch (error) {
      console.error('Error sending email:', error)
      setStatus('error')
    }

    // Reset status after 5 seconds
    setTimeout(() => {
      setStatus('idle')
    }, 5000)
  }

  return (
    <section id="contact" className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h3 className="text-accent font-semibold text-lg mb-4">Contacto</h3>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Contáctanos
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Si estás interesado en realizar tus pruebas mecánicas o capacitarte, ponte en contacto con nosotros.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <form onSubmit={handleSubmit} className="card p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Nombre Completo"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Correo Electrónico"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300"
                />
              </div>
              <div>
                <input
                  type="tel"
                  name="number"
                  value={formData.number}
                  onChange={handleChange}
                  placeholder="Número de contacto"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300"
                />
              </div>
              <div>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="Ciudad"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300"
                />
              </div>
            </div>
            
            <div className="mb-6">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Mensaje"
                rows={5}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300 resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === 'loading' ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  Enviando...
                </>
              ) : (
                <>
                  <Send size={20} />
                  Enviar Mensaje
                </>
              )}
            </button>

            {status === 'success' && (
              <div className="mt-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg flex items-center gap-2">
                <CheckCircle size={20} />
                ¡Gracias! Hemos recibido tu mensaje.
              </div>
            )}

            {status === 'error' && (
              <div className="mt-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg flex items-center gap-2">
                <AlertCircle size={20} />
                Oops! Algo ha salido mal. Por favor intenta de nuevo.
              </div>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact