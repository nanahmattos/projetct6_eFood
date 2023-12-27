import * as S from './styles'
import starIcon from '../../assets/images/star.svg'
import Button from '../Button'
type Props = {
  title: string
  image: string
  description: string
  infos: string[]
  stars: string
}

const Restaurant = ({ title, image, description, infos, stars }: Props) => (
  <S.Card>
    <img src={image} alt={title} />
    <S.Infos>
      {infos.map((info) => (
        <S.Tag key={info}>{info}</S.Tag>
      ))}
    </S.Infos>
    <div className="CardText">
      <S.Item>
        {title}
        <S.Star>
          {stars}
          <img src={starIcon} alt="icone estrela" />
        </S.Star>
      </S.Item>
      <S.Description>{description}</S.Description>
      <Button
        type="link"
        to="/profile"
        title="Clique aqui para ver o perfil do restaurante"
      >
        saiba mais
      </Button>
    </div>
  </S.Card>
)

export default Restaurant
