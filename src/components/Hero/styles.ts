import styled from 'styled-components'
import { palette } from '../../styles'

export const HeroContainer = styled.div`
  width: 100%;
  height: 384px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
`
export const Title = styled.h1`
  color: ${palette.rose};
  font-size: 36px;
  text-align: center;
  margin-bottom: 40px;
`
export const Logo = styled.img`
  margin-top: 64px;
`
