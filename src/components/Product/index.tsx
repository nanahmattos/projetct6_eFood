import { useState } from 'react'
import { useDispatch } from 'react-redux'

import { add, open } from '../../store/reducers/cart'
import { priceBRL } from '../../utils'

import Button from '../Button'

import close from '../../assets/images/close.svg'

import * as S from './styles'

type ModalState = {
  isVisible: boolean
}

const Product = ({ nome, foto, descricao, preco, porcao, id }: Menu) => {
  const dispatch = useDispatch()
  const menu: Menu = {
    id,
    foto,
    nome,
    descricao,
    preco
  }
  const addToCart = () => {
    dispatch(add(menu))
    dispatch(open())
  }

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
        <img src={foto} alt={nome} />
        <h2>{nome}</h2>
        <p>{getDescricao(descricao)}</p>
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
          <img src={foto} alt={nome} />
          <div>
            <h2>{nome}</h2>
            <p>{descricao}</p>
            <p>Serve de: {porcao} </p>
            <Button
              type="button"
              title="Clique aqui para adicionar ao carrinho"
              onClick={addToCart}
            >
              <>Adicionar ao carrinho - {priceBRL(preco)}</>
            </Button>
          </div>
        </S.ModalContent>
        <div onClick={() => closeModal()} className="overlay"></div>
      </S.Modal>
    </>
  )
}
export default Product
