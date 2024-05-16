import { Hero, History, Advantages, Contacts } from '@/sections';
import { Observer } from '@/components/Observer';

export default function Home() {
	return (
		<>
			<Hero />
			<History />
			<Advantages />
			<Contacts />

			<Observer />
		</>
	);
}
