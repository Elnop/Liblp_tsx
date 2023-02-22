import { editElems } from "../../scripts/editElems"
import { ComponentEditorContext } from "../../ComponentEditorContext"
import { getComponentProps } from "../../scripts/getComponentProps"
import { useContext, useRef, useEffect } from 'react'
import "./ComponentEditorPreview.sass"

const ComponentEditorPreview = () => {
	let editorContext = useContext(ComponentEditorContext)
	let componentEditorRef = useRef(null)
	useEffect(() => {
		editElems(componentEditorRef.current, editorContext, {checkIsUpdate: false})
	})
	return (
		<div ref={componentEditorRef} className="component-editor__preview">
			<editorContext.Component {...getComponentProps(editorContext.componentProps, editorContext.props)}/>
		</div>
	)
}

export { ComponentEditorPreview }