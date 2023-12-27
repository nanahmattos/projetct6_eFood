import styled from 'styled-components'
import { palette } from '../../styles'

export const Card = styled.div`
  background-color: #fff;
  position: relative;
  border: 1px solid ${palette.orange};
  .CardText {
    padding: 8px;
  }
`
export const Description = styled.p`
  color: ${palette.orange};
  font-size: 14px;
  display: block;
  margin-bottom: 20px;
`
export const Infos = styled.div`
  position: absolute;
  top: 22px;
  right: 20px;
`
export const Tag = styled.div`
  background-color: ${palette.orange};
  color: #fff;
  font-size: 12px;
  font-weight: bold;
  text-align: center;
  padding: 4px 6px;
  display: inline-block;
  margin-right: 16px;
`
export const Item = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${palette.orange};
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 16px;
`
export const Star = styled.div`
  display: flex;
  gap: 8px;
`
