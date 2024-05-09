import { Logo } from './ui/Logo';
import { NavMenu } from './ui/NavMenu';

export const Observer = () => {
	return (
		<div>
			<Logo />
			<Logo theme='green' size='big' />
			<NavMenu />
		</div>
	);
};