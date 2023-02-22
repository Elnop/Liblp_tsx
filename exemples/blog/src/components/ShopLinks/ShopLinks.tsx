import { FC } from "react"
import "./ShopLinks.sass"

interface ICardData {
	name: string
	img: any
	className: string
}

interface IShopLinksProps {
	className: string
	cards?: ICardData[]
}

const ShopLinks: FC<IShopLinksProps> = ({className, cards}) => {
	return (<section className={(className) ? "shop-links-container "+className : "shop-links-container"}>
		{
			cards?.map((card_data, key) => {
				return (
					<div key={key} className={(card_data.className) ? "shop-link "+card_data.className : "shop-link shop-link"}>
						<img className="shop-link__img" src={card_data.img} alt="Can't display image" />
						<p className="shop-link__title">{card_data.name}</p>
					</div>
				)
			})
		}
	</section>)
}

export default ShopLinks