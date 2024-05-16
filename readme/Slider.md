### Component - Slider

<hr>

You need to write to use:
  'use client';
  import { SwiperSlide } from 'swiper/react';

<hr>

The application example - 
`<Slider prevEl='productsBtnBack' nextEl='productsBtnNext' loop={true} desktopSpaceBetween={40} btnConteinerStyle='top-[88px]'> </br>
				{products.map(item => ( <br>
					<SwiperSlide  <br>
						key={item._id} <br>
						className='swiper-slide slide-conteiner'<br>
					> <br>          
						<SlideCardGeneration <br>
							src={urlFor(item.imageGoods).url()} <br>
							alt={item.imageGoodsAlt} <br>
						/> <br>
					</SwiperSlide> <br>
				))} <br>
</Slider>		`

<hr>

| Prop | Required | Type | Description |
| --- | --- | --- | --- |
| `prevEl` | yes | "servicesBtnBack" or "productsBtnBack" or "reviewsBtnBack" | sets the css class for the prevEl button |
| `nextEl` | yes | "servicesBtnNext" or "productsBtnNext" or "reviewsBtnNext" | sets the css class for the nextEl button |
| `loop` | not | boolean | sets the slider type. By default loop = false |
| `desktopSpaceBetween` | not | number | sets the distance between slides on the desktop. By default desktopSpaceBetween = 174 |
| `children` | yes | ReactNode | list of slides |
| `btnConteinerStyle` | not | string | sets an additional css class for the button container |



