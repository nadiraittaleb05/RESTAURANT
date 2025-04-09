import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { motion } from 'framer-motion'
import { FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()
  const cart = useSelector(state => state.cart)

  // Effet pour fermer le menu mobile lors de la navigation
  useEffect(() => {
    setIsMenuOpen(false)
  }, [location])

  // Effet pour détecter le scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Navigation links
  const navLinks = [
    { path: '/', label: 'Accueil' },
    { path: '/menu', label: 'Menu' },
    { path: '/about', label: 'À Propos' },
    { path: '/contact', label: 'Contact' },
    { path: '/reservation', label: 'Réservation' }
  ]

  // Animation variants
  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        duration: 0.5
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-amber-900 shadow-lg' : 'bg-transparent'
    }`}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-amber-100">
            Al-Maghrebi
          </span>
        </Link>

        {/* Navigation pour PC */}
        <ul className="hidden items-center space-x-8 md:flex">
          {navLinks.map(link => (
            <li key={link.path}>
              <Link
                to={link.path}
                className={`font-medium transition-colors hover:text-amber-300 ${
                  location.pathname === link.path ? 'text-amber-400' : 'text-amber-100'
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Cart et bouton mobile */}
        <div className="flex items-center space-x-4">
          <Link to="/cart" className="relative">
            <FaShoppingCart className="h-6 w-6 text-amber-100" />
            {cart.items.length > 0 && (
              <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-amber-600 text-xs font-bold text-white">
                {cart.items.reduce((total, item) => total + item.quantity, 0)}
              </span>
            )}
          </Link>

          {/* Bouton Menu Mobile */}
          <button
            className="text-amber-100 md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          >
            {isMenuOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Menu Mobile */}
      {isMenuOpen && (
        <motion.div
          initial="hidden"
          animate="visible"
          variants={menuVariants}
          className="absolute left-0 right-0 bg-amber-900 px-4 py-4 shadow-xl md:hidden"
        >
          <motion.ul className="flex flex-col space-y-4">
            {navLinks.map(link => (
              <motion.li key={link.path} variants={itemVariants}>
                <Link
                  to={link.path}
                  className={`block py-2 font-medium transition-colors hover:text-amber-300 ${
                    location.pathname === link.path ? 'text-amber-400' : 'text-amber-100'
                  }`}
                >
                  {link.label}
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      )}
    </header>
  )
}

export default Navbar
