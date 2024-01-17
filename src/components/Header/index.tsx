import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { RootReducer } from '../../store'
import { open } from '../../store/reducers/cart'

import vectorImg from '../../assets/images/talherbg.svg'
import logo from '../../assets/images/logo.svg'

import * as S from './styles'

const Header = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)
  const openCart = () => {
    dispatch(open())
  }
  return (
    <S.Header style={{ backgroundImage: `url(${vectorImg})` }}>
      <nav className="container">
        <S.Links>
          <Link to="/">
            <a>Restaurantes</a>
          </Link>
          <li>
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </li>
          <li onClick={openCart}>{items.length} produto(s) no carrinho</li>
        </S.Links>
      </nav>
    </S.Header>
  )
}
export default Header
