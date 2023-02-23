import { useContext, useState, MouseEventHandler, MouseEvent, FC } from 'react';
import { P_ElemSection } from './ElemsSections.type';
import { ComponentEditorContext } from '../../../ComponentEditorContext';

const ElemSection: FC<P_ElemSection> = ({name, options, onClick}) => {
	const [isOpen, setIsOpen] = useState(true)
	const onClickTitleHandler: MouseEventHandler = (e: MouseEvent<HTMLTitleElement> & {target: HTMLTitleElement}) => {
		e.preventDefault()
		setIsOpen(!isOpen)
	}
	return (<section className={(!isOpen) ? "component-editor__menu-section component-editor__menu-section--deployed" : "component-editor__menu-section" }>
		<h2 onClick={onClickTitleHandler}>{name}</h2>
		<div className="component-editor__menu-btns-container">
		{
			options.map((childEditOption, index) => {
				return (<button
					className = { childEditOption.isActive ? "component-editor__modifier-btn component-editor__modifier-btn--active" : "component-editor__modifier-btn" }
					onClick={onClick} name={name} value={childEditOption.name} key={index}>
					{childEditOption.name}
				</button>)
			})
		}
		</div>
	</section>)
}

const ElemsSections = () => {
	const editorState = useContext(ComponentEditorContext)
	if (!editorState?.elements?.length)
		return (<></>)
	const buttonOnClickHandler = (e: MouseEvent<HTMLButtonElement> & {target: HTMLButtonElement & { name: string, value: string }}) => {
		e.preventDefault()
		if (!editorState.elements)
			return
		for (const childrensState of editorState.elements) {
			if (e.target.name.startsWith(childrensState.name))
				for (const elem of childrensState.elements) {
					if (e.target.name.split("#")[1] == (elem.key + 1).toString())
						for (const option of elem.options) {
							if (option.name == e.target.value)
							{
								option.isActive = !option.isActive
								option.isUpdate = false
								if (editorState.setElements)
									editorState.setElements([...editorState.elements])
							}
						}
				}
		}
	}
	return (
	<>
	{
		editorState.elements.map((childrensStates, nameKey) => { 
			{
				return childrensStates.elements.map((elemData, index) =>
					<ElemSection name={childrensStates.name + " #" + (index + 1)} key={nameKey * 10 + index} options={elemData.options} onClick={buttonOnClickHandler}/>
				)
			}
		})
	}
	</>
	)
}

export { ElemsSections }