### There are two button's components for all buttons of the project:

- ButtonMain --- for Header & Burger menu & About Us section with name `Зв'язатись з нами` and for cards with name `Замовити`;
- ButtonLess --- for Contact form with name `Надіслати заявку` and for Slider's and Video player's buttons with svg arrows icons;

---

#### ButtonMain component accept 5 props:

- to - string -- anchor for react-scroll [name of the section]
- chapter - string -- one of the value `'header' | 'about' | 'card'`, depending on where the button is located
- styles - string -- the `string of styles` if it needed
- children -- name of the button
- onClick -- function if it needed

The button is styled depending on the passed props!

#### ButtonLess component accept 5 props:

- type - string -- one of the value `'button' | 'submit'`, depending on what type of button
- purpose - string -- one of the value `'form' | 'slider' | 'video'`, depending on where the button is used
- disabled - boolean -- accept the value `true` or `false` for button disabled state
- styles - string -- the `string of styles` if it needed
- children -- name of the button or svg icon

The button is styled depending on the passed props!
