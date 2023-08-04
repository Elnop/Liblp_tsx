import "./App.sass";

import ShopLinks from "./components/ShopLinks/ShopLinks"
import { ShopLinksProps } from "./configs/ShopLinks.config";

const App = () => {
  return (<>
	<ShopLinks {...ShopLinksProps}/>
  </>)
}

export default App;