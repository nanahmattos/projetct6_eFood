import { Link } from 'react-router-dom'
import * as S from './styles'
import vectorImg from '../../assets/images/talherbg.svg'
import logo from '../../assets/images/logo.svg'

const Header = () => (
  <header style={{ backgroundImage: `url(${vectorImg})` }}>
    <nav className="container">
      <S.Links>
        <li>Restaurantes</li>
        <li>
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </li>
        <li>0 produto(s) no carrinho</li>
      </S.Links>
    </nav>
  </header>
)
export default Header
