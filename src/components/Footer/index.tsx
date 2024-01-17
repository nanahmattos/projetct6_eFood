import logo from '../../assets/images/logo.svg'
import instagram from '../../assets/images/instagram.svg'
import facebook from '../../assets/images/facebook.svg'
import twitter from '../../assets/images/twitter.svg'

import * as S from './styles'

const Footer = () => (
  <S.Container>
    <img src={logo} alt="logo" />
    <div>
      <S.Links>
        <li>
          <a href="#">
            <img src={instagram} alt="instagram" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src={facebook} alt="facebook" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src={twitter} alt="twitter" />
          </a>
        </li>
      </S.Links>
    </div>
    <S.Text>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade <br />
      dos produtos é toda do estabelecimento contratado.{' '}
    </S.Text>
  </S.Container>
)

export default Footer
