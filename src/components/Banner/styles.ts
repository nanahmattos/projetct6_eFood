import styled from 'styled-components'
import pastaImg from '../../assets/images/pasta.png'

export const BannerImage = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${pastaImg});
  background-repeat: no-repeat;
  background-size: cover;
  widht: 100%;
  height: 280px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  div {
    padding: 0 171px;
  }
`
export const TextCountry = styled.h3`
  font-size: 32px;
  font-weight: 100;
  color: #fff;
  margin-top: 25px;
`
export const NameRestaurant = styled.h2`
  font-size: 32px;
  font-weight: bold;
  color: #fff;
  margin-bottom: 32px;
`
