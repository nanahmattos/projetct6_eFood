import styled from 'styled-components'
import { palette } from '../../styles'
import { Button } from '../Button/styles'
export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.8;
`
export const CartContain = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;

  &.is-open {
    display: flex;
  }
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
  }
`
export const Item = styled.li`
  background-color: ${palette.nude};
  display: flex;
  padding: 8px;
  margin: 16px 0;
  position: relative;
  gap: 8px;
  h3 {
    font-size: 18px;
    font-weight: bold;
    color: ${palette.rose};
  }
  p {
    padding-top: 16px;
    font-size: 14px;
    color: ${palette.rose};
  }
  > img {
    width: 80px;
    height: 80px;
    object-fit: cover;
  }
`
export const TrashImg = styled.div`
  position: absolute;
  right: 8px;
  bottom: 8px;
  z-index: 1;
`
export const Price = styled.p`
  font-size: 14px;
  font-weight: bold;
  color: #fff;
  display: flex;
  justify-content: space-between;
  padding-top: 24px;
  padding-bottom: 16px;
`
