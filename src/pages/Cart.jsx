import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaTrash, FaMinus, FaPlus, FaArrowLeft } from 'react-icons/fa'
import { addToCart, removeFromCart, clearCart } from '../redux/cartSlice'

const Cart = () => {
  const dispatch = useDispatch()
  const { items, total } = useSelector(state => state.cart)
  const [isOrdering, setIsOrdering] = useState(false)
  const [orderSuccess, setOrderSuccess] = useState(false)

  const handleIncrement = (item) => {
    dispatch(addToCart(item))
  }

  const handleDecrement = (itemId) => {
    dispatch(removeFromCart(itemId))
  }

  const handleOrder = (e) => {
    e.preventDefault()
    setIsOrdering(true)

    // Simuler un délai de traitement
    setTimeout(() => {
      setIsOrdering(false)
      setOrderSuccess(true)
      dispatch(clearCart())

      // Rediriger vers la page d'accueil après 3 secondes
      setTimeout(() => {
        setOrderSuccess(false)
      }, 3000)
    }, 2000)
  }

  if (orderSuccess) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-md rounded-lg bg-amber-50 p-8 text-center shadow-lg"
        >
          <div className="mb-6 flex items-center justify-center">
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
          <h2 className="mb-4 text-2xl font-bold text-amber-900">Commande confirmée !</h2>
          <p className="mb-6 text-amber-700">
            Merci pour votre commande. Nous vous contacterons rapidement pour confirmer les détails de livraison.
          </p>
          <Link
            to="/"
            className="inline-block rounded-lg bg-amber-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-amber-700"
          >
            Retour à l'accueil
          </Link>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 md:px-8">
      <div className="mb-8">
        <Link to="/menu" className="flex items-center text-amber-700 transition-colors hover:text-amber-900">
          <FaArrowLeft className="mr-2" />
          <span>Retour au menu</span>
        </Link>
      </div>

      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8 text-3xl font-bold text-amber-900 md:text-4xl"
      >
        Votre Panier
      </motion.h1>

      {items.length === 0 ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="rounded-lg bg-white p-8 text-center shadow-md"
        >
          <h2 className="mb-4 text-xl font-semibold text-amber-800">Votre panier est vide</h2>
          <p className="mb-6 text-amber-700">
            Parcourez notre menu pour découvrir nos délicieuses spécialités marocaines.
          </p>
          <Link
            to="/menu"
            className="inline-block rounded-lg bg-amber-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-amber-700"
          >
            Voir le menu
          </Link>
        </motion.div>
      ) : (
        <div className="grid gap-8 lg:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="rounded-lg bg-white p-6 shadow-md">
              <div className="flow-root">
                <ul className="-my-6 divide-y divide-amber-200">
                  {items.map((item) => (
                    <li key={item.id} className="flex py-6">
                      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="ml-4 flex flex-1 flex-col">
                        <div>
                          <div className="flex justify-between text-base font-medium text-amber-900">
                            <h3>{item.name}</h3>
                            <p className="ml-4">{(item.price * item.quantity).toFixed(2)} €</p>
                          </div>
                          <p className="mt-1 text-sm text-amber-700">{item.description}</p>
                        </div>
                        <div className="flex flex-1 items-end justify-between">
                          <div className="flex items-center">
                            <button
                              onClick={() => handleDecrement(item.id)}
                              className="flex h-8 w-8 items-center justify-center rounded-full border border-amber-400 text-amber-600 transition-colors hover:bg-amber-100"
                              aria-label="Diminuer la quantité"
                            >
                              <FaMinus size={12} />
                            </button>
                            <span className="mx-3 text-gray-700">{item.quantity}</span>
                            <button
                              onClick={() => handleIncrement(item)}
                              className="flex h-8 w-8 items-center justify-center rounded-full border border-amber-400 text-amber-600 transition-colors hover:bg-amber-100"
                              aria-label="Augmenter la quantité"
                            >
                              <FaPlus size={12} />
                            </button>
                          </div>
                          <button
                            onClick={() => handleDecrement(item.id)}
                            className="text-red-600 hover:text-red-800"
                            aria-label="Supprimer l'article"
                          >
                            <FaTrash />
                          </button>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="rounded-lg bg-white p-6 shadow-md"
          >
            <h2 className="mb-4 text-lg font-semibold text-amber-900">Récapitulatif de la commande</h2>
            <div className="mb-6 space-y-2">
              <div className="flex justify-between">
                <p className="text-amber-700">Sous-total</p>
                <p className="font-medium text-amber-900">{total.toFixed(2)} €</p>
              </div>
              <div className="flex justify-between">
                <p className="text-amber-700">Frais de livraison</p>
                <p className="font-medium text-amber-900">
                  {total > 30 ? 'Gratuit' : '5.00 €'}
                </p>
              </div>
              <div className="border-t border-amber-200 pt-2">
                <div className="flex justify-between">
                  <p className="text-lg font-semibold text-amber-900">Total</p>
                  <p className="text-lg font-semibold text-amber-900">
                    {(total > 30 ? total : total + 5).toFixed(2)} €
                  </p>
                </div>
              </div>
            </div>

            <form onSubmit={handleOrder}>
              <div className="mb-4">
                <label htmlFor="phone" className="mb-2 block text-sm font-medium text-amber-900">
                  Téléphone
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full rounded-md border border-amber-300 p-2 text-amber-900 focus:border-amber-500 focus:outline-none"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="address" className="mb-2 block text-sm font-medium text-amber-900">
                  Adresse de livraison
                </label>
                <textarea
                  id="address"
                  rows="3"
                  className="w-full rounded-md border border-amber-300 p-2 text-amber-900 focus:border-amber-500 focus:outline-none"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full rounded-lg bg-amber-600 py-3 font-semibold text-white transition-colors hover:bg-amber-700 disabled:opacity-70"
                disabled={isOrdering}
              >
                {isOrdering ? 'Traitement en cours...' : 'Commander maintenant'}
              </button>
            </form>

            <div className="mt-4 text-center text-sm text-amber-700">
              <p>Livraison gratuite à partir de 30 DHS</p>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  )
}

export default Cart
