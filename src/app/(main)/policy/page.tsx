import { PortableText } from '@portabletext/react';
import { fetchPrivacyPolicy } from '@/sanity/request/fetchPrivacyPolicy';

import { Section } from '@/components/common/Section';
import { CustomComponents } from '@/components/common/CustomComponent';

export default async function Page() {
	const { privacyPolicyTitle, textPrivacyPolicy } = await fetchPrivacyPolicy();

	return (
		<Section
			sectionStyles='relative pt-[168px] pb-20 md:pb-[108px] lg:pt-[184px] lg:pb-[120px]'
			containerStyles='lg:px-[136px] md:px-[70px]'
		>
			<h1 className='mb-14 font-tenor text-h2 font-normal uppercase text-green md:text-center md:text-h1 lg:text-h2_desk'>
				{privacyPolicyTitle}
			</h1>
			<PortableText value={textPrivacyPolicy} components={CustomComponents} />
		</Section>
	);
}
