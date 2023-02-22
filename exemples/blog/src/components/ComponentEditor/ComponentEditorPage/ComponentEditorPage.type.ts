import { MouseEventHandler } from 'react';

type P_ComponentEditorPage = {
	onClickCloseHandler: MouseEventHandler
	Component: (props: any) => JSX.Element | null
}

export type { P_ComponentEditorPage }