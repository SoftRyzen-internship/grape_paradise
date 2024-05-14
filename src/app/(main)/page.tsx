import { Hero, History, Advantages, Contacts } from '@/sections';
import { Observer } from '@/components/Observer';
import { Products } from '@/sections/Products/Products';

export default function Home() {
	return (
		<main>
			<Hero />
			<History />
			<Advantages />
			<Products />
			<Contacts />

			<Observer />
		</main>
	);
}
