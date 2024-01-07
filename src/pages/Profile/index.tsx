import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Banner from '../../components/Banner'
import Header from '../../components/Header'
import ProductList from '../../components/ProductList'
import { Food } from '../Home'

const Profile = () => {
  const { id } = useParams()
  const [menu, setMenu] = useState<Food | undefined>(undefined)

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((data) => setMenu(data))
  }, [id])

  if (!menu) {
    return <h3>Carregando...</h3>
  }

  return (
    <>
      <Header />
      <Banner image={menu.capa} country={menu.tipo} title={menu.titulo} />
      <ProductList products={[menu]} />
    </>
  )
}
export default Profile
