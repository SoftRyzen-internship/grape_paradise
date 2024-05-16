import {
	Hero,
	History,
	Advantages,
	Contacts,
	Services,
	Products,
	Reviews,
} from '@/sections';

import { Observer } from '@/components/Observer';

export default function Home() {
	return (
		<main>
			<Hero />
			<History />
			<Services />
			<Advantages />

			<Products />
			<Observer />
			<Reviews />
			<Contacts />
		</main>
	);
}
