import { ElemOptionConfig } from "./elemEditConfig.type"

type ElemOptionState =
	ElemOptionConfig & {isActive?: boolean, isUpdate?: boolean}

type ElemState = {
	key: number
	elem: Element
	options: ElemOptionState[]
}

type ElemListState = {
	name: string
	className?: string
	id?: string
	elements: ElemState[]
	options: ElemOptionState[]
}

export type { ElemListState, ElemState, ElemOptionState}