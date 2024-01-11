import { Link } from 'react-router-dom'
import * as S from './styles'
import vectorImg from '../../assets/images/talherbg.svg'
import logo from '../../assets/images/logo.svg'
import { open } from '../../store/reducers/cart'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'

const Header = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)
  const openCart = () => {
    dispatch(open())
  }
  return (
    <header style={{ backgroundImage: `url(${vectorImg})` }}>
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
    </header>
  )
}
export default Header
