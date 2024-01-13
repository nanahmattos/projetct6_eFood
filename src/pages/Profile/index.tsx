import { useParams } from 'react-router-dom'
import { useGetMenuQuery, useGetBannerQuery } from '../../services/api'

import Banner from '../../components/Banner'
import Cart from '../../components/Cart'
import Header from '../../components/Header'
import ProductList from '../../components/ProductList'

const Profile = () => {
  const { id } = useParams()

  const { data: menu } = useGetMenuQuery(id!)
  const { data: banner } = useGetBannerQuery(id!)

  if (!menu || !banner) {
    return <h3>Carregando...</h3>
  }

  return (
    <>
      <Header />
      <Banner image={banner.capa} country={banner.tipo} title={banner.titulo} />
      <ProductList products={[menu]} />
      <Cart />
    </>
  )
}
export default Profile
