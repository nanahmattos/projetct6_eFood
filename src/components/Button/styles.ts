import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { palette } from '../../styles'

export const Button = styled.button`
  padding: 4px 6px;
  background-color: ${palette.white};
  color: ${palette.orange};
  font-weight: bold;
  font-size: 14px;
  text-align: center;
  border: none;
  text-decoration: none;
`
export const ButtonLink = styled(Link)`
  padding: 4px 6px;
  background-color: ${palette.orange};
  color: ${palette.white};
  font-weight: bold;
  font-size: 14px;
  text-align: center;
  border: none;
  text-decoration: none;
`
