import { ElemEditOperator } from "./operators.type"

type ElemOptionConfig = {
	name: string
	do: ElemEditOperator[]
}

type ElemEditConfig = {
	name: string
	className?: string
	id?: string
	options: ElemOptionConfig[]
}

export type { ElemEditConfig, ElemOptionConfig }