"use client"

import { FC, useState } from 'react';

import { Section } from '@/components/common/Section';
import { HistoryFrame } from '@/components/common/HistoryFrame';
import { HistoryContent } from '@/components/common/HistoryContent';
import { HistoryVideo } from '@/components/common/HistoryVideo';

import { historyData } from '@/data';

export const History: FC = () => {
	const [modalOpen, setModalOpen] = useState(false);

	return (
		<Section
			id={historyData.id}
			sectionStyles='pt-[60px] pb-[30px] md:pt-20 md:pb-10 lg:pt-[142px] lg:pb-20'
			containerStyles='md:flex md:items-center md:justify-between'
		>
			<HistoryFrame onClick={() => setModalOpen(true)}/>
			<HistoryContent />
			<HistoryVideo onClose={() => setModalOpen(false)} show={modalOpen} />
		</Section>
	);
};
