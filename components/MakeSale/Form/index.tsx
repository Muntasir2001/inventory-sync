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

	const selectItems = [items.map((i) => ({ name: i.name, value: i.id }))];

	const FormSchema = z.object({
		item: z.string({
			required_error: 'Please select a item.',
		}),
		title: z.string(),
		amount: z.number(),
	});

	return (
		<>
			<div></div>
		</>
	);
};

export default MakeSaleForm;
