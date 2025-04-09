import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [error, setError] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    // Simuler un envoi de formulaire
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitSuccess(true)

      // Réinitialiser le formulaire
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      })

      // Réinitialiser le message de succès après quelques secondes
      setTimeout(() => {
        setSubmitSuccess(false)
      }, 5000)
    }, 1500)
  }

  const contactInfo = [
    {
      icon: <FaMapMarkerAlt className="h-6 w-6 text-amber-600" />,
      title: "Adresse",
      details: "23 Rue des Épices, Quartier Médina, 10000 Marrakech, Maroc"
    },
    {
      icon: <FaPhoneAlt className="h-6 w-6 text-amber-600" />,
      title: "Téléphone",
      details: "+212 5 22 33 44 55"
    },
    {
      icon: <FaEnvelope className="h-6 w-6 text-amber-600" />,
      title: "Email",
      details: "contact@almaghrebi.ma"
    },
    {
      icon: <FaClock className="h-6 w-6 text-amber-600" />,
      title: "Heures d'ouverture",
      details: "Tous les jours: 11h30 - 15h00 & 19h00 - 23h00"
    }
  ]

  return (
    <div className="py-12">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h1 className="mb-4 text-4xl font-bold text-amber-900 md:text-5xl">
            Contactez-Nous
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-amber-700">
            Pour toute question, suggestion ou réservation, n'hésitez pas à nous contacter.
            Notre équipe se fera un plaisir de vous répondre dans les plus brefs délais.
          </p>
        </motion.div>

        <div className="grid gap-10 md:grid-cols-5 lg:gap-16">
          {/* Formulaire de contact */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-3"
          >
            <div className="rounded-lg bg-white p-6 shadow-lg md:p-8">
              <h2 className="mb-6 text-2xl font-bold text-amber-900">
                Envoyez-nous un message
              </h2>

              {submitSuccess && (
                <div className="mb-6 rounded-md bg-green-50 p-4 text-green-700">
                  <p className="flex items-center font-medium">
                    <svg className="mr-2 h-5 w-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                    Message envoyé avec succès!
                  </p>
                  <p className="mt-1 text-sm">
                    Nous vous répondrons dans les plus brefs délais.
                  </p>
                </div>
              )}

              {error && (
                <div className="mb-6 rounded-md bg-red-50 p-4 text-red-700">
                  <p className="flex items-center font-medium">
                    <svg className="mr-2 h-5 w-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    {error}
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="mb-4 grid gap-4 md:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-1 block text-sm font-medium text-amber-900">
                      Nom complet*
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full rounded-md border border-amber-300 p-2 focus:border-amber-500 focus:outline-none"
                      placeholder="Votre nom"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="mb-1 block text-sm font-medium text-amber-900">
                      Email*
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full rounded-md border border-amber-300 p-2 focus:border-amber-500 focus:outline-none"
                      placeholder="votre.email@exemple.com"
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label htmlFor="subject" className="mb-1 block text-sm font-medium text-amber-900">
                    Sujet*
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full rounded-md border border-amber-300 p-2 focus:border-amber-500 focus:outline-none"
                    placeholder="Sujet de votre message"
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="mb-1 block text-sm font-medium text-amber-900">
                    Message*
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full rounded-md border border-amber-300 p-2 focus:border-amber-500 focus:outline-none"
                    placeholder="Votre message ici..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-lg bg-amber-600 py-3 font-semibold text-white transition-colors hover:bg-amber-700 disabled:opacity-70"
                >
                  {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
                </button>
              </form>
            </div>
          </motion.div>

          {/* Informations de contact */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="md:col-span-2"
          >
            <div className="space-y-6">
              <div className="rounded-lg bg-white p-6 shadow-lg">
                <h2 className="mb-6 text-2xl font-bold text-amber-900">
                  Nos Coordonnées
                </h2>
                <ul className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <li key={index} className="flex">
                      <div className="mr-4 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-amber-100">
                        {info.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-amber-900">{info.title}</h3>
                        <p className="text-amber-700">{info.details}</p>
                      </div>
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  <h3 className="mb-4 text-lg font-semibold text-amber-900">Suivez-nous</h3>
                  <div className="flex space-x-4">
                    <a
                      href="https://facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-100 text-amber-600 transition-colors hover:bg-amber-600 hover:text-white"
                      aria-label="Facebook"
                    >
                      <FaFacebook />
                    </a>
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-100 text-amber-600 transition-colors hover:bg-amber-600 hover:text-white"
                      aria-label="Instagram"
                    >
                      <FaInstagram />
                    </a>
                    <a
                      href="https://twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-100 text-amber-600 transition-colors hover:bg-amber-600 hover:text-white"
                      aria-label="Twitter"
                    >
                      <FaTwitter />
                    </a>
                  </div>
                </div>
              </div>

              <div className="overflow-hidden rounded-lg bg-white shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3397.0793268431164!2d-8.009022084311371!3d31.63536974850028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdafee8d96179e51%3A0x5950b6534f87adb8!2sM%C3%A9dina%2C%20Marrakech!5e0!3m2!1sfr!2sma!4v1616759321026!5m2!1sfr!2sma"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  title="Google Maps - Al-Maghrebi Restaurant"
                ></iframe>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Contact
