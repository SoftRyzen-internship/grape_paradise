import { Hero, History, Advantages, Contacts, Services, Products } from '@/sections';
import { Observer } from '@/components/Observer';

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
