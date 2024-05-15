### There are two button's components for all buttons of the project:

- ButtonMain --- for Header & Burger menu & About Us section with name `Зв'язатись з нами`, for cards with name `Замовити` and for modal window with name `На головну`;
- ButtonLess --- for Contact form with name `Надіслати заявку` and for Slider's and Video player's buttons with svg arrows icons;

---

#### ButtonMain component accept 5 props:

- to - string -- anchor for react-scroll [name of the section]
- chapter - string -- one of the value `'header' | 'about' | 'card' | 'modal'`, depending on where the button is located
- className - string -- the `string of styles` if it needed
- children -- name of the button
- onClick -- function callback if it needed

## The button is styled depending on the passed props!

<table>
	<tr>
		<th>props</th>
        <th>type</th>
		<th>required</th>
		<th>value</th>
		<th>data</th>
		<th>description</th>
	</tr>
	<tr>
		<td>id</td>
		<td>string</td>
		<td>no</td>
        <td>string</td>
		<td>json</td>
		<td>for anchor links [name of the section]</td>
	</tr>
    <tr>
		<td>sectionStyles</td>
		<td>string</td>
		<td>no</td>
        <td>string</td>
		<td>-</td>
		<td>string of styles for section if it needed</td>
	</tr>
    <tr>
		<td>containerStyles</td>
		<td>string</td>
		<td>no</td>
        <td>string</td>
		<td>-</td>
		<td>string of styles for container if it needed</td>
	</tr>
    <tr>
		<td>children</td>
		<td>React.Node</td>
		<td>yes</td>
        <td>components</td>
		<td>json</td>
		<td>components & JSX-markup</td>
	</tr>
</table>

#### ButtonLess component accept 7 props:

- type - string -- one of the value `'button' | 'submit'`, depending on what type of button
- purpose - string -- one of the value `'form' | 'slider' | 'video' | 'burger'`, depending on where the button is used
- disabled - boolean -- accept the value `true` or `false` for button disabled state
- aria - string -- accept value of aria-label if it needed
- className - string -- the `string of styles` if it needed
- children -- name of the button or svg icon
- onClick -- function callback if it needed

The button is styled depending on the passed props!
