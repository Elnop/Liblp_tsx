import { IShopLinksProps } from "components/ShopLinks/ShopLinks.type";
import img1 from "../assets/images/card1.jpg";
import img2 from "../assets/images/card2.jpg";
import img3 from "../assets/images/card3.jpg";
import img4 from "../assets/images/card4.jpg";

const ShopLinksProps: IShopLinksProps = {
	cards: [
		{
			name: "NEW ARRIVALS",
			img: img1,
			modifiers: ["big"]
		},
		{
			name: "MOST POPULARS",
			img: img2,
			modifiers: ["hover-grow"]
		},
		{
			name: "SHOP MEN",
			img: img4,
			modifiers: ["hover-grow"]
		},
		{
			name: "SHOP WOMEN",
			img: img3,
			modifiers: ["hover-grow"]
		},
	]
};

export { ShopLinksProps }