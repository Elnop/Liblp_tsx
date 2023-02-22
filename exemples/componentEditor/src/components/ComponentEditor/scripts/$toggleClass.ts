function addClass(props: {[key: string]: any}, className: string)
{
	if (!props.className)
		props.className = className
	else
		props.className += " " + className
}

function removeClass(props: {[key: string]: any}, className: string)
{
	if (props.className && props.className.include(className))
		props.className = props.className.replace(className, " ")
}

function toggleClass(props: {[key: string]: any}, className: string)
{
	if(props.className && props.className.includes(className))
		removeClass(props, className)
	else
		addClass(props, className)
}

export { toggleClass }