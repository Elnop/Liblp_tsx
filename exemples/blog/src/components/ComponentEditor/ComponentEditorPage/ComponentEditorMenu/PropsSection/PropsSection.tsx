import { ComponentEditorContext } from "../../../ComponentEditorContext"
import { MouseEvent, MouseEventHandler, useContext, useState } from 'react';

const PropsSection = () => {
	const editorState = useContext(ComponentEditorContext)
	if (!editorState || !editorState.props.length)
		return (<></>)
	const [isOpen, setIsOpen] = useState(true)
	const onClickTitleHandler: MouseEventHandler = (e) => {
		e.preventDefault()
		setIsOpen(!isOpen)
	}
	const buttonOnClickHandler = (e: MouseEvent<HTMLButtonElement> & {target: HTMLButtonElement}) => {
		e.preventDefault()
		let option = editorState.props.filter((propsConfig) => propsConfig.name == e.target.name)[0]
		option.isActive = !option.isActive
		if (editorState.setProps)
			editorState.setProps([...editorState.props])
	}
	return (
	<section className="component-editor__menu-section">
		<h2 onClick={onClickTitleHandler}>Modifiers</h2>
		<div className="component-editor__menu-btns-container" style={(!isOpen) ? {height: 0, padding: 0} : {}}>
		{
			editorState.props.map((propOption, index) => {
				return (
				<button
					className = { propOption.isActive ? "component-editor__modifier-btn component-editor__modifier-btn--active" : "component-editor__modifier-btn" }
					key = { index }
					onClick={buttonOnClickHandler} name={propOption.name}>
				{propOption.name}
				</button>)
			})
		}
		</div>
	</section>
	)
}

export { PropsSection }