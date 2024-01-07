import { useState, useEffect } from 'react'
import Hero from '../../components/Hero'
import RestaurantList from '../../components/RestaurantList'

export type Food = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: string
  descricao: string
  capa: string
  cardapio: {
    id: number
    foto: string
    preco: number
    nome: string
    descricao: string
    porcao: string
  }[]
}

const Home = () => {
  const [restaurantes, setRestaurantes] = useState<Food[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setRestaurantes(res))
  })
  return (
    <>
      <Hero />
      <RestaurantList restaurante={restaurantes} />
    </>
  )
}
export default Home
