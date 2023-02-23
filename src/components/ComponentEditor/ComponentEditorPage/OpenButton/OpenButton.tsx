import { FC, MouseEventHandler } from 'react';
import './BurgerButton.sass'

interface P {
	className?: string
	onClick?: MouseEventHandler
	style?: React.CSSProperties
}

const OpenButton: FC<P> = ({className, style, onClick}) => {
	return (
		<div className={`open-btn ${className ? className : ""}`} style={style} onClick={onClick}>
			<div className="open-btn__top-bar"></div>
			<div className="open-btn__middle-bar"></div>
			<div className="open-btn__bottom-bar"></div>
		</div>
	)
}

export default OpenButton