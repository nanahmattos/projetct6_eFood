import { useSelector, useDispatch } from 'react-redux'

import { RootReducer } from '../../store'
import { priceBRL } from '../../utils'
import { remove, openCheck, close } from '../../store/reducers/cart'
import { getTotalPrice } from '../../utils'

import Button from '../Button'
import Card from '../Card'

import trash from '../../assets/images/trash.svg'

import * as S from './styles'

const Cart = () => {
  const { items, isOpen } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const goToCheckout = () => {
    dispatch(close())
    dispatch(openCheck())
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  return (
    <S.CartContainer className={isOpen ? 'is-open' : ''}>
      <Card>
        {items.length > 0 ? (
          <>
            <ul>
              {items.map((item) => (
                <S.Item key={item.id}>
                  <img src={item.foto} alt={item.nome} />
                  <div>
                    <h3>{item.nome}</h3>
                    <p>{priceBRL(item.preco)}</p>
                  </div>
                  <S.TrashImg onClick={() => removeItem(item.id)}>
                    <img src={trash} alt="remover" />
                  </S.TrashImg>
                </S.Item>
              ))}
            </ul>
            <S.Price className="margin-bottom">
              Valor Total <span>{priceBRL(getTotalPrice(items))}</span>
            </S.Price>
            <Button
              onClick={goToCheckout}
              title="Clique aqui para continuar com a entrega"
              type="button"
            >
              Continue com a entrega
            </Button>
          </>
        ) : (
          <p className="text">
            O carrinho está vazio, adicione pelo menos um produto para continuar
            com a compra.
          </p>
        )}
      </Card>
    </S.CartContainer>
  )
}
export default Cart
