import styled from 'styled-components'
import { palette } from '../../styles'

export const Card = styled.div`
  background-color: #fff;
  position: relative;
  text-decoration: none;
  display: block;
  border: 1px solid ${palette.rose};
  .CardText {
    padding: 8px;
  }
  img {
    display: block;
    width: 100%;
    height: 217px;
    object-fit: cover;
  }
`
export const Description = styled.p`
  color: ${palette.rose};
  font-size: 14px;
  display: block;
  margin-bottom: 20px;
`
export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 8px;
`
export const Tag = styled.div`
  background-color: ${palette.rose};
  color: #fff;
  font-size: 12px;
  font-weight: bold;
  text-align: center;
  padding: 4px 6px;
  display: inline-block;
  margin-right: 8px;
  text-transform: capitalize;
`
export const Item = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${palette.rose};
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 16px;
`
export const Star = styled.div`
  display: flex;
  gap: 8px;
  img {
    height: 21px;
  }
`
