import Product from '../Product'

import * as S from './styles'

type Props = {
  products: Menu[]
}

const ProductList = ({ products }: Props) => {
  return (
    <S.Container>
      <div className="container">
        <S.List>
          {products.map((item) => (
            <li key={item.id}>
              <Product
                id={item.id}
                nome={item.nome}
                foto={item.foto}
                descricao={item.descricao}
                porcao={item.porcao}
                preco={item.preco}
              />
            </li>
          ))}
        </S.List>
      </div>
    </S.Container>
  )
}
export default ProductList
