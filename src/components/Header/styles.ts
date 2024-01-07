import styled from 'styled-components'
import { palette } from '../../styles'

export const Links = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 65px 0;
  font-size: 18px;
  font-weight: bold;
  color: ${palette.orange};
  a {
    color: ${palette.orange};
    font-size: 18px;
    text-decoration: none;
  }
`
