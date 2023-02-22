import { PropEditOperator } from './operators.type';

type PropsEditConfig = {
	name: string
	do: PropEditOperator | PropEditOperator[]
	isActive?: boolean
}

export type { PropsEditConfig }