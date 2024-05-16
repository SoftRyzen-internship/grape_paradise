import { Hero, History, Advantages, Contacts, Services } from '@/sections';
import { Observer } from '@/components/Observer';
import { Products } from '@/sections/Products';

export default function Home() {
	return (
		<main>
			<Hero />
			<History />
			<Services />
			<Advantages />
			<Products />
			<Contacts />

			<Observer />
		</main>
	);
}
