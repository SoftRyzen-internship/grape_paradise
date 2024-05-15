### Component - SlideCardGeneration

- Create state for control showing modal `const [modalOpen, setModalOpen] = useState<boolean>(false);`

- The application example - `<Modal>...</Modal>`

#### Importantly

- for control sizes for Modal - transfer sizes into your component
- to increase padding internal Modal - transfer your padding minus the default ones with your component:

| Screen | Top  | Right | Bottom | Left |
| ------ | ---- | ----- | ------ | ---- |
| `mob`  | 16px | 16px  | 32px   | 16px |
| `tab`  | 24px | 24px  | 32px   | 24px |
| `desk` | 24px | 24px  | 32px   | 24px |

| Prop | Required | Type | Description |
| --- | --- | --- | --- |
| `show` | yes | boolean | - give created state `show={modalOpen}` |
| `onClose` | yes | `() => void` | callback with false for your components state `onClose={() => setModalOpen(false)}` |
| `title` | not | string | text for the Title Modal |
| `errorMessage` | not | boolean | for title text color |
| `children` | yes | ReactNode | your component for showing in Modal |