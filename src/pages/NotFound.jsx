import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaHome, FaUtensils } from 'react-icons/fa'

const NotFound = () => {
  return (
    <div className="flex min-h-[80vh] items-center justify-center py-12">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="text-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-8 flex justify-center">
              <div className="relative">
                <div className="text-[120px] font-extrabold text-amber-900 opacity-10 md:text-[150px]">
                  404
                </div>
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
                  <FaUtensils className="h-24 w-24 text-amber-600" />
                </div>
              </div>
            </div>

            <h1 className="mb-4 text-3xl font-bold text-amber-900 md:text-4xl">
              Page introuvable
            </h1>
            <p className="mb-8 text-lg text-amber-700">
              Oups ! La page que vous recherchez semble avoir été déplacée, supprimée ou n'a jamais existé.
            </p>

            <div className="flex flex-col items-center justify-center space-y-4 md:flex-row md:space-x-4 md:space-y-0">
              <Link
                to="/"
                className="flex items-center rounded-lg bg-amber-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-amber-700"
              >
                <FaHome className="mr-2" />
                Retour à l'accueil
              </Link>
              <Link
                to="/menu"
                className="flex items-center rounded-lg border-2 border-amber-600 px-6 py-3 font-semibold text-amber-600 transition-colors hover:bg-amber-50"
              >
                <FaUtensils className="mr-2" />
                Voir notre menu
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="mt-16"
          >
            <p className="text-amber-700">
              Vous pouvez également nous contacter si vous avez besoin d'aide.
            </p>
            <Link
              to="/contact"
              className="mt-2 inline-block font-medium text-amber-600 hover:underline"
            >
              Contactez-nous
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default NotFound
