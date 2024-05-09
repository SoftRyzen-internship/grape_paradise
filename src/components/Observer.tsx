import { CustomInput } from './common/Form/CustomInput';
import { CustomTextarea } from './common/Form/CustomTextarea';

export const Observer = () => {
	return (
		<div className='container py-5'>
			<CustomInput label='Test' />
			<CustomInput label='Number' />
			<CustomTextarea label='Textarea' />
		</div>
	);
};
