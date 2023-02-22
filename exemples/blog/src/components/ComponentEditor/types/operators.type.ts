type PropEditOperator =
	{$toggleClass: string}
	//| {propName: string, $set: any}
	//| {propName: string, $togglePush: any}
	
type ElemEditOperator = {
	$toggleClass: string
}

export type {PropEditOperator, ElemEditOperator}