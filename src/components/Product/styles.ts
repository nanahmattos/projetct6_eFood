import styled from 'styled-components'
import { palette } from '../../styles'

export const CardProduct = styled.div`
  background-color: ${palette.orange};
  color: #fff;
  padding: 8px;
  font-size: 14px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  h2 {
    font-size: 16px;
  }
`
