import * as S from './styles'
import starIcon from '../../assets/images/star.svg'
import Button from '../Button'

type Props = {
  id: number
  title: string
  image: string
  description: string
  stars: string
  infos: string[]
}

const Restaurant = ({ title, image, description, stars, id, infos }: Props) => {
  const getDescricao = (descricao: string) => {
    if (descricao.length > 248) {
      return descricao.slice(0, 245) + '...'
    }
    return descricao
  }
  return (
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
        <S.Description>{getDescricao(description)}</S.Description>
        <Button
          type="link"
          to={`/profile/${id}`}
          title="Clique aqui para ver o perfil do restaurante"
        >
          <>Saiba mais</>
        </Button>
      </div>
    </S.Card>
  )
}

export default Restaurant
