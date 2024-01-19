import styled from 'styled-components'
import { breakpoints, palette } from '../../styles'

export const Header = styled.header`
  overflow-x: hidden;
`
export const Links = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 65px 0;
  font-size: 18px;
  font-weight: bold;
  color: ${palette.rose};
  @media (max-width: ${breakpoints.mobile}) {
    gap: 8px;
    flex-direction: column;
  }
  a {
    color: ${palette.rose};
    font-size: 18px;
    text-decoration: none;
  }
`
