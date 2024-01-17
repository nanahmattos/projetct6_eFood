import styled from 'styled-components'
import { palette } from '../../styles'

type inputItemsProps = {
  maxWidth?: string
  marginBottom?: string
}

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 34px;
`
export const CheckoutContainer = styled.div`
  display: none;

  h2 {
    margin-bottom: 8px;
  }
  p {
    margin-bottom: 24px;
    font-size: 14px;
  }

  &.is-open {
    display: flex;
  }
`

export const InputItems = styled.div<inputItemsProps>`
  flex: auto;
  max-width: ${(props) => props.maxWidth || 'auto'};
  margin-bottom: ${(props) => props.marginBottom || '0'};

  label {
    font-size: 14px;
    font-weight: bold;
  }
  input {
    display: block;
    background-color: ${palette.white};
    border: 1px solid ${palette.white};
    height: 32px;
    margin: 8px 0;
    width: 100%;

    &.error {
      border: 1px solid red;
    }
  }
`
