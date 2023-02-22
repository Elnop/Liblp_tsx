import { ComponentEditorState } from "../types/ComplonentEditorState.type"
import { ElemOptionState } from "../types/elemState.type"

function elemAddClass(elem: Element, className: string) {
	elem.classList.add(className)
}
function elemRemoveClass(elem: Element, className: string) {
	elem.classList.remove(className)
}

function elemToggleClass(elem: Element, className: string, option: ElemOptionState) {
	if (elem.classList.contains(className) && !option.isActive)
		elemRemoveClass(elem, className)
	else if (option.isActive)
		elemAddClass(elem, className)
}

function editElem(elem: Element | null, option: ElemOptionState) {
	if (!elem)
		return
	option.do.forEach((actions) => {
		if (actions.$toggleClass)
			elemToggleClass(elem, actions.$toggleClass, option)
	})
}

function getElemsList(containerEl: Element | null, elemClass: string): Element[]
{
	if (!containerEl)
		return []
	return Array.from(containerEl.getElementsByClassName(elemClass))
	
}

function editElems(containerEl: Element | null, editorState: ComponentEditorState, options?: {checkIsUpdate: boolean}) {
	editorState.elements?.forEach((elemsStateList) => {
		let ELemsList: Element[] = []
		if (elemsStateList.className)
			ELemsList = getElemsList(containerEl, elemsStateList.className)
		elemsStateList.elements.forEach((elemData) => {
			elemData.options.forEach((elemOption) => {
				if(options && options.checkIsUpdate && elemOption.isUpdate)
					return
				editElem(elemData.elem, elemOption)
				editElem(ELemsList[elemData.key], elemOption)
				elemOption.isUpdate = true
			})
		})
	})
}

export { editElems }