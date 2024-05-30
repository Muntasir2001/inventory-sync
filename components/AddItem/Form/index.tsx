'use client';

import { useSession } from 'next-auth/react';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

import { useAppDispatch } from '@/redux/store';
import { addItem } from '@/redux/items/itemsSlice';
import { Button } from '@/components/ui/button';
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const AddItemForm = () => {
	const dispatch = useAppDispatch();
	const { data: session } = useSession();

	const formSchema = z.object({
		name: z.string().max(50),
		code: z.string(),
		quantity: z.coerce.number(),
		price: z.coerce.number(),
		description: z.optional(z.string()),
	});

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: '',
			code: '',
			quantity: 0,
			price: 0,
			description: '',
		},
	});

	const onSubmit = async (values: z.infer<typeof formSchema>) => {
		const toastId = toast.loading('Adding item...', {
			style: {
				textAlign: 'center',
			},
		});

		const res = await dispatch(
			addItem({
				...values,
				userId: parseInt(session!.user.id),
				currencyId: 1,
			}),
		);

		if (res.type.includes('success') || res.type.includes('fulfilled')) {
			toast.success('Item added successfully!', {
				id: toastId,
				duration: 5000,
			});
		} else {
			toast.error('Something went wrong!', {
				id: toastId,
				duration: 10000,
			});
		}
	};

	return (
		<>
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className='flex flex-col gap-4 my-8'
				>
					<FormField
						control={form.control}
						name='name'
						render={({ field }) => (
							<FormItem>
								<FormLabel className='text-black font-bold'>
									Name
								</FormLabel>
								<FormControl>
									<Input
										className='border-black text-black'
										placeholder='Name of the item'
										{...field}
										required
									/>
								</FormControl>
								<FormMessage className='text-red' />
							</FormItem>
						)}
					/>

					<FormField
						control={form.control}
						name='code'
						render={({ field }) => (
							<FormItem>
								<FormLabel className='text-black font-bold'>
									Code
								</FormLabel>
								<FormControl>
									<Input
										className='border-black text-black'
										placeholder='Item code'
										{...field}
										type='text'
										required
									/>
								</FormControl>
								<FormMessage className='text-red' />
							</FormItem>
						)}
					/>

					<FormField
						control={form.control}
						name='quantity'
						render={({ field }) => (
							<FormItem>
								<FormLabel className='text-black font-bold'>
									Quantity
								</FormLabel>
								<FormControl>
									<Input
										className='border-black text-black'
										placeholder='Quantity of the item'
										{...field}
										type='number'
										required
									/>
								</FormControl>
								<FormMessage className='text-red' />
							</FormItem>
						)}
					/>

					<FormField
						control={form.control}
						name='price'
						render={({ field }) => (
							<FormItem>
								<FormLabel className='text-black font-bold'>
									Price
								</FormLabel>
								<FormControl>
									<Input
										className='border-black text-black'
										placeholder='Price of each item'
										{...field}
										type='number'
										required
									/>
								</FormControl>
								<FormMessage className='text-red' />
							</FormItem>
						)}
					/>

					<FormField
						control={form.control}
						name='description'
						render={({ field }) => (
							<FormItem>
								<FormLabel className='text-black font-bold'>
									Description
								</FormLabel>
								<FormControl>
									<Textarea
										className='border-black text-black'
										placeholder='Description...'
										{...field}
									/>
								</FormControl>
								<FormMessage className='text-red' />
							</FormItem>
						)}
					/>

					<Button className='bg-secondary mt-5' type='submit'>
						Add Item
					</Button>
				</form>
			</Form>
		</>
	);
};

export default AddItemForm;
