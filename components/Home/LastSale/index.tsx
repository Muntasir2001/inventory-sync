'use client';

import { useState, useEffect } from 'react';

import SaleCard from './SaleCard';
import { getAllSales } from '@/redux/sale/saleSlice';
import { selectUser } from '@/redux/user/selectors';
import { selectSales } from '@/redux/sale/selectors';
import { useAppSelector } from '@/redux/store';
import { useAppDispatch } from '@/redux/store';

const LastSale = () => {
	const [loading, setLoading] = useState<boolean>(true);
	const [latestSales, setLatestSales] = useState<
		Array<{
			id: number;
			title: string;
			quantity: number;
			price: number;
			currencyId: number;
			itemId: number;
			userId: number;
			saleDateTimeString: string;
		}>
	>();

	const dispatch = useAppDispatch();
	const sales = useAppSelector(selectSales);
	const user = useAppSelector(selectUser);

	useEffect(() => {
		if (user && sales.length < 1) {
			dispatch(getAllSales(user.id));
			setLatestSales(sales.filter((s) => s.saleDateTimeString));
		}

		setLoading(false);
	}, [user, sales.length]);

	return (
		<>
			<div className='flex flex-col gap-4 mt-10 pb-6 px-5'>
				<h1 className='text-4xl font-bold text-black'>Last Sale</h1>

				<SaleCard
					iconClass='arrow-right-down-fill'
					text='Abaya Sale'
					date='10 Mar 2024'
					amount='+£2000'
				/>
				<SaleCard
					iconClass='arrow-right-down-fill'
					text='Abaya Sale'
					date='10 Mar 2024'
					amount='+£2000'
				/>
				<SaleCard
					iconClass='arrow-right-down-fill'
					text='Abaya Sale'
					date='10 Mar 2024'
					amount='+£2000'
				/>
				<SaleCard
					iconClass='arrow-right-down-fill'
					text='Abaya Sale'
					date='10 Mar 2024'
					amount='+£2000'
				/>
				<SaleCard
					iconClass='arrow-right-down-fill'
					text='Abaya Sale'
					date='10 Mar 2024'
					amount='+£2000'
				/>
				<SaleCard
					iconClass='arrow-right-down-fill'
					text='Abaya Sale'
					date='10 Mar 2024'
					amount='+£2000'
				/>
			</div>
		</>
	);
};

export default LastSale;
