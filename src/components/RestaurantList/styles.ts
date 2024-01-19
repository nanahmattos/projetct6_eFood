import styled from 'styled-components'
import { breakpoints } from '../../styles'

export const Container = styled.section`
  padding: 80px 171px;
  @media (max-width: ${breakpoints.mobile}),
    (min-width: ${breakpoints.tablet}) {
    padding: 80px 0;
  }
`
export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px 80px;
  @media (max-width: ${breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`
