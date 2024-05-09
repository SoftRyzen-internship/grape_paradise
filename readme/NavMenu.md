### The NavMenu component includes the following items: 

 * Про нас 
 * Послуги 
 * Товари 
 * Контакти 

Menu items contain an anchor to their respective section (clicking smoothly scrolls to the corresponding section) and a hover effect (underlining). 
For the mobile version, when clicking on a menu item, the burger menu closes first, and then a smooth scroll to the corresponding section occurs.

The component takes an optional onClick prop, which contains a function to close the burger for the mobile version.

```
onClick?: () => void;
```