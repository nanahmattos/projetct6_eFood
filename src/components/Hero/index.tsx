import * as S from './styles'
import vectorImg from '../../assets/images/talherbg.svg'
import logo from '../../assets/images/logo.svg'

const Hero = () => (
  <S.HeroContainer style={{ backgroundImage: `url(${vectorImg})` }}>
    <S.Logo src={logo} alt="logo" />
    <S.Title>
      Viva experiências gastronômicas <br /> no conforto da sua casa
    </S.Title>
  </S.HeroContainer>
)

export default Hero
