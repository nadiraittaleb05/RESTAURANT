import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useDispatch, useSelector } from 'react-redux'
import { createReservation, resetReservationForm } from '../redux/reservationSlice'

const Reservation = () => {
  const dispatch = useDispatch()
  const { isSubmitting, submitSuccess, error } = useSelector(state => state.reservation)

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    specialRequests: ''
  })

  const timeSlots = [
    '12:00', '12:30', '13:00', '13:30', '14:00', '14:30',
    '19:00', '19:30', '20:00', '20:30', '21:00', '21:30'
  ]

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(createReservation(formData))
  }

  const handleNewReservation = () => {
    dispatch(resetReservationForm())
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      date: '',
      time: '',
      guests: '2',
      specialRequests: ''
    })
  }

  return (
    <div className="py-12">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 text-center text-3xl font-bold text-amber-900 md:text-4xl"
        >
          Réservez Votre Table
        </motion.h1>

        <div className="grid gap-10 md:grid-cols-2 lg:gap-16">
          {/* Section d'informations */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="mb-8">
              <h2 className="mb-4 text-xl font-semibold text-amber-800">
                Réservez votre expérience culinaire marocaine
              </h2>
              <p className="mb-4 text-amber-700">
                Nous vous accueillons dans notre restaurant pour un voyage gastronomique à travers les saveurs du Maroc.
                Réservez votre table dès maintenant pour éviter toute attente et profiter pleinement de votre soirée.
              </p>
              <p className="text-amber-700">
                Si vous avez des demandes spéciales ou des questions, n'hésitez pas à nous les communiquer dans le formulaire ci-contre ou à nous contacter directement par téléphone.
              </p>
            </div>

            <div className="mb-8 rounded-lg bg-amber-100 p-6">
              <h3 className="mb-3 text-lg font-semibold text-amber-900">Heures d'ouverture</h3>
              <ul className="space-y-2 text-amber-800">
                <li className="flex justify-between">
                  <span>Lundi - Jeudi:</span>
                  <span>11h30 - 15h00 & 19h00 - 23h00</span>
                </li>
                <li className="flex justify-between">
                  <span>Vendredi - Samedi:</span>
                  <span>11h30 - 15h00 & 19h00 - 23h30</span>
                </li>
                <li className="flex justify-between">
                  <span>Dimanche:</span>
                  <span>11h30 - 16h00 & 19h00 - 22h30</span>
                </li>
              </ul>
            </div>

            <div className="overflow-hidden rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1520251681314-e5eb4df815de?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                alt="Intérieur du restaurant"
                className="h-full w-full object-cover object-center"
              />
            </div>
          </motion.div>

          {/* Formulaire de réservation */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {submitSuccess ? (
              <div className="rounded-lg bg-white p-8 shadow-lg">
                <div className="mb-6 flex justify-center">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
                    <svg
                      className="h-10 w-10 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                </div>
                <h2 className="mb-4 text-center text-2xl font-bold text-amber-900">
                  Réservation confirmée !
                </h2>
                <p className="mb-6 text-center text-amber-700">
                  Nous avons bien reçu votre demande de réservation. Vous recevrez un email de confirmation dans les plus brefs délais.
                </p>
                <p className="mb-6 text-center text-sm text-amber-700">
                  Nous vous remercions d'avoir choisi Al-Maghrebi et nous avons hâte de vous accueillir.
                </p>
                <div className="text-center">
                  <button
                    onClick={handleNewReservation}
                    className="rounded-lg bg-amber-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-amber-700"
                  >
                    Faire une autre réservation
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="rounded-lg bg-white p-6 shadow-lg md:p-8">
                <div className="mb-4 grid gap-4 md:grid-cols-2">
                  <div>
                    <label htmlFor="fullName" className="mb-1 block text-sm font-medium text-amber-900">
                      Nom complet*
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
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
                  <label htmlFor="phone" className="mb-1 block text-sm font-medium text-amber-900">
                    Téléphone*
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full rounded-md border border-amber-300 p-2 focus:border-amber-500 focus:outline-none"
                    placeholder="Votre numéro de téléphone"
                  />
                </div>

                <div className="mb-4 grid gap-4 md:grid-cols-3">
                  <div className="md:col-span-1">
                    <label htmlFor="date" className="mb-1 block text-sm font-medium text-amber-900">
                      Date*
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      required
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full rounded-md border border-amber-300 p-2 focus:border-amber-500 focus:outline-none"
                    />
                  </div>

                  <div className="md:col-span-1">
                    <label htmlFor="time" className="mb-1 block text-sm font-medium text-amber-900">
                      Heure*
                    </label>
                    <select
                      id="time"
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      required
                      className="w-full rounded-md border border-amber-300 p-2 focus:border-amber-500 focus:outline-none"
                    >
                      <option value="">Sélectionnez une heure</option>
                      {timeSlots.map(time => (
                        <option key={time} value={time}>{time}</option>
                      ))}
                    </select>
                  </div>

                  <div className="md:col-span-1">
                    <label htmlFor="guests" className="mb-1 block text-sm font-medium text-amber-900">
                      Personnes*
                    </label>
                    <select
                      id="guests"
                      name="guests"
                      value={formData.guests}
                      onChange={handleChange}
                      required
                      className="w-full rounded-md border border-amber-300 p-2 focus:border-amber-500 focus:outline-none"
                    >
                      {Array.from({ length: 10 }, (_, i) => i + 1).map(num => (
                        <option key={num} value={num}>{num} {num === 1 ? 'personne' : 'personnes'}</option>
                      ))}
                      <option value="11+">Plus de 10 personnes</option>
                    </select>
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="specialRequests" className="mb-1 block text-sm font-medium text-amber-900">
                    Demandes spéciales
                  </label>
                  <textarea
                    id="specialRequests"
                    name="specialRequests"
                    value={formData.specialRequests}
                    onChange={handleChange}
                    rows="4"
                    className="w-full rounded-md border border-amber-300 p-2 focus:border-amber-500 focus:outline-none"
                    placeholder="Allergies, occasions spéciales, préférences d'emplacement..."
                  ></textarea>
                </div>

                {error && (
                  <div className="mb-4 rounded-md bg-red-50 p-4 text-sm text-red-700">
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-lg bg-amber-600 py-3 font-semibold text-white transition-colors hover:bg-amber-700 disabled:opacity-70"
                >
                  {isSubmitting ? 'Traitement en cours...' : 'Réserver maintenant'}
                </button>

                <p className="mt-4 text-center text-xs text-amber-700">
                  * Champs obligatoires. En soumettant ce formulaire, vous acceptez d'être contacté par notre restaurant.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Reservation
