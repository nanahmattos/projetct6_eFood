import styled from 'styled-components'
import { palette } from '../../styles'

export const CardProduct = styled.div`
  background-color: ${palette.orange};
  color: ${palette.white};
  padding: 8px;
  font-size: 14px;
  display: flex;
  flex-direction: column;
  gap: 8px;
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
  display: flex;
  align-items: center;
  justify-content: center;

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    // background-color: rgba(0, 0, 0, 0.73);
  }
`
export const ModalContent = styled.div`
  background-color: ${palette.orange};
  posisition: relative;
  z-index: 1;
`
