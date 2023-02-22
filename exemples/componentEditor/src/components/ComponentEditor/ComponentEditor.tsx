import "./ComponentEditor.sass"
import { FC, MouseEventHandler, useEffect, useRef, useState, useContext } from 'react';
import BurgerButton from './BurgerButton/BurgerButton';
import { P_ComponentEditor } from './ComponentEditor.type'
import { getComponentProps } from "./scripts/getComponentProps";
import { ComponentEditorContext } from "./ComponentEditorContext";
import { getElemsState } from "./scripts/getElemsState";
import { editElems } from "./scripts/editElems";
import { ElemListState } from "./types/elemState.type";
import { ComponentEditorState } from "./types/ComplonentEditorState.type";
import { ComponentEditorPage } from "./ComponentEditorPage/ComponentEditorPage";

const ComponentEditor: FC<P_ComponentEditor> = ({ Component, componentProps, propsEditConfig, elemsEditConfig}) => {
	if (!Component)
		return (<></>)
	if (!componentProps)
		componentProps = {}
	const [isOpen, setIsOpen] = useState(false)
	const componentEditorRenderRef = useRef<HTMLDivElement>(null)
	if (!propsEditConfig)
		propsEditConfig = []
	const [propsStates, setPropsStates] = useState(propsEditConfig)
	const [elemsStates, setElemsStates] = useState<ElemListState[] | null>(null)
	let contextValue: ComponentEditorState = {
		Component,
		componentProps,
		props: propsStates,
		setProps: setPropsStates,
		elements: elemsStates,
		setElements: setElemsStates
	}
	const onClickOpenHandler: MouseEventHandler= (e) => {
		e.preventDefault()
		setIsOpen(true)
		document.body.style.overflow = 'hidden'
	}
	const onClickCloseHandler: MouseEventHandler= (e) => {
		e.preventDefault()
		setIsOpen(false)
		document.body.style.overflow = 'auto'
	}
	useEffect(() => {
		if (contextValue.elements) {
			editElems(componentEditorRenderRef.current, contextValue)
			return
		}
		if (!elemsEditConfig)
			elemsEditConfig = []
		contextValue.elements = getElemsState(elemsEditConfig, componentEditorRenderRef.current)
		setElemsStates([...contextValue.elements])
	})
	return (
		<ComponentEditorContext.Provider value={contextValue}>
			<div className="component-editor">
				<div className="component-editor_render" ref={componentEditorRenderRef}>
					<Component {...getComponentProps(componentProps, propsStates)}/>
				</div>
				<BurgerButton className="component-editor__open-btn" onClick={onClickOpenHandler}/>
				{
					(isOpen) ? (
						<ComponentEditorPage onClickCloseHandler={onClickCloseHandler} Component={Component}/>
					) : (<></>)
				}
			</div>
		</ComponentEditorContext.Provider>
	)
}

export { ComponentEditor }