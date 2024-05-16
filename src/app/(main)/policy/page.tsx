import { PortableText } from '@portabletext/react';
import { fetchPrivacyPolicy } from '@/sanity/request/fetchPrivacyPolicy';
import { Section } from '@/components/common/Section';
import { CustomComponents } from '@/components/common/CustomComponent';

export default async function Page() {
	const { privacyPolicyTitle, textPrivacyPolicy } = await fetchPrivacyPolicy();

	return (
		<Section sectionStyles='relative pt-[168px]'>
			<h1 className='mb-14 font-tenor text-h2 font-normal uppercase text-green md:text-center md:text-h1 lg:text-h2_desk'>
				{privacyPolicyTitle}
			</h1>
			<PortableText value={textPrivacyPolicy} components={CustomComponents} />
		</Section>
	);
}
