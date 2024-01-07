import * as S from './styles'
import Button from '../Button'
import close from '../../assets/images/close.svg'
import { useState } from 'react'

type Props = {
  title: string
  image: string
  description: string
  id: number
  price: number
  porcao: string
}
type ModalState = {
  isVisible: boolean
}
const Product = ({ title, image, description, porcao, price }: Props) => {
  const [modal, setModal] = useState<ModalState>({
    isVisible: false
  })

  const getDescricao = (descricao: string) => {
    if (descricao.length > 120) {
      return descricao.slice(0, 115) + '...'
    }
    return descricao
  }
  const closeModal = () => {
    setModal({
      isVisible: false
    })
  }
  return (
    <>
      <S.CardProduct>
        <img src={image} alt={title} />
        <h2>{title}</h2>
        <p>{getDescricao(description)}</p>
        <Button
          onClick={() => {
            setModal({ isVisible: true })
          }}
          type="button"
          title="Clique aqui para adicionar ao carrinho"
        >
          <>Adicionar ao carrinho</>
        </Button>
      </S.CardProduct>

      <S.Modal className={modal.isVisible ? 'visivel' : ''}>
        <S.ModalContent className="container">
          <div>
            <img
              src={close}
              alt="icone de fechar"
              onClick={() => closeModal()}
            />
          </div>
          <img src={image} alt={title} />
          <div>
            <h2>{title}</h2>
            <p>{description}</p>
            <p>Serve de: {porcao} </p>
            <Button
              type="button"
              title="Clique aqui para adicionar ao carrinho"
            >
              <>Adicionar ao carrinho - R$ {price}</>
            </Button>
          </div>
        </S.ModalContent>
        <div onClick={() => closeModal()} className="overlay"></div>
      </S.Modal>
    </>
  )
}
export default Product
