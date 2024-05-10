### The BurgerMenu component includes logo, close button, menu and button "Зв'язатись з нами".

Menu includes the following items: 

 * Про нас 
 * Послуги 
 * Товари 
 * Контакти 


BurgerMenu opens to the full width of the device.

Menu items contain an anchor to their respective section (when clicking on a menu item, the burger menu closes first, and then there is a smooth scroll to the corresponding section). 
Clicking on button "Зв'язатись з нами" initiates a smooth scroll to the section with the contact information and form

The component takes a required onClick prop, which contains a function to close the BurgerMenu.

```
onClick?: () => void;
```