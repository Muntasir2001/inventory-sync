'use client';

import { useState, useEffect } from 'react';
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
import { selectSales } from '@/redux/sale/selectors';
import { useAppSelector } from '@/redux/store';
import { useAppDispatch } from '@/redux/store';
import { getAllSales } from '@/redux/sale/saleSlice';
import { selectUser } from '@/redux/user/selectors';

const SalesList = () => {
	const [date, setDate] = useState<Date | undefined>();
	const [loading, setLoading] = useState<boolean>(true);

	const dispatch = useAppDispatch();
	const sales = useAppSelector(selectSales);
	const user = useAppSelector(selectUser);

	useEffect(() => {
		if (user && sales.length < 1) {
			dispatch(getAllSales(user.id));
		}

		setLoading(false);
	}, [user, sales.length]);

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
					{loading && (
						<p className='font-bold text-xl text-gray'>
							Loading sales...
						</p>
					)}

					{!loading && sales && sales.length > 0
						? sales.map((s, i) => (
								<SaleCard
									iconClass='arrow-right-down-fill'
									text={s.title}
									date={s.saleDate}
									amount={s.price}
									key={i}
								/>
						  ))
						: !loading && (
								<p className='font-bold text-xl text-gray'>
									You haven't made any sales
								</p>
						  )}
				</div>
			</div>
		</>
	);
};

export default SalesList;
