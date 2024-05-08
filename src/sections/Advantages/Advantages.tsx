import React from 'react';

import { AdvantagesCard } from '@/components/common/AdvantagesCard';

export interface AdvantagesProps {}

export const Advantages: React.FC<AdvantagesProps> = () => {
	return (
		<section>
			<AdvantagesCard />
		</section>
	);
};
