import { IFormState } from '@/types';

const CHAT_ID = process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID;
const API = process.env.NEXT_PUBLIC_TELEGRAM_API;

const baseUrl: string = `https://api.telegram.org/bot${API}/`;

enum TitleFold {
	name = 'ІМ`Я',
	phone = 'НОМЕР',
	message = 'ПОВІДОМЛЕННЯ',
}

export const sendMessage = async (data: IFormState): Promise<void> => {
	let message = '';
	for (const [key, value] of Object.entries(data)) {
		if (!value || typeof value !== 'string') {
			continue;
		}
		message += `${TitleFold[key as keyof typeof TitleFold]}: ${value.trim()};%0A`;
	}

	const url: string = `${baseUrl}sendMessage?chat_id=${CHAT_ID}&text=${message}`;

	const res: Response = await fetch(url);

	if (!res.ok) {
		throw new Error('Щось пішло не так...');
	}
};
