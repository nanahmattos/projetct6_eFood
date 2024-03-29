import styled from 'styled-components'
import { breakpoints, palette } from '../../styles'

export const CardProduct = styled.div`
  background-color: ${palette.rose};
  color: ${palette.white};
  padding: 8px;
  font-size: 14px;
  justify-content: space-around;
  display: flex;
  flex-direction: column;
  gap: 8px;
  height: 100%;

  img {
    width: 100%;
    height: 167px;
    object-fit: cover;
  }
  h2 {
    font-size: 16px;
  }
`
export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: none;
  align-items: center;
  justify-content: center;

  &.visivel {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
  }
`
export const ModalContent = styled.div`
  background-color: ${palette.rose};
  position: relative;
  z-index: 1;
  display: inline-flex;
  padding: 32px;
  @media (max-width: ${breakpoints.mobile}) {
    flex-direction: column;
  }
  h2 {
    font-size: 18px;
    margin-bottom: 16px;
  }
  p {
    font-size: 14px;
    margin-bottom: 16px;
  }
  div {
    img {
      cursor: pointer;
      position: absolute;
      width: 16px;
      height: 16px;
      top: 8px;
      right: 8px;
    }
  }

  > img {
    width: 280px;
    height: 280px;
    flex-shrink: 0;
    object-fit: cover;
    margin-right: 24px;
    @media (max-width: ${breakpoints.mobile}) {
      width: 100%;
    }
  }
`
