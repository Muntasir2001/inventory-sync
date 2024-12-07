'use client';

import { useParams } from 'next/navigation';

import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

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
import { useAppDispatch, useAppSelector } from '@/redux/store';
import { selectItems } from '@/redux/items/selectors';
import { editItem } from '@/redux/items/itemsSlice';
import { selectUser } from '@/redux/user/selectors';

const EditItemForm = () => {
	const params = useParams<{ itemId: string }>();

	const dispatch = useAppDispatch();
	const items = useAppSelector(selectItems);
	const user = useAppSelector(selectUser);

	const filteredItem = items.filter((i) => i.id === parseInt(params.itemId));

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
			name: filteredItem.length > 0 ? filteredItem[0].name : '',
			code: filteredItem.length > 0 ? filteredItem[0].code : '',
			quantity: filteredItem.length > 0 ? filteredItem[0].quantity : 0,
			price: filteredItem.length > 0 ? filteredItem[0].price : 0,
			description:
				filteredItem.length > 0 &&
				filteredItem[0].description &&
				filteredItem[0].description?.length > 0
					? filteredItem[0].description
					: '',
		},
	});

	const onSubmit = async (values: z.infer<typeof formSchema>) => {
		console.log(values);

		const toastId = toast.loading('Processing...', {
			style: {
				textAlign: 'center',
			},
		});

		const res = await dispatch(
			editItem({
				...values,
				userId: user!.id,
				currencyId: 1,
				id: parseInt(params.itemId),
				description: !values.description ? ' ' : values.description,
			}),
		);

		if (res.type.includes('success') || res.type.includes('fulfilled')) {
			toast.success('Item edited successfully!', {
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
			{filteredItem.length > 0 ? (
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
											className='border-black text-black autofill:shadow-[inset_0_0_0px_1000px_#f1f2ee] autofill:text-black'
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
											type='string'
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
							Save Item
						</Button>
					</form>
				</Form>
			) : (
				<div className='m-auto my-8 flex flex-col items-center justify-center h-full'>
					<h1 className='my-auto text-2xl font-bold'>Invalid item code</h1>
				</div>
			)}
		</>
	);
};

export default EditItemForm;
