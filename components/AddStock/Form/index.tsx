'use client';

import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

const Form = () => {
	const formSchema = z.object({
		name: z.string().min(2).max(50),
		description: z.string().min(2),
		code: z.string(),
		quantity: z.number(),
		price: z.number(),
		currencyId: z.number(),
	});

	return (
		<>
			<div></div>
		</>
	);
};

export default Form;
