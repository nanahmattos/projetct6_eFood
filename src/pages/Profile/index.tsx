import { useParams } from 'react-router-dom'
import Banner from '../../components/Banner'
import Cart from '../../components/Cart'
import Header from '../../components/Header'
import ProductList from '../../components/ProductList'
// import { Food } from '../Home'
import { useGetMenuQuery } from '../../services/api'
const Profile = () => {
  const { id } = useParams()

  const { data: menu } = useGetMenuQuery(id!)

  if (!menu) {
    return <h3>Carregando...</h3>
  }

  return (
    <>
      <Header />
      <Banner image={menu.capa} country={menu.tipo} title={menu.titulo} />
      <ProductList products={[menu]} />
      <Cart />
    </>
  )
}
export default Profile
