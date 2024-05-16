import { Hero, History, Advantages, Contacts, Services, Reviews } from '@/sections';
import { Observer } from '@/components/Observer';

export default function Home() {
	return (
		<main>
			<Hero />
			<History />
			<Services />
			<Advantages />

			<Observer />

			<Reviews/>
			<Contacts />

			
		</main>
	);
}
