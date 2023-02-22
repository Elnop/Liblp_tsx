import { ElemListState } from "./elemState.type"
import { PropsEditConfig } from "./propsConfig.type"

type ComponentEditorState = {
	Component: (props: any) => JSX.Element | null
	componentProps: { [key: string]: any }
	props: PropsEditConfig[]
	setProps?: React.Dispatch<React.SetStateAction<PropsEditConfig[]>>
	elements: ElemListState[] | null
	setElements?: React.Dispatch<React.SetStateAction<ElemListState[] | null>>
}

export type { ComponentEditorState }