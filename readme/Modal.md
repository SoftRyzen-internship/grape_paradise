### Component - Modal

- Create state for control showing modal `const [modalOpen, setModalOpen] = useState<boolean>(false);`

- The application example - `<Modal>...</Modal>`

#### The obligated custom props

- show: boolean - give created state `show={modalOpen}`;
- onClose: () => void; - callback with false for your components state `onClose={() => setModalOpen(false)}`
- children: ReactNode - your component for showing in Modal

#### The custom props are optional

title?: string - text for the Title Modal

### Importantly

- for control sizes for Modal - transfer sizes into your component
- to increase padding internal Modal - transfer your padding minus the default ones with your component:
  - mob: 16px, 16px, 32px, 16px
  - tab: 24px, 24px, 32px, 24px
  - desk: 24px, 24px, 32px, 24px
