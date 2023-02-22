import { MouseEventHandler } from 'react';
import './CrossButton.sass'

interface P {
	className?: string
	onClick?: MouseEventHandler
	style?: React.CSSProperties
}

const CrossButton = ({className, style, onClick}: P) => {
	return (
		<div className={`cross-btn ${className ? className : ""}`} style={style} onClick={onClick}>
			<div className="cross-btn__top-bar"></div>
			<div className="cross-btn__bottom-bar"></div>
		</div>
	)
}

export default CrossButton