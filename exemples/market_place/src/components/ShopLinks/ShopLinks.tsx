import { FC } from "react"
import "./ShopLinks.sass"
import { IShopLinksProps } from "./ShopLinks.type"

function modifersToClassStr<TModifiers>(baseClass: string, modifiers: (TModifiers[] | undefined)): string {
	if (!modifiers)
		return baseClass
	let classList = baseClass
	for (const modifier of modifiers) {
		classList += " "+baseClass+"--"+modifier
	}
	return classList
}

const ShopLinks: FC<IShopLinksProps> = ({className, cards}) => {
	return (<section className={(className) ? "shop-links__container "+className : "shop-links__container"}>
		{
			cards?.map((card_data, key) => {
				return (
					<div key={key} className={modifersToClassStr("shop-links__card", card_data.modifiers)}>
						<img className="shop-links__card__img" src={card_data.img} alt="Can't display image" />
						<p className="shop-links__card__title">{card_data.name}</p>
					</div>
				)
			})
		}
	</section>)
}

export default ShopLinks