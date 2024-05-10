import { Logo } from './ui/Logo';
import { NavMenu } from './ui/NavMenu';
import { ProdudtCard } from './ui/ProductCard.tsx/ProdactCard';
import { ServicesCard } from './ui/ServicesCard/ServicesCard';

export const Observer = () => {
	return (
		<div>
			<Logo />
			<Logo theme='green' size='big' />
			<NavMenu />
			<ServicesCard index={0} />
			<ProdudtCard index={0} />
		</div>
	);
};
