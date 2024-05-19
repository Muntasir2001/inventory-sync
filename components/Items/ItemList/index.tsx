'use client';

import { useEffect } from 'react';

import { useSelector } from 'react-redux';

import { Input } from '@/components/ui/input';
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';
import { Status } from '@/data/items';
import { getAllItems } from '@/redux/items/itemsSlice';
import { RootState, useAppDispatch, useAppSelector } from '@/redux/store';
import { selectUser } from '@/redux/user/selectors';
import { Items } from '@prisma/client';
import Item from '../Item';

const ItemList = () => {
	const dispatch = useAppDispatch();
	const items: Array<Items> | undefined = useSelector(
		(state: RootState) => state.items.data,
	);
	const users = useAppSelector(selectUser);

	useEffect(() => {
		dispatch(getAllItems());
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<>
			<div className='flex flex-col gap-12 mt-6'>
				<div className='flex gap-3'>
					<Input
						className='text-black border-black'
						placeholder='Search item by name...'
					/>
					<Select>
						<SelectTrigger className='w-[180px] text-black border-black'>
							<SelectValue placeholder='Stock Status' />
						</SelectTrigger>
						<SelectContent className='text-black border-black'>
							<SelectGroup>
								<SelectItem value='show-all'>Show All</SelectItem>
								<SelectItem value='in-stock'>In Stock</SelectItem>
								<SelectItem value='out-of-stock'>
									Out of Stock
								</SelectItem>
							</SelectGroup>
						</SelectContent>
					</Select>
				</div>
				<div className='flex flex-col gap-6 overflow-y-auto'>
					{items && items.length > 0 ? (
						items.map((s, i) => (
							<Item
								id={s.id}
								name={s.name}
								code={s.code}
								status={
									s.quantity > 0
										? Status.IN_STOCK
										: Status.OUT_OF_STOCK
								} // ** TEMPORARY
								description={s.description}
								price={`£${s.price}`}
								quantity={s.quantity}
								key={i}
							/>
						))
					) : (
						<p className='font-bold text-xl text-gray'>No items found</p>
					)}
				</div>
			</div>
		</>
	);
};

export default ItemList;
