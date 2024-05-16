<h1 align="center">GRAPE PARADISE</h1>

<p align="center">Our business covers the entire cycle — from site selection and variety selection to processing and crop storage. We also provide services for the production of processed products, such as juice, wine, and raisins.</p>

<p align="center">Additionally, we offer grape tourism with tasting elements. Our company successfully operates in the Kharkiv region, Ukraine, and abroad, meeting the needs of our clients.</p>

<h2 align="center">Components that the application consists of:</h2>

<h3 align="center">Header and Hero</h3>

<div align="center"><img src="/public/images/readme/header-hero.webp" alt="hero images" width="800" align="center"></div>

- #### component Logo

| Prop      | Type                 | Description                                                                                                   |
| --------- | -------------------- | --------------------------------------------------------------------------------------------------------------|
| `theme`   | `"white" or "green"` | Depending on the value, a company's logo of a certain size and color is rendered.                             |
| `size`    | `"small" or "big"`   | For example, for Footer: ```<Logo theme='green' size='big' />```. By default theme === "white" size="small".  |
<hr>

- #### component NavMenu

| Prop        | Type        | Description                                                          |
| ----------- | ----------- | ---------------------------------------------------------------------|
| `onClick`   | `() => void`| optional, add the function of closing the burger menu                |
| `className` | `string`    | optional, props for providing additional styles.                     |
<hr>

- #### component ButtonMain

**ButtonMain** - for Header & Burger menu & About Us section with name `Зв'язатись з нами`, for cards with name `Замовити` and for modal window with name `На головну`;

| Prop        | Type         | Description                                                                                |
| ----------- | ------------ | -------------------------------------------------------------------------------------------|
| `to`        | `string`     | anchor for react-scroll [name of the section]                                              |
| `chapter`   | `string`     | one of the value `'header' | 'about' | 'card'`, depending on where the button is located   |
| `className` | `string`     | the `string of styles` if it needed                                                        |
| `children`  | `ReactNode`  | name of the button                                                                         |
| `onClick`   | `() => void` | optional, function callback if it needed                                                   |
<hr>

- #### component ButtonLess

**ButtonLess** - for Contact form with name `Надіслати заявку` and for Slider's and Video player's buttons with svg arrows icons;

| Prop        | Type         | Description                                                                                                  |
| ----------- | ------------ | -------------------------------------------------------------------------------------------------------------|
| `type`      | `string`     | one of the value `'button' | 'submit'`, depending on what type of button                                     |
| `purpose`   | `string`     | one of the value `'form' | 'slider' | 'video' | 'burger' | 'modal'`, depending on where the button is used   |
| `disabled`  | `boolean`    | optional, accept the value `true` or `false` for button disabled state                                       |
| `aria`      | `string`     | optional, accept value of aria-label if it needed                                                            |
| `className` | `string`     | optional, the `string of styles` if it needed                                                                |
| `children`  | `ReactNode`  | optional, name of the button or svg icon                                                                     |
| `onClick`   | `() => void` | optional, unction callback if it needed                                                                      |
<hr>

- #### component BurgerMenu

| Prop      | Type        | Description                                                          |
| --------- | ----------- | ---------------------------------------------------------------------|
| `onClick` | `() => void`| required, add the function of closing the burger menu                |
<hr>

- #### component Hero

| Prop      | Type        | Description                                                                  |
| --------- | ----------- | -----------------------------------------------------------------------------|
|           |             | Include background image with a torn effect, main title and text-description.|
<hr>

<h3 align="center">Our History</h3>

<div align="center"><img src="/public/images/readme/history.webp" alt="hero images" width="800" align="center"></div>

- #### component Section

**Section** - reusable component for all sections on the project, include adaptive container

| Prop             | Type       | Description                                           |
| ---------------- | ---------- | ------------------------------------------------------|
| `id`             | `string`   | required, for anchor links [name of the section]      |
| `sectionStyles`  | `string`   | optional, string of styles for section if it needed   |
| `containerStyles`| `string`   | optional, string of styles for container if it needed |
| `children`       | `ReactNode`| required, components & JSX-markup                     |
| `render`         | `ReactNode`| optional, components & JSX-markup                     |
<hr>

- #### component HistoryFrame

| Prop      | Type          | Description                                                                            |
| --------- | ------------- | ---------------------------------------------------------------------------------------|
| `onClick` | `() => void`  | required, includes a photo frame and a Play button to open a modal window with a video |

Also include the use of components: [ButtonLess](#component-buttonless)
<hr>

- #### component HistoryContent

| Prop      | Type        | Description                                                                            |
| --------- | ----------- | ---------------------------------------------------------------------------------------|
|           |             | includes a title and a brief description of the services offered by the business       |
<hr>

- #### component HistoryVideo

| Prop      | Type        | Description                                                                                                                              |
| --------- | ----------- | -----------------------------------------------------------------------------------------------------------------------------------------|
| `onClick` | `() => void`| includes a modal window component in which the children transmits an iframe video with the history of the establishment of the business  |
<hr>

- #### component Modal

1) Create state for control showing modal `const [modalOpen, setModalOpen] = useState<boolean>(false);`
2) The application example - `<Modal>...</Modal>`

##### Importantly
- for control sizes for Modal - transfer sizes into your component
- to increase padding internal Modal - transfer your padding minus the default ones with your component:

| Screen | Top  | Right | Bottom | Left |
| ------ | ---- | ----- | ------ | ---- |
| `mob`  | 16px | 16px  | 32px   | 16px |
| `tab`  | 24px | 24px  | 32px   | 24px |
| `desk` | 24px | 24px  | 32px   | 24px |

| Prop          | Type        | Description                                                                                  |
| ------------- | ----------- | ---------------------------------------------------------------------------------------------|
| `show`        | `boolean`   | required, give created state `show={modalOpen}`                                              |
| `onClose`     | `() => void`| required, callback with false for your components state `onClose={() => setModalOpen(false)}`|
| `title`       | `string`    | optional, text for the Title Modal                                                           |
| `errorMessage`| `boolean`   | optional, for title text color                                                               |
| `children`    | `ReactNode` | required, your component for showing in Modal                                                |
<hr>















