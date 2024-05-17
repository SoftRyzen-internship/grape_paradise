### Component - SlideCardReview

- The SlideCardReviews component is designed to display a review card with the review text. If the text overflows the designated area, a "Read More" button appears. When clicked, this button opens a modal displaying the full review text.

#### Features
- Displays a review card with text.
- Shows a "Read More" button if the text overflows.
- Opens a modal with the full review text when "Read More" is clicked.

#### Modal

- Create state for control showing modal `const [modalOpen, setModalOpen] = useState<boolean>(false);`

- The application example - `<Modal>...</Modal>`

| Prop | Required | Type | Description |
| --- | --- | --- | --- |
| `show` | yes | boolean | - give created state `show={modalOpen}` |
| `onClose` | yes | `() => void` | callback with false for your components state `onClose={() => setModalOpen(false)}` |
| `title` | not | string | text for the Title Modal |
| `errorMessage` | not | boolean | for title text color |
| `children` | yes | ReactNode | your component for showing in Modal |