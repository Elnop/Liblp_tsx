import "./App.sass";

import ShopLinks from "./components/ShopLinks/ShopLinks"
import {ComponentEditor} from "./components/ComponentEditor/ComponentEditor";

import img1 from "./assets/images/card1.jpg";
import img2 from "./assets/images/card2.jpg";
import img3 from "./assets/images/card3.jpg";
import img4 from "./assets/images/card4.jpg";
import { PropsEditConfig } from "components/ComponentEditor/types/propsConfig.type";
import { ElemEditConfig } from "components/ComponentEditor/types/elemEditConfig.type";

const cards = [
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

const shopLinksEditorProps: PropsEditConfig[] = [
	{
		name: "Spaced",
		do: {
			$toggleClass: "shop-links-container--spaced"
		}
	}
]

const shopLinksEditorChildrens: ElemEditConfig[] = [
	{
		name: "Card",
		className: "shop-link",
		options: [
			{
				name: "hover-grow",
				do: [{
					$toggleClass: "shop-link--hover-grow"
				}]
			},
			{
				name: "big",
				do: [{
					$toggleClass: "shop-link--big"
				}]
			}
		]
	}
]
const App = () => {
  return (<>
	<ComponentEditor Component={ShopLinks} componentProps={{cards}} propsEditConfig={shopLinksEditorProps} elemsEditConfig={shopLinksEditorChildrens}/>
  </>)
}

export default App;