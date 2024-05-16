import { Section } from '@/components/common/Section';
import { Title } from '@/components/common/Title';
import { titleData } from '@/data';

export default function Page() {
	return (
		<Section sectionStyles='pt-[156px]'>
			<Title>{titleData.policy}</Title>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Est explicabo
				rerum a laborum voluptas? Culpa, aperiam nesciunt nam iste reprehenderit
				quae numquam. Eligendi vero magni culpa magnam unde inventore nemo ipsum
				quia! Id explicabo hic accusamus quis nihil aliquam nisi at ut autem
				magni quae consequuntur necessitatibus, praesentium eligendi error
				cumque saepe. Itaque quaerat ad incidunt illum, reiciendis dicta?
				Voluptas distinctio ipsam assumenda exercitationem fuga aut eaque
				ratione voluptatum, ex, dolorum similique magni repudiandae animi rerum
				molestiae labore officia dolor hic consequuntur. Ipsum quas alias, aut
				placeat atque tempora sapiente voluptates blanditiis, dolorum distinctio
				quidem ab, dicta odio itaque neque.
			</p>
		</Section>
	);
}
