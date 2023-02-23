import { P_ComponentEditorPage } from "./ComponentEditorPage.type"
import CrossButton from './CrossButton/CrossButton';
import { ComponentEditorMenu } from "./ComponentEditorMenu/ComponentEditorMenu";
import { ComponentEditorPreview } from "./ComponentEditorPreview/ComponentEditorPreview";
import "./ComponentEditorPage.sass"

const ComponentEditorPage = ({onClickCloseHandler}: P_ComponentEditorPage) => {
	return (
		<div className="component-editor__page">
			<nav className="component-editor__navbar">
				<CrossButton className="component-editor__close-btn" onClick={onClickCloseHandler}/>
			</nav>
			<ComponentEditorPreview/>
			<ComponentEditorMenu/>
		</div>
	)
}

export { ComponentEditorPage }