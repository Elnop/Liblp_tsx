import { ElemEditConfig } from 'components/ComponentEditor/types/elemEditConfig.type';
import { ElemListState } from '../types/elemState.type';

function getElemsState(elemEditConfig: ElemEditConfig[], componentEditorElem?: Element | null): ElemListState[] {
	return elemEditConfig.map((elemConfig) => {
		if (elemConfig.className && componentEditorElem)
		{
			let elements = Array.from(componentEditorElem.getElementsByClassName(elemConfig.className))
				.map((elem, key) => {
					return {
						elem,
						key,
						options: elemConfig.options.map((option) => {return {...option, isUpdate: true}})
					}
				})
			return {
				elements,
				...elemConfig
			}
		}
		return {elements: [], ...elemConfig}
	})
}

export { getElemsState }