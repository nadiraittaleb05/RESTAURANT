import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const slides = [
  {
    id: 1,
    title: "Cuisine Marocaine Authentique",
    subtitle: "Savourez les délices traditionnels du Maroc",
    cta: "Découvrir notre menu",
    ctaLink: "/menu",
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
  {
    id: 2,
    title: "Une Atmosphère Envoûtante",
    subtitle: "Plongez dans l'ambiance chaleureuse et exotique",
    cta: "Réserver une table",
    ctaLink: "/reservation",
    image: "https://images.unsplash.com/photo-1590846083693-f23fdede3a7e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
  {
    id: 3,
    title: "Des Saveurs Incomparables",
    subtitle: "Des épices soigneusement sélectionnées pour des plats d'exception",
    cta: "Découvrir notre histoire",
    ctaLink: "/about",
    image: "https://images.unsplash.com/photo-1506802913807-3d1b1e79fbfd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  }
]

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [direction, setDirection] = useState(1) // 1 for right, -1 for left

  // Auto-avancement du slider
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 6000)

    return () => clearInterval(interval)
  }, [currentSlide])

  const nextSlide = () => {
    setDirection(1)
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setDirection(-1)
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  // Variants pour l'animation
  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      x: direction > 0 ? '-100%' : '100%',
      opacity: 0
    })
  }

  return (
    <div className="relative h-[80vh] w-full overflow-hidden">
      {/* Contrôles */}
      <div className="absolute left-0 right-0 top-1/2 z-10 flex -translate-y-1/2 justify-between px-4">
        <button
          onClick={prevSlide}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-900/50 text-amber-100 transition-colors hover:bg-amber-900"
          aria-label="Diapositive précédente"
        >
          <FaArrowLeft />
        </button>
        <button
          onClick={nextSlide}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-900/50 text-amber-100 transition-colors hover:bg-amber-900"
          aria-label="Diapositive suivante"
        >
          <FaArrowRight />
        </button>
      </div>

      {/* Indicateurs */}
      <div className="absolute bottom-8 left-0 right-0 z-10 flex justify-center space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > currentSlide ? 1 : -1)
              setCurrentSlide(index)
            }}
            className={`h-2 w-8 rounded-full transition-colors ${
              index === currentSlide ? 'bg-amber-500' : 'bg-amber-200/50'
            }`}
            aria-label={`Aller à la diapositive ${index + 1}`}
          />
        ))}
      </div>

      {/* Slides */}
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={currentSlide}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ type: 'tween', duration: 0.5 }}
          className="absolute inset-0"
        >
          <div
            className="h-full w-full bg-cover bg-center"
            style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
          >
            <div className="absolute inset-0 bg-black/40" />
            <div className="relative flex h-full items-center justify-center">
              <div className="text-center text-white">
                <motion.h1
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="mb-2 text-4xl font-bold md:text-5xl lg:text-6xl"
                >
                  {slides[currentSlide].title}
                </motion.h1>
                <motion.p
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="mb-8 text-xl text-amber-100"
                >
                  {slides[currentSlide].subtitle}
                </motion.p>
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  <Link
                    to={slides[currentSlide].ctaLink}
                    className="inline-block rounded-lg bg-amber-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-amber-700"
                  >
                    {slides[currentSlide].cta}
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export default HeroSlider
