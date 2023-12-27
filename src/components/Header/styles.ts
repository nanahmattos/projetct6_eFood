import styled from 'styled-components'
import { palette } from '../../styles'

export const HeaderBar = styled.header``

export const Links = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const LinkItem = styled.li`
  margin: 65px 0;
  font-size: 18px;
  font-weight: bold;
  color: ${palette.orange};
`
