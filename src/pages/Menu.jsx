import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { motion } from 'framer-motion'
import MenuCategory from '../components/ui/MenuCategory'

const Menu = () => {
  const { categories } = useSelector(state => state.menu)
  const [activeCategory, setActiveCategory] = useState(null)

  // Définir la catégorie active par défaut au premier rendu
  React.useEffect(() => {
    if (categories.length > 0 && activeCategory === null) {
      setActiveCategory(categories[0].id)
    }
  }, [categories, activeCategory])

  // Filtrer les catégories à afficher
  const categoryToShow = activeCategory
    ? categories.find(cat => cat.id === activeCategory)
    : categories[0]

  return (
    <div className="py-12">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mb-12 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4 text-4xl font-bold text-amber-900 md:text-5xl"
          >
            Notre Menu
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto max-w-2xl text-lg text-amber-700"
          >
            Découvrez nos spécialités marocaines préparées avec amour et savoir-faire dans le respect des traditions culinaires.
          </motion.p>
        </div>

        {/* Navigation des catégories */}
        <div className="mb-10 overflow-x-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex justify-center space-x-4"
          >
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`whitespace-nowrap rounded-full px-6 py-2 font-medium transition-colors ${
                  activeCategory === category.id
                    ? 'bg-amber-600 text-white'
                    : 'bg-amber-100 text-amber-800 hover:bg-amber-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Contenu du menu */}
        <div className="mb-16">
          {categoryToShow && (
            <MenuCategory
              key={categoryToShow.id}
              category={categoryToShow.name}
              items={categoryToShow.items}
            />
          )}
        </div>

        {/* Section informations supplémentaires */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="rounded-lg bg-amber-100 p-6 text-center"
        >
          <h2 className="mb-4 text-2xl font-bold text-amber-900">Informations sur nos plats</h2>
          <p className="mb-2 text-amber-800">
            Tous nos plats sont préparés sur place avec des ingrédients frais et de qualité.
          </p>
          <p className="mb-4 text-amber-800">
            Nous pouvons adapter nos recettes selon vos préférences ou restrictions alimentaires.
            N'hésitez pas à nous informer lors de votre commande ou réservation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="rounded-full bg-amber-200 px-4 py-1 text-sm font-medium text-amber-900">
              Options végétariennes disponibles
            </span>
            <span className="rounded-full bg-amber-200 px-4 py-1 text-sm font-medium text-amber-900">
              Sans gluten sur demande
            </span>
            <span className="rounded-full bg-amber-200 px-4 py-1 text-sm font-medium text-amber-900">
              Épices ajustables
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Menu
