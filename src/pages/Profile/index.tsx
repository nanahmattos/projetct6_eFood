import { useParams } from 'react-router-dom'
import Banner from '../../components/Banner'
import Cart from '../../components/Cart'
import Header from '../../components/Header'
import ProductList from '../../components/ProductList'
import { useGetMenuQuery, useGetRestaurantQuery } from '../../services/api'

const Profile = () => {
  const { id } = useParams()

  const { data: menu } = useGetMenuQuery(id!)
  const { data: restaurante } = useGetRestaurantQuery(id!)

  if (!menu || !restaurante) {
    return <h3>Carregando...</h3>
  }

  return (
    <>
      <Header />
      <Banner
        image={restaurante.capa}
        country={restaurante.tipo}
        title={restaurante.titulo}
      />
      <ProductList products={menu} />
      <Cart />
    </>
  )
}
export default Profile
