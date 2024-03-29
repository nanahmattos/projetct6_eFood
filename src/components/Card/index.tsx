import { useDispatch } from 'react-redux'
import { close, closeCheck } from '../../store/reducers/cart'

import * as S from './styles'

type Props = {
  children: JSX.Element
  title?: string
}

const Card = ({ children, title }: Props) => {
  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
    dispatch(closeCheck())
  }
  return (
    <S.Container>
      <S.Overlay onClick={closeCart}></S.Overlay>
      <S.Sidebar>
        <h2>{title}</h2>
        {children}
      </S.Sidebar>
    </S.Container>
  )
}
export default Card
