import React from 'react'
import { motion } from 'framer-motion'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../redux/cartSlice'
import { FaShoppingCart } from 'react-icons/fa'

const MenuCategory = ({ category, items }) => {
  const dispatch = useDispatch()

  const handleAddToCart = (item) => {
    dispatch(addToCart(item))
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: "-50px" }}
      className="mb-12"
    >
      <h2 className="mb-6 text-center text-2xl font-bold text-amber-900 md:text-3xl">
        {category}
      </h2>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {items.map((item) => (
          <motion.div
            key={item.id}
            whileHover={{ scale: 1.02 }}
            className="flex overflow-hidden rounded-lg bg-white shadow-md"
          >
            <div className="flex-shrink-0">
              <img
                src={item.image}
                alt={item.name}
                className="h-28 w-28 object-cover md:h-32 md:w-32"
              />
            </div>
            <div className="flex flex-grow flex-col justify-between p-4">
              <div>
                <h3 className="mb-1 font-bold text-amber-900">{item.name}</h3>
                <p className="mb-2 text-sm text-amber-700">{item.description}</p>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-semibold text-amber-600">{item.price.toFixed(2)} €</span>
                <button
                  onClick={() => handleAddToCart(item)}
                  className="flex items-center rounded-full bg-amber-500 p-2 text-white transition-colors hover:bg-amber-600"
                  aria-label={`Ajouter ${item.name} au panier`}
                >
                  <FaShoppingCart className="h-4 w-4" />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export default MenuCategory
