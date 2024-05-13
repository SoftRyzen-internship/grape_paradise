import { Advantages } from '@/sections';
import { Contacts } from '@/sections';
import { Observer } from '@/components/Observer';


export default function Home() {
	return (
		<main>
			<Advantages />
			<Observer />
			<Contacts/>
		</main>
	);
}
