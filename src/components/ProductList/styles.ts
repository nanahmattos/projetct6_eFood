import styled from 'styled-components'
import { breakpoints } from '../../styles'

export const Container = styled.section`
  padding: 56px 0;
`
export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 48px;

  @media (max-width: ${breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`
