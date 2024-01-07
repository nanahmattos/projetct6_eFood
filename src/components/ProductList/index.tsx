import { Food } from '../../pages/Home'

import * as S from './styles'
import Product from '../Product'

type Props = {
  products: Food[] | undefined
}

const ProductList = ({ products }: Props) => {
  return (
    <S.Container>
      <div className="container">
        <S.List>
          {products?.map((menu) =>
            menu.cardapio.map((product) => (
              <li key={product.id}>
                <Product
                  id={product.id}
                  title={product.nome}
                  image={product.foto}
                  description={product.descricao}
                  porcao={product.porcao}
                  price={product.preco}
                />
              </li>
            ))
          )}
        </S.List>
      </div>
    </S.Container>
  )
}
export default ProductList
