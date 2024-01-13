import { RootReducer } from '../../store'
import { useSelector, useDispatch } from 'react-redux'
import { close, remove } from '../../store/reducers/cart'

import * as S from './styles'
import trash from '../../assets/images/trash.svg'
import Button from '../Button'

const Cart = () => {
  const { isOpen, menuItems } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }
  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const getTotalPrice = () => {
    return menuItems.reduce((soma, ValorAtual) => {
      return (soma += ValorAtual.preco)
    }, 0)
  }
  return (
    <S.CartContain className={isOpen ? 'is-open' : ''}>
      <S.Overlay onClick={closeCart}></S.Overlay>
      <S.Sidebar>
        <ul>
          {menuItems.map((item) => (
            <S.Item key={item.id}>
              <img src={item.foto} alt={item.nome} />
              <div>
                <h3>{item.nome}</h3>
                <p>{item.preco}</p>
              </div>
              <S.TrashImg onClick={() => removeItem(item.id)}>
                <img src={trash} alt="remover" />
              </S.TrashImg>
            </S.Item>
          ))}
        </ul>
        <S.Price>
          <span>Valor Total</span> {getTotalPrice()}
        </S.Price>
        <Button title="Clique aqui para continuar com a entrega" type="button">
          <>Continue com a entrega</>
        </Button>
      </S.Sidebar>
    </S.CartContain>
  )
}
export default Cart
