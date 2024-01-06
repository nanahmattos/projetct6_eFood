import * as S from './styles'
import Button from '../Button'
import close from '../../assets/images/close.svg'
type Props = {
  title: string
  image: string
  description: string
}
const Product = ({ title, image, description }: Props) => (
  <>
    <S.CardProduct>
      <img src={image} alt="pizza" />
      <h2>{title}</h2>
      <p>{description}</p>
      <Button type="button" title="Clique aqui para adicionar ao carrinho">
        Adicionar ao carrinho
      </Button>
    </S.CardProduct>

    <S.Modal>
      <S.ModalContent className="container">
        <div>
          <img src={close} alt="icone de fechar" />
        </div>
        <img src={image} alt="pizza" />
        <div>
          <h2>{title}</h2>
          <p>{description}</p>
          <p>Serve: de 2 a 3 pessoas</p>
          <Button type="button" title="Clique aqui para adicionar ao carrinho">
            Adicionar ao carrinho - R$60,90
          </Button>
        </div>
      </S.ModalContent>
      <div className="overlay"></div>
    </S.Modal>
  </>
)
export default Product
