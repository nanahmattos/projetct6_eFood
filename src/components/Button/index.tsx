import * as S from './styles'

type Props = {
  type: 'button' | 'link' | 'submit'
  title: string
  to?: string
  onClick?: () => void
  children: JSX.Element | string
  isActive?: boolean
}
const Button = ({ type, title, to, onClick, children }: Props) => {
  if (type === 'button' || type === 'submit') {
    return (
      <S.Button type={type} title={title} onClick={onClick}>
        {children}
      </S.Button>
    )
  }
  return (
    <S.ButtonLink title={title} to={to as string}>
      {children}
    </S.ButtonLink>
  )
}

export default Button
