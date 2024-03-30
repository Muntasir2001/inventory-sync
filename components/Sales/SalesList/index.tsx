'use client';

import { useState } from 'react';
import { format } from 'date-fns';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from '@/components/ui/popover';
import SaleCard from '../SaleCard';

const SalesList = () => {
	const [date, setDate] = useState<Date | undefined>();

	const sales: Array<{
		iconClass: string;
		text: string;
		date: string;
		amount: string;
	}> = [
		{
			iconClass: 'arrow-right-down-fill',
			text: 'Abaya Sale',
			date: '10 Mar 2024',
			amount: '+£2000',
		},
		{
			iconClass: 'arrow-right-down-fill',
			text: 'Abaya Sale',
			date: '10 Mar 2024',
			amount: '+£2000',
		},
		{
			iconClass: 'arrow-right-down-fill',
			text: 'Abaya Sale',
			date: '10 Mar 2024',
			amount: '+£2000',
		},
		{
			iconClass: 'arrow-right-down-fill',
			text: 'Abaya Sale',
			date: '10 Mar 2024',
			amount: '+£2000',
		},
		{
			iconClass: 'arrow-right-down-fill',
			text: 'Abaya Sale',
			date: '10 Mar 2024',
			amount: '+£2000',
		},
		{
			iconClass: 'arrow-right-down-fill',
			text: 'Abaya Sale',
			date: '10 Mar 2024',
			amount: '+£2000',
		},
		{
			iconClass: 'arrow-right-down-fill',
			text: 'Abaya Sale',
			date: '10 Mar 2024',
			amount: '+£2000',
		},
	];

	return (
		<>
			<div className='flex flex-col gap-12 mt-6'>
				<div className='flex flex-col gap-3'>
					<Input
						className='text-black border-black'
						placeholder='Search sale by name...'
					/>
					<Input
						className='text-black border-black'
						placeholder='Search sale by amount...'
						type='number'
					/>
					<Popover>
						<PopoverTrigger asChild>
							<Button
								variant={'outline'}
								className='pl-3 text-left font-normal border-black'
							>
								{date ? (
									<span className='text-black'>
										{format(date, 'PPP')}
									</span>
								) : (
									<span className='text-slate-500'>
										Search by sale date
									</span>
								)}
								<i className='ri-calendar-view ml-auto text-xl text-slate-500' />
							</Button>
						</PopoverTrigger>
						<PopoverContent className='w-auto p-0' align='start'>
							<Calendar
								mode='single'
								selected={date}
								onSelect={setDate}
								disabled={(date) =>
									date > new Date() || date < new Date('1900-01-01')
								}
								initialFocus
							/>
						</PopoverContent>
					</Popover>
				</div>
				<div className='flex flex-col gap-4'>
					{sales.map((s, i) => (
						<SaleCard
							iconClass={s.iconClass}
							text={s.text}
							date={s.date}
							amount={s.amount}
							key={i}
						/>
					))}
				</div>
			</div>
		</>
	);
};

export default SalesList;
