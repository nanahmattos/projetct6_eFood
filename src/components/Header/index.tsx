import { Link } from 'react-router-dom'
import * as S from './styles'
import vectorImg from '../../assets/images/talherbg.svg'
import logo from '../../assets/images/logo.svg'

const Header = () => (
  <S.HeaderBar style={{ backgroundImage: `url(${vectorImg})` }}>
    <nav className="container">
      <S.Links>
        <S.LinkItem>Restaurantes</S.LinkItem>
        <S.LinkItem>
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </S.LinkItem>
        <S.LinkItem>0 produto(s) no carrinho</S.LinkItem>
      </S.Links>
    </nav>
  </S.HeaderBar>
)
export default Header
