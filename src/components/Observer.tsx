import { Logo } from '@/components/ui/Logo';
import { CustomInput } from '@/components/common/Form/CustomInput';
import { CustomTextarea } from '@/components/common/Form/CustomTextarea';

export const Observer = () => {
	return (
		<div className='container py-5'>
			<Logo />
			<Logo theme='green' size='big' />

			<CustomInput label='Ваше ім’я' placeholder='Тетяна' />
			<CustomInput label='Ваш Номер телефону' placeholder='+3800967777323' />
			<CustomTextarea label='Ваш Коментар' placeholder='Напишіть щось' />
		</div>
	);
};
