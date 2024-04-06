'use client';

import { useState } from 'react';

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
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form';
import items from '@/data/items';
import { Input } from '@/components/ui/input';
import { Calendar } from '@/components/ui/calendar';

const MakeSaleForm = () => {
	const [saleDate, setSaleDate] = useState<Date | undefined>(new Date());

	const selectItems = items.map((i) => ({ label: i.name, value: i.id }));

	const FormSchema = z.object({
		item: z.number({
			required_error: 'Please select a item.',
		}),
		title: z.string(),
		quantity: z.string(),
		price: z.number(),
		saleDate: z.date(),
	});

	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
	});

	function onSubmit(data: z.infer<typeof FormSchema>) {}

	return (
		<>
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className='space-y-6 my-8'
				>
					<FormField
						control={form.control}
						name='item'
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
													? selectItems.find(
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
													{selectItems.map((s) => (
														<CommandItem
															value={s.label}
															key={s.value}
															onSelect={() => {
																form.setValue('item', s.value);
															}}
															className='hover:dark-white'
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
									Quantity
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
									Price
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
								<FormLabel className='text-black font-bold'>
									Sale Date
								</FormLabel>
								<FormControl>
									<Calendar
										mode='single'
										selected={saleDate}
										onSelect={setSaleDate}
										className='rounded-md border -z-10'
									/>
								</FormControl>
								<FormMessage className='text-red' />
							</FormItem>
						)}
					/>

					<Button className='bg-secondary mt-5' type='submit'>
						Submit
					</Button>
				</form>
			</Form>
		</>
	);
};

export default MakeSaleForm;
