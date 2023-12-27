import * as S from './styles'
import Product from '../Product'
import Food from '../../models/Food'

type Props = {
  foods: Food[]
}
const ProductList = ({ foods }: Props) => (
  <S.Container>
    <div className="container">
      <S.List>
        {foods.map((food) => (
          <Product
            key={food.id}
            title={food.title}
            image={food.image}
            description={food.description}
          />
        ))}
      </S.List>
    </div>
  </S.Container>
)
export default ProductList
