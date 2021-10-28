
type Props = {
	name: string,
	className: string,
  onClick: () => void
}

export const Button = ({ name, onClick, className}: Props) => {
	return <button className={className} onClick={onClick}>{name}</button>
}
