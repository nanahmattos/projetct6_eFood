import Hero from '../../components/Hero'
import RestaurantList from '../../components/RestaurantList'
import { useGetRestaurantQuery } from '../../services/api'

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
