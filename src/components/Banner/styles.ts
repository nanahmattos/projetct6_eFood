import styled from 'styled-components'
import { palette } from '../../styles'

export const BannerImage = styled.div`
  position: relative;
  background-repeat: no-repeat;
  background-size: cover;
  widht: 100%;
  height: 280px;
  display: block;

  ::before {
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }
  .container {
    height: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
  }
`

export const TextCountry = styled.h3`
  font-size: 32px;
  font-weight: 100;
  line-height: 32px;
  color: ${palette.white};
  margin-top: 25px;
  text-transform: capitalize;
`
export const NameRestaurant = styled.h2`
  font-size: 32px;
  font-weight: bold;
  color: ${palette.white};
  margin-bottom: 32px;
  line-height: 38px;
`
