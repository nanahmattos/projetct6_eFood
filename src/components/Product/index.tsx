import * as S from './styles'
import Button from '../Button'
type Props = {
  title: string
  image: string
  description: string
}
const Product = ({ title, image, description }: Props) => (
  <S.CardProduct>
    <img src={image} alt="pizza" />
    <h2>{title}</h2>
    <p>{description}</p>
    <Button type="button" title="Clique aqui para adicionar ao carrinho">
      Adicionar ao carrinho
    </Button>
  </S.CardProduct>
)
export default Product
