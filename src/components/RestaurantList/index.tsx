import Restaurant from '../Restaurant'

import * as S from './styles'

type Props = {
  restaurante: Food[]
}

const RestaurantList = ({ restaurante }: Props) => {
  const getRestaurantTags = (restaurant: Food) => {
    const tags = []
    if (restaurant.destacado) {
      tags.push('Destaque da semana')
    }
    if (restaurant.tipo) {
      tags.push(restaurant.tipo)
    }
    return tags
  }
  return (
    <S.Container>
      <div className="container">
        <S.List>
          {restaurante.map((restaurant) => (
            <li key={restaurant.id}>
              <Restaurant
                id={restaurant.id}
                title={restaurant.titulo}
                image={restaurant.capa}
                stars={restaurant.avaliacao}
                description={restaurant.descricao}
                infos={getRestaurantTags(restaurant)}
              />
            </li>
          ))}
        </S.List>
      </div>
    </S.Container>
  )
}
export default RestaurantList
