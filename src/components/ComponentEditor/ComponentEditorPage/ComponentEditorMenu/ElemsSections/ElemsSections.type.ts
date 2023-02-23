import { ElemOptionState } from 'components/ComponentEditor/types/elemState.type';
import { MouseEvent } from 'react';

type P_ElemSection = {
	name: string,
	options: ElemOptionState[],
	onClick: (e: MouseEvent<HTMLButtonElement> & {target: HTMLButtonElement}) => void
}

export type { P_ElemSection }