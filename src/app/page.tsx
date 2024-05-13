import { Advantages } from '@/sections';
import { Observer } from '@/components/Observer';
import { MovingLine } from '@/components/ui/MovingLine';

export default function Home() {
	return (
		<main>
			<Advantages />
			<MovingLine/>
			<Observer />
		</main>
	);
}
