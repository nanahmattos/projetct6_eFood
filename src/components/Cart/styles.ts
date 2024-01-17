import styled from 'styled-components'
import { palette } from '../../styles'

export const CartContainer = styled.div`
  display: none;

  &.is-open {
    display: flex;
  }
  .text {
    text-align: center;
  }
`

export const Item = styled.li`
  background-color: ${palette.nude};
  display: flex;
  padding: 8px;
  margin: 16px 0;
  position: relative;
  gap: 8px;

  h3 {
    font-size: 18px;
    font-weight: bold;
    color: ${palette.rose};
  }
  p {
    padding-top: 16px;
    font-size: 14px;
    color: ${palette.rose};
  }
  > img {
    width: 80px;
    height: 80px;
    object-fit: cover;
  }
`
export const TrashImg = styled.div`
  position: absolute;
  right: 8px;
  bottom: 8px;
  z-index: 1;
`
export const Price = styled.p`
  font-size: 14px;
  font-weight: bold;
  color: #fff;
  display: flex;
  justify-content: space-between;
  padding-top: 24px;
  margin-bottom: 16px;
`
