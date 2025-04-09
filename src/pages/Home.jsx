import React from 'react'
import { motion } from 'framer-motion'
import HeroSlider from '../components/ui/HeroSlider'
import FeaturedDishes from '../components/ui/FeaturedDishes'
import { FaUtensils, FaLeaf, FaStar, FaUsers } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Home = () => {
  const features = [
    {
      icon: <FaUtensils className="h-8 w-8 text-amber-600" />,
      title: "Cuisine Authentique",
      description: "Des recettes traditionnelles transmises de génération en génération."
    },
    {
      icon: <FaLeaf className="h-8 w-8 text-amber-600" />,
      title: "Ingrédients Frais",
      description: "Nous sélectionnons les meilleurs produits locaux et importés du Maroc."
    },
    {
      icon: <FaStar className="h-8 w-8 text-amber-600" />,
      title: "Service d'Excellence",
      description: "Notre équipe met tout en œuvre pour vous offrir une expérience inoubliable."
    },
    {
      icon: <FaUsers className="h-8 w-8 text-amber-600" />,
      title: "Ambiance Conviviale",
      description: "Un espace chaleureux où vous vous sentirez comme au Maroc."
    }
  ]

  return (
    <div>
      <HeroSlider />

      {/* Section Caractéristiques */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center rounded-lg bg-white p-6 text-center shadow-md"
              >
                <div className="mb-4 rounded-full bg-amber-100 p-3">
                  {feature.icon}
                </div>
                <h3 className="mb-2 text-xl font-bold text-amber-900">{feature.title}</h3>
                <p className="text-amber-700">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Plats en Vedette */}
      <FeaturedDishes />

      {/* Section À Propos */}
      <section className="bg-amber-900 py-20 text-amber-100">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="flex flex-col items-center justify-between gap-10 md:flex-row">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="max-w-xl"
            >
              <h2 className="mb-6 text-3xl font-bold md:text-4xl">Notre Tradition Culinaire Marocaine</h2>
              <p className="mb-6 text-lg leading-relaxed text-amber-200">
                Al-Maghrebi vous invite à découvrir l'authentique cuisine marocaine dans un cadre chaleureux et convivial.
                Nos plats sont élaborés selon des recettes traditionnelles, avec des ingrédients soigneusement sélectionnés
                et des épices importées directement du Maroc.
              </p>
              <p className="mb-8 text-lg leading-relaxed text-amber-200">
                Laissez-vous transporter au cœur du Maroc le temps d'un repas, et découvrez les saveurs
                incomparables de notre cuisine riche en histoire et en traditions.
              </p>
              <Link
                to="/about"
                className="inline-block rounded-lg border-2 border-amber-400 px-6 py-3 font-semibold text-amber-400 transition-colors hover:bg-amber-400 hover:text-amber-900"
              >
                En savoir plus sur notre histoire
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative h-[400px] w-full max-w-md overflow-hidden rounded-lg shadow-2xl md:h-[500px]"
            >
              <img
                src="https://images.unsplash.com/photo-1549592401-da9b95592984?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Restaurant traditionnel marocain"
                className="h-full w-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section Réservation */}
      <section className="bg-[url('https://images.unsplash.com/photo-1542372147193-a7aca54189cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')] bg-cover bg-center bg-no-repeat py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="mx-auto max-w-2xl rounded-lg bg-white/90 p-8 text-center shadow-xl backdrop-blur-sm">
            <h2 className="mb-4 text-3xl font-bold text-amber-900 md:text-4xl">Réservez Votre Table</h2>
            <p className="mb-8 text-lg text-amber-800">
              Pour une soirée inoubliable, réservez votre table et venez découvrir notre cuisine marocaine authentique.
            </p>
            <Link
              to="/reservation"
              className="inline-block rounded-lg bg-amber-600 px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-amber-700"
            >
              Réserver maintenant
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
