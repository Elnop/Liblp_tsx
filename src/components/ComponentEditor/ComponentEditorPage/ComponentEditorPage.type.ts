import { Dispatch, MouseEvent, MouseEventHandler } from 'react';

type P_ComponentEditorPage = {
	setIsOpen: Dispatch<boolean>
	Component: (props: any) => JSX.Element | null
}

export type { P_ComponentEditorPage }