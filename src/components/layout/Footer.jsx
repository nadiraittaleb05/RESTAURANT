import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebook, FaInstagram, FaTwitter, FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-amber-900 text-amber-100">
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Colonne d'informations */}
          <div>
            <h3 className="mb-4 text-xl font-bold">Al-Maghrebi</h3>
            <p className="mb-4 text-amber-200">
              Découvrez l'authentique cuisine marocaine dans un cadre traditionnel et chaleureux.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FaFacebook className="h-6 w-6 transition-colors hover:text-amber-400" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram className="h-6 w-6 transition-colors hover:text-amber-400" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <FaTwitter className="h-6 w-6 transition-colors hover:text-amber-400" />
              </a>
            </div>
          </div>

          {/* Colonne des liens */}
          <div>
            <h3 className="mb-4 text-xl font-bold">Liens Rapides</h3>
            <ul className="space-y-2 text-amber-200">
              <li>
                <Link to="/" className="inline-block transition-colors hover:text-amber-400">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/menu" className="inline-block transition-colors hover:text-amber-400">
                  Notre Menu
                </Link>
              </li>
              <li>
                <Link to="/about" className="inline-block transition-colors hover:text-amber-400">
                  À Propos de Nous
                </Link>
              </li>
              <li>
                <Link to="/reservation" className="inline-block transition-colors hover:text-amber-400">
                  Réservations
                </Link>
              </li>
              <li>
                <Link to="/contact" className="inline-block transition-colors hover:text-amber-400">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Colonne de contact */}
          <div>
            <h3 className="mb-4 text-xl font-bold">Contact</h3>
            <ul className="space-y-3 text-amber-200">
              <li className="flex items-start">
                <FaMapMarkerAlt className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-amber-400" />
                <span>23 Rue des Épices, Quartier Médina, 10000 Marrakech</span>
              </li>
              <li className="flex items-center">
                <FaPhoneAlt className="mr-3 h-5 w-5 flex-shrink-0 text-amber-400" />
                <span>+212 5 22 33 44 55</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-3 h-5 w-5 flex-shrink-0 text-amber-400" />
                <span>contact@almaghrebi.ma</span>
              </li>
              <li className="mt-4">
                <h4 className="mb-2 font-semibold">Heures d'ouverture:</h4>
                <p>Tous les jours: 11h30 - 15h00 | 19h00 - 23h00</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-amber-800 pt-8 text-center">
          <p className="text-amber-300">
            &copy; {currentYear} Al-Maghrebi Restaurant. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
