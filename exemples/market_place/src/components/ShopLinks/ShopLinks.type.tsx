type TShopLinksModifers = "big" | "hover-grow"

interface ICardData {
	name: string
	img: any
	modifiers: TShopLinksModifers[]
}

interface IShopLinksProps {
	className?: string
	cards?: ICardData[]
}

export type { TShopLinksModifers, ICardData, IShopLinksProps }