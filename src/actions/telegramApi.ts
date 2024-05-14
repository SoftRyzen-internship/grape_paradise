import { IFormState } from '@/components/common/Form/FormBlock/FormBlock.types';

const CHAT_ID = process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID;
const API = process.env.NEXT_PUBLIC_TELEGRAM_API;

const baseUrl: string = `https://api.telegram.org/bot${API}/`;

export const sendMessage = async (data: IFormState): Promise<void> => {
	let message = '';
	for (const [key, value] of Object.entries(data)) {
		if (!value || typeof value !== 'string') {
			continue;
		}
		message += `${key.toUpperCase()}: ${value.trim()}; `;
	}

	const url: string = `${baseUrl}sendMessage?chat_id=${CHAT_ID}&text=${message}`;

	const res: Response = await fetch(url);

	if (!res.ok) {
		throw new Error('Щось пішло не так...');
	}
};
