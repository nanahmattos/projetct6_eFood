import * as S from './styles'

type Props = {
  image: string
  country: string
  title: string
}
const Banner = ({ image, country, title }: Props) => {
  return (
    <S.BannerImage
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${image})`
      }}
    >
      <div className="container">
        <div>
          <S.TextCountry>{country}</S.TextCountry>
        </div>
        <div>
          <S.NameRestaurant>{title}</S.NameRestaurant>
        </div>
      </div>
    </S.BannerImage>
  )
}
export default Banner
