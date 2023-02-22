import { ElemEditConfig } from './types/elemEditConfig.type';
import { PropsEditConfig } from './types/propsConfig.type';

type P_ComponentEditor = {
	Component: (props: any) => JSX.Element | null
	componentProps?: { [key: string]: any }
	propsEditConfig?: PropsEditConfig[]
	elemsEditConfig?: ElemEditConfig[]
}

export type { P_ComponentEditor }