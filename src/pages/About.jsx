import React from 'react'
import { motion } from 'framer-motion'
import { FaHeart, FaLeaf, FaHandshake, FaUtensils } from 'react-icons/fa'

const About = () => {
  const values = [
    {
      icon: <FaUtensils className="h-8 w-8 text-amber-600" />,
      title: "Authenticité",
      description: "Fidèles aux traditions culinaires marocaines, nous utilisons des recettes ancestrales pour vous offrir une expérience authentique."
    },
    {
      icon: <FaLeaf className="h-8 w-8 text-amber-600" />,
      title: "Fraîcheur",
      description: "Nous sélectionnons soigneusement des ingrédients frais et de qualité pour garantir des saveurs et des arômes exceptionnels."
    },
    {
      icon: <FaHeart className="h-8 w-8 text-amber-600" />,
      title: "Passion",
      description: "Notre équipe met tout son cœur dans la préparation de chaque plat, animée par l'amour de la cuisine et le désir de vous satisfaire."
    },
    {
      icon: <FaHandshake className="h-8 w-8 text-amber-600" />,
      title: "Hospitalité",
      description: "L'accueil chaleureux est au cœur de notre philosophie, pour que vous vous sentiez comme chez vous."
    }
  ]

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  return (
    <div className="py-12">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h1 className="mb-4 text-4xl font-bold text-amber-900 md:text-5xl">
            Notre Histoire
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-amber-700">
            Plongez dans l'univers d'Al-Maghrebi, un voyage culinaire à travers les saveurs et les traditions du Maroc.
          </p>
        </motion.div>

        {/* Histoire Section */}
        <div className="mb-20">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <motion.div
              variants={fadeInUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="order-2 md:order-1"
            >
              <h2 className="mb-4 text-3xl font-bold text-amber-900">
                De nos racines à votre table
              </h2>
              <p className="mb-4 text-amber-700">
                Fondé en 2008 par la famille Benali, Al-Maghrebi est né de la passion pour la cuisine marocaine authentique et du désir de partager cette richesse culinaire avec le plus grand nombre.
              </p>
              <p className="mb-4 text-amber-700">
                Originaires de Fès, l'une des villes impériales du Maroc et berceau de la gastronomie marocaine, les Benali ont apporté avec eux des recettes familiales transmises de génération en génération, ainsi que leur savoir-faire et leur amour pour les épices et les saveurs typiques du Maroc.
              </p>
              <p className="text-amber-700">
                Aujourd'hui, Al-Maghrebi est devenu une référence de la cuisine marocaine, combinant traditions ancestrales et touches modernes pour vous offrir une expérience culinaire unique.
              </p>
            </motion.div>
            <motion.div
              variants={fadeInUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="order-1 md:order-2"
            >
              <img
                src="https://images.unsplash.com/photo-1517314687957-13af800e8ce1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Fondateur du restaurant"
                className="w-full rounded-lg shadow-md"
              />
            </motion.div>
          </div>
        </div>

        {/* Nos Valeurs Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="mb-12 text-center text-3xl font-bold text-amber-900">
            Nos Valeurs
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center rounded-lg bg-white p-6 text-center shadow-md"
              >
                <div className="mb-4 rounded-full bg-amber-100 p-4">
                  {value.icon}
                </div>
                <h3 className="mb-2 text-xl font-bold text-amber-900">{value.title}</h3>
                <p className="text-amber-700">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Notre Équipe Section */}
        <motion.div
          variants={fadeInUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="mb-12 text-center text-3xl font-bold text-amber-900">
            Notre Équipe
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="overflow-hidden rounded-lg bg-white shadow-md">
              <img
                src="https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Chef Karim Benali"
                className="h-64 w-full object-cover"
              />
              <div className="p-6">
                <h3 className="mb-1 text-xl font-bold text-amber-900">Karim Benali</h3>
                <p className="mb-3 text-amber-600">Chef Cuisinier &amp; Fondateur</p>
                <p className="text-amber-700">
                  Fort de 30 ans d'expérience, Karim est l'âme du restaurant. Son amour pour la cuisine traditionnelle et son expertise dans les mariages de saveurs font de chaque plat une œuvre d'art.
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-lg bg-white shadow-md">
              <img
                src="https://images.unsplash.com/photo-1566554273541-37a9ca77b91f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Amina Benali"
                className="h-64 w-full object-cover"
              />
              <div className="p-6">
                <h3 className="mb-1 text-xl font-bold text-amber-900">Amina Benali</h3>
                <p className="mb-3 text-amber-600">Pâtissière &amp; Co-fondatrice</p>
                <p className="text-amber-700">
                  Spécialiste des douceurs orientales, Amina crée des desserts qui allient parfaitement tradition et innovation, pour terminer votre repas en beauté.
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-lg bg-white shadow-md">
              <img
                src="https://images.unsplash.com/photo-1581299894007-aaa50297cf16?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Youssef Mansour"
                className="h-64 w-full object-cover"
              />
              <div className="p-6">
                <h3 className="mb-1 text-xl font-bold text-amber-900">Youssef Mansour</h3>
                <p className="mb-3 text-amber-600">Maître d'Hôtel</p>
                <p className="text-amber-700">
                  Avec son sens de l'accueil et sa connaissance approfondie de la gastronomie marocaine, Youssef est votre guide pour une expérience culinaire mémorable.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Citation */}
        <motion.div
          variants={fadeInUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mx-auto max-w-4xl rounded-lg bg-amber-900 p-10 text-center text-amber-100"
        >
          <svg className="mx-auto mb-4 h-12 w-12 text-amber-500" fill="currentColor" viewBox="0 0 24 24">
            <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z"/>
          </svg>
          <blockquote className="mb-6 text-xl font-medium italic">
            La cuisine marocaine est un voyage des sens, un art qui se transmet avec amour. Chez Al-Maghrebi, nous ne servons pas simplement des plats, nous partageons notre culture et notre passion.
          </blockquote>
          <cite className="text-amber-300">- Karim Benali, Fondateur</cite>
        </motion.div>
      </div>
    </div>
  )
}

export default About
