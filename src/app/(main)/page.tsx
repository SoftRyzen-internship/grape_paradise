import { Hero, History, Advantages, Contacts, Services } from '@/sections';
import { Observer } from '@/components/Observer';

export default function Home() {
	return (
		<main>
			<Hero />
			<History />
			<Services />
			<Advantages />
			<Contacts />

			<Observer />
		</main>
	);
}
