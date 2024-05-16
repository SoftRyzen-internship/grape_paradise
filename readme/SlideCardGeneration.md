### Component - SlideCardGeneration

<hr>

The component is designed to create a product, service card, etc.

<hr>

The application example - 
`	<SlideCardGeneration <br>
		src={urlFor(item.imageGoods).url()} <br>
		alt={item.imageGoodsAlt} <br>
	/> <br>`

<hr>

| Prop | Required | Type | Description |
| --- | --- | --- | --- |
| `title` | yes | string | sets the title |
| `src` | yes | string | sets the src of image |
| `alt` | yes | string | sets the alt of image |
| `description` | not | string | sets the description a product, service, etc. |
| `children` | yes | ReactNode | list of slides |
| `slide` | yes | "service" or "product" | sets the css styles for card |

