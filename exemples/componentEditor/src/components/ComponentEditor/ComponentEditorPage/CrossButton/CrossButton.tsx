import { MouseEvent, MouseEventHandler } from 'react';
import './CrossButton.sass'

interface P {
	className?: string
	onClick?: (e: MouseEvent<HTMLButtonElement> & {target: HTMLButtonElement}) => void
	style?: React.CSSProperties
}

const CrossButton = ({className, style, onClick}: P) => {
	return (
		<button className={`cross-btn ${className ? className : ""}`} style={style} onClick={onClick}>
			<div className="cross-btn__top-bar"></div>
			<div className="cross-btn__bottom-bar"></div>
		</button>
	)
}

export default CrossButton