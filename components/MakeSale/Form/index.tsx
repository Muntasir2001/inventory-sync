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

const MakeSaleForm = () => {
	const [open, setOpen] = useState<boolean>(false);
	const [value, setValue] = useState<string>('');

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
				<form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
					<FormField
						control={form.control}
						name='item'
						render={({ field }) => (
							<FormItem className='flex flex-col'>
								<FormLabel>Select item you sold</FormLabel>
								<Popover>
									<PopoverTrigger asChild>
										<FormControl>
											<Button
												variant='outline'
												role='combobox'
												className={`w-[200px] justify-between ${
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
									<PopoverContent className='w-[200px] p-0'>
										<Command>
											<CommandInput placeholder='Search language...' />
											<CommandEmpty>No language found.</CommandEmpty>
											<CommandGroup>
												{selectItems.map((s) => (
													<CommandItem
														value={s.label}
														key={s.value}
														onSelect={() => {
															form.setValue('item', s.value);
														}}
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
										</Command>
									</PopoverContent>
								</Popover>
								<FormDescription>
									This is the language that will be used in the
									dashboard.
								</FormDescription>
								<FormMessage />
							</FormItem>
						)}
					/>
					<Button type='submit'>Submit</Button>
				</form>
			</Form>
		</>
	);
};

export default MakeSaleForm;
