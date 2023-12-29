import styled from 'styled-components'
import pastaImg from '../../assets/images/pasta.png'
import { palette } from '../../styles'

export const BannerImage = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${pastaImg});
  background-repeat: no-repeat;
  background-size: cover;
  widht: 100%;
  height: 280px;
  overflow: hidden;
`

export const TextCountry = styled.h3`
  font-size: 32px;
  font-weight: 100;
  color: ${palette.white};
  margin-top: 25px;
  margin-bottom: 156px;
`
export const NameRestaurant = styled.h2`
  font-size: 32px;
  font-weight: bold;
  color: ${palette.white};
  margin-bottom: 32px;
`
