
import { PropEditOperator } from '../types/operators.type';
import { toggleClass } from './$toggleClass';
import { PropsEditConfig } from 'components/ComponentEditor/types/propsConfig.type';

function updateProps(props: {[key: string]: any}, action: PropEditOperator)
{
	for (const [key, value] of Object.entries(action)) {
		if (key == "$toggleClass")
			toggleClass(props, value)
	}
}

function getComponentProps(currentProps: {[key: string]: any}, editOptionsState: PropsEditConfig[]): {[key: string]: any}
{
	let updatedProps = {...currentProps}
	editOptionsState.forEach((editOption) => {
		if (!editOption.isActive)
			return
		if (!Array.isArray(editOption.do))
			editOption.do = [editOption.do]
			editOption.do.forEach((action) => {
				updateProps(updatedProps, action)
			})
	})
	return updatedProps
}

export { getComponentProps }