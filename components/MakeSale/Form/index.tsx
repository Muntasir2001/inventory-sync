'use client';

import { useState, useEffect } from 'react';
import { format } from 'date-fns';
import toast from 'react-hot-toast';

import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
} from '@/components/ui/command';
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from '@/components/ui/popover';
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form';
import { getAllItems } from '@/redux/items/itemsSlice';
import { Input } from '@/components/ui/input';
import { Calendar } from '@/components/ui/calendar';
import { useAppDispatch, useAppSelector } from '@/redux/store';
import { selectItems } from '@/redux/items/selectors';
import { addSale } from '@/redux/sale/saleSlice';
import { selectUser } from '@/redux/user/selectors';

const MakeSaleForm = () => {
	const [saleDate, setSaleDate] = useState<Date>(new Date());

	const user = useAppSelector(selectUser);
	const dispatch = useAppDispatch();
	const items = useAppSelector(selectItems);

	useEffect(() => {
		if (user && items.length < 1) {
			dispatch(getAllItems(user.id));
		}

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [user, items.length]);

	const mappedItems = items
		.filter((i) => i.quantity > 0)
		.map((i) => ({ label: i.name, value: i.id }));

	const FormSchema = z.object({
		itemId: z.number({
			required_error: 'Please select a item.',
		}),
		title: z.string(),
		quantity: z.coerce.number(),
		price: z.coerce.number(),
		saleDate: z.date(),
	});

	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
		defaultValues: {
			itemId: 0,
			title: '',
			quantity: 0,
			price: 0,
			saleDate: new Date(),
		},
	});

	const onSubmit = async (values: z.infer<typeof FormSchema>) => {
		const toastId = toast.loading('Recording sale...', {
			style: {
				textAlign: 'center',
			},
		});

		const selectedItem = items.find((i) => i.id === values.itemId);

		if (selectedItem && values.quantity > selectedItem?.quantity) {
			toast.error("You can't sell more items than it exists in stock!", {
				id: toastId,
				duration: 10000,
			});

			return;
		}

		if (user) {
			const res = await dispatch(
				addSale({
					...values,
					userId: user.id,
					currencyId: 1,
					saleDateTimeString: saleDate.toString(),
				}),
			);

			if (res.type.includes('success') || res.type.includes('fulfilled')) {
				toast.success('Sale recorded successfully!', {
					id: toastId,
					duration: 5000,
				});
			} else {
				toast.error('Something went wrong!', {
					id: toastId,
					duration: 10000,
				});
			}
		}
	};

	return (
		<>
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className='space-y-6 my-8'
				>
					<FormField
						control={form.control}
						name='itemId'
						render={({ field }) => (
							<FormItem className='flex flex-col'>
								<FormLabel className='text-black font-bold'>
									Select item you sold
								</FormLabel>
								<Popover>
									<PopoverTrigger asChild>
										<FormControl>
											<Button
												variant='outline'
												role='combobox'
												className={`border-black text-black justify-between ${
													!field.value && 'text-muted-foreground'
												}`}
											>
												{field.value
													? mappedItems.find(
															(s) => s.value === field.value,
													  )?.label
													: 'Select item'}
												<i className='text-xl ri-arrow-down-s-fill ml-2 shrink-0 opacity-50' />
											</Button>
										</FormControl>
									</PopoverTrigger>
									<PopoverContent className='p-0'>
										<Command>
											<CommandInput placeholder='Search items...' />
											<CommandList>
												<CommandEmpty>No items found.</CommandEmpty>
												<CommandGroup>
													{mappedItems.map((s) => (
														<CommandItem
															value={s.label}
															key={s.value}
															onSelect={() => {
																form.setValue(
																	'itemId',
																	s.value,
																);
															}}
															className={`aria-selected:bg-dark-white ${
																s.value === field.value
																	? 'bg-primary hover:bg-primary aria-selected:bg-primary'
																	: 'bg-white'
															}`}
														>
															<i
																className={`ri-check-line mr-2 text-2xl ${
																	s.value === field.value
																		? 'opacity-100'
																		: 'opacity-0'
																}`}
															/>
															{s.label}
														</CommandItem>
													))}
												</CommandGroup>
											</CommandList>
										</Command>
									</PopoverContent>
								</Popover>
								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						control={form.control}
						name='title'
						render={({ field }) => (
							<FormItem>
								<FormLabel className='text-black font-bold'>
									Title
								</FormLabel>
								<FormControl>
									<Input
										className='border-black text-black autofill:shadow-[inset_0_0_0px_1000px_#f1f2ee] autofill:text-black'
										placeholder='Unique title? Eg: Abaya sale'
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
						name='quantity'
						render={({ field }) => (
							<FormItem>
								<FormLabel className='text-black font-bold'>
									Quantity Sold
								</FormLabel>
								<FormControl>
									<Input
										className='border-black text-black autofill:shadow-[inset_0_0_0px_1000px_#f1f2ee] autofill:text-black'
										placeholder='Quantity sold'
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
									Total Price
								</FormLabel>
								<FormControl>
									<Input
										className='border-black text-black autofill:shadow-[inset_0_0_0px_1000px_#f1f2ee] autofill:text-black'
										placeholder='Total price'
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
						name='saleDate'
						render={({ field }) => (
							<FormItem>
								<FormLabel className='text-black font-bold block'>
									Sale Date
								</FormLabel>
								<FormControl>
									<Popover>
										<PopoverTrigger asChild>
											<Button
												variant={'outline'}
												className='pl-3 text-left font-normal border-black w-full'
											>
												{saleDate ? (
													<span className='text-black'>
														{format(saleDate, 'PPP')}
													</span>
												) : (
													<span className='text-slate-500'>
														Sale date
													</span>
												)}
												<i className='ri-calendar-view ml-auto text-xl text-slate-500' />
											</Button>
										</PopoverTrigger>
										<PopoverContent
											className='w-auto p-0'
											align='start'
										>
											<Calendar
												mode='single'
												selected={saleDate}
												onSelect={(d) => {
													if (d) {
														const sd = new Date();
														sd.setDate(d.getDate());

														setSaleDate(sd);
													}
												}}
												disabled={(date) =>
													date > new Date() ||
													date < new Date('1900-01-01')
												}
												initialFocus
											/>
										</PopoverContent>
									</Popover>
								</FormControl>
								<FormMessage className='text-red' />
							</FormItem>
						)}
					/>

					<Button className='bg-secondary mt-5' type='submit'>
						Add Sale
					</Button>
				</form>
			</Form>
		</>
	);
};

export default MakeSaleForm;
