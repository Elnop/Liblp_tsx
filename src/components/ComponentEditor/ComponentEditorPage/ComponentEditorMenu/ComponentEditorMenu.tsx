import { ElemsSections } from "./ElemsSections/ElemsSections"
import { PropsSection } from "./PropsSection/PropsSection"
import "./ComponentEditorMenu.sass"

const ComponentEditorMenu = () => {
	return (
		<div className="component-editor__menu">
			<PropsSection/>
			<ElemsSections />
		</div>
	)
}

export { ComponentEditorMenu }