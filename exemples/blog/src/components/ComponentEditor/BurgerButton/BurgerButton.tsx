import { MouseEventHandler, StyleHTMLAttributes } from 'react';
import './BurgerButton.sass'

interface P {
	className?: string
	onClick?: MouseEventHandler
	style?: React.CSSProperties
}

const BurgerButton = ({className, style, onClick}: P) => {
	return (
		<div className={`burger-btn ${className ? className : ""}`} style={style} onClick={onClick}>
			<div className="burger-btn__top-bar"></div>
			<div className="burger-btn__middle-bar"></div>
			<div className="burger-btn__bottom-bar"></div>
		</div>
	)
}

export default BurgerButton