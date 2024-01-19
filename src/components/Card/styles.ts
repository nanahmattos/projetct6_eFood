import styled from 'styled-components'
import { breakpoints, palette } from '../../styles'
import { Button } from '../Button/styles'

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  @media (max-width: ${breakpoints.mobile}) {
    justify-content:center;
  }
  h2 {
    font-size: 16px;
    margin: 16px 0 8px;
  }
}
`
export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.8;
`
export const Sidebar = styled.aside`
  background-color: ${palette.rose};
  z-index: 1;
  padding: 16px 8px 0 8px;
  max-width: 360px;
  width: 100%;

  ${Button} {
    max-width: 100%;
    width: 100%;
    margin-bottom: 8px;
  }
`
