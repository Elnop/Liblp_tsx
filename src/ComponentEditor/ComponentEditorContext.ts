import { createContext } from "react"
import { ComponentEditorState } from "./types/ComplonentEditorState.type"

const defaultValue: ComponentEditorState = {
	elem: null,
	previewContainerEl: null,
	props: [],
	elements: null
}

const ComponentEditorContext = createContext<ComponentEditorState>(defaultValue)

export { ComponentEditorContext }