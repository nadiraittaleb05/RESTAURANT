import React from 'react'
import { useSelector } from 'react-redux'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'

const FeaturedDishes = () => {
  const { categories, featured } = useSelector(state => state.menu)

  // Récupérer les plats en vedette à partir des IDs
  const featuredDishes = featured.map(id => {
    for (const category of categories) {
      const dish = category.items.find(item => item.id === id)
      if (dish) {
        return { ...dish, category: category.name }
      }
    }
    return null
  }).filter(Boolean)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  }

  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-amber-900 md:text-4xl">
            Nos Spécialités
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-amber-700">
            Découvrez nos plats les plus populaires, préparés avec des ingrédients frais et les meilleures épices marocaines.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {featuredDishes.map(dish => (
            <motion.div
              key={dish.id}
              className="group overflow-hidden rounded-lg bg-white shadow-md transition-transform hover:-translate-y-1 hover:shadow-xl"
              variants={itemVariants}
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <span className="absolute bottom-2 left-2 rounded bg-amber-600 px-2 py-1 text-xs font-medium text-white">
                  {dish.category}
                </span>
              </div>
              <div className="p-4">
                <h3 className="mb-2 text-xl font-bold text-amber-900">{dish.name}</h3>
                <p className="mb-4 text-amber-700">{dish.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-semibold text-amber-600">{dish.price.toFixed(2)} €</span>
                  <Link to="/menu" className="flex items-center text-sm font-medium text-amber-800 transition-colors hover:text-amber-600">
                    <span>Voir plus</span>
                    <FaArrowRight className="ml-1" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-12 text-center">
          <Link
            to="/menu"
            className="inline-block rounded-lg bg-amber-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-amber-700"
          >
            Découvrir tout notre menu
          </Link>
        </div>
      </div>
    </section>
  )
}

export default FeaturedDishes
