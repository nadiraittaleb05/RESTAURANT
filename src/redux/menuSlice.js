import { createSlice } from '@reduxjs/toolkit'

// Images importées depuis des URL externes pour les plats marocains
const initialState = {
  categories: [
    {
      id: 1,
      name: 'Entrées',
      items: [
        {
          id: 101,
          name: 'Salade Marocaine',
          description: 'Tomates, concombres, oignons et poivrons avec vinaigrette à l\'huile d\'olive et citron',
          price: 6.50,
          image: 'https://images.unsplash.com/photo-1505253758473-96b7015fcd40?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
        },
        {
          id: 102,
          name: 'Briouates au Fromage',
          description: 'Feuilletés triangulaires farcis au fromage et aux herbes fraîches',
          price: 7.50,
          image: 'https://images.unsplash.com/photo-1541518763669-27fef04b14ea?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
        },
        {
          id: 103,
          name: 'Zaalouk d\'Aubergine',
          description: 'Purée d\'aubergines grillées aux tomates, ail et épices marocaines',
          price: 6.90,
          image: 'https://images.unsplash.com/photo-1563227812-0ea4c22e6cc8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
        }
      ]
    },
    {
      id: 2,
      name: 'Plats Principaux',
      items: [
        {
          id: 201,
          name: 'Tajine d\'Agneau aux Pruneaux',
          description: 'Agneau mijoté avec pruneaux, amandes et épices douces dans un tajine traditionnel',
          price: 18.90,
          image: 'https://images.unsplash.com/photo-1585937421612-70a008356c36?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
        },
        {
          id: 202,
          name: 'Couscous Royal',
          description: 'Semoule de blé garnie de légumes, poulet, agneau et merguez, servie avec sa sauce',
          price: 17.50,
          image: 'https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
        },
        {
          id: 203,
          name: 'Tajine de Poisson',
          description: 'Poisson frais cuit avec tomates, poivrons, olives et citron confit',
          price: 16.90,
          image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
        }
      ]
    },
    {
      id: 3,
      name: 'Desserts',
      items: [
        {
          id: 301,
          name: 'Pastilla au Lait',
          description: 'Feuilleté croustillant fourré à la crème pâtissière, parfumé à la fleur d\'oranger',
          price: 6.90,
          image: 'https://images.unsplash.com/photo-1533134242453-b9beba2929c1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
        },
        {
          id: 302,
          name: 'Cornes de Gazelle',
          description: 'Pâtisseries en forme de croissants fourrées aux amandes et parfumées à l\'eau de rose',
          price: 5.50,
          image: 'https://images.unsplash.com/photo-1558326567-98ae2405596b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
        },
        {
          id: 303,
          name: 'Thé à la Menthe',
          description: 'Thé vert traditionnel à la menthe fraîche et au sucre',
          price: 3.50,
          image: 'https://images.unsplash.com/photo-1547825407-2d060104b7f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
        }
      ]
    }
  ],
  featured: [201, 202, 102] // IDs des plats mis en avant
}

const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    // Nous pouvons ajouter des reducers plus tard si nécessaire
  }
})

export default menuSlice.reducer
