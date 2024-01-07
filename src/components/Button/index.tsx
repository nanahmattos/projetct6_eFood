import * as S from './styles'
type Props = {
  type: 'button' | 'link'
  title: string
  to?: string
  onClick?: () => void
  children: JSX.Element
}
const Button = ({ type, title, to, onClick, children }: Props) => {
  if (type === 'button') {
    return (
      <S.Button type="button" title={title} onClick={onClick}>
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
