import { P_ComponentEditorPage } from "./ComponentEditorPage.type"
import CrossButton from './CrossButton/CrossButton';
import { ComponentEditorMenu } from "./ComponentEditorMenu/ComponentEditorMenu";
import { ComponentEditorPreview } from "./ComponentEditorPreview/ComponentEditorPreview";
import "./ComponentEditorPage.sass"
import { MouseEvent, useRef } from "react";

const ComponentEditorPage = ({setIsOpen}: P_ComponentEditorPage) => {
	let pageRef = useRef<HTMLDivElement>(null)
	const onClickCloseHandler = (e: MouseEvent<HTMLButtonElement> & {target: HTMLButtonElement}) => {
		e.preventDefault()
		pageRef.current?.classList.add("component-editor__page--close")
		setTimeout(() => setIsOpen(false), 1000)
		document.body.style.overflow = 'auto'
	}
	return (
		<div ref={pageRef} className="component-editor__page">
			<nav className="component-editor__navbar">
				<CrossButton className="component-editor__close-btn" onClick={onClickCloseHandler}/>
			</nav>
			<ComponentEditorPreview/>
			<ComponentEditorMenu/>
		</div>
	)
}

export { ComponentEditorPage }