// import { useState, useEffect } from 'react'
import Hero from '../../components/Hero'
import RestaurantList from '../../components/RestaurantList'
import { useGetRestaurantQuery } from '../../services/api'

export type Menu = {
  id: number
  foto: string
  preco: number
  nome: string
  descricao: string
  porcao?: string
}
export type Food = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: string
  descricao: string
  capa: string
  cardapio: Menu[]
}

const Home = () => {
  const { data: food } = useGetRestaurantQuery()
  if (food) {
    return (
      <>
        <Hero />
        <RestaurantList restaurante={food} />
      </>
    )
  }
  return <h3>Carregando...</h3>
}
export default Home
