'use client';

import { useEffect, useState } from 'react';

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
import { selectItems } from '@/redux/items/selectors';
import { useAppDispatch, useAppSelector } from '@/redux/store';
import { selectUser } from '@/redux/user/selectors';
import Item from '../Item';
import type { Items } from '@prisma/client';

const ItemList = () => {
	const [loading, setLoading] = useState<boolean>(true);
	const [searchItemText, setSearchItemText] = useState<string>('');
	const [filteredItemList, setFilteredItemList] = useState<Array<Items>>([]);

	const dispatch = useAppDispatch();
	const items = useAppSelector(selectItems);
	const user = useAppSelector(selectUser);

	const onFilterItemNameChange = (e: React.FormEvent<HTMLInputElement>) => {
		const value = e.currentTarget.value;
		setSearchItemText(value);

		if (items.length > 0 && value.length > 0) {
			const filteredList = items.filter((i) =>
				i.name.toLowerCase().match(value.toLowerCase()),
			);
			setFilteredItemList(filteredList);
		} else {
			setFilteredItemList([]);
		}
	};

	useEffect(() => {
		console.log('waiting');
		if (user && items.length < 1) {
			dispatch(getAllItems(user.id));
		}

		setLoading(false);
	}, [user, items.length]);

	return (
		<>
			<div className='flex flex-col gap-12 mt-6'>
				<div className='flex gap-3'>
					<Input
						className='text-black border-black'
						placeholder='Search item by name...'
						onChange={onFilterItemNameChange}
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
					{loading && (
						<p className='font-bold text-xl text-gray'>
							Loading items...
						</p>
					)}

					{!loading &&
					searchItemText.length > 0 &&
					filteredItemList &&
					filteredItemList.length > 0 ? (
						filteredItemList.map((s, i) => (
							<Item
								id={s.id}
								name={s.name}
								code={s.code}
								status={
									s.quantity > 0
										? Status.IN_STOCK
										: Status.OUT_OF_STOCK
								} // ** TEMPORARY
								description={s.description || 'No description'}
								price={`£${s.price}`}
								quantity={s.quantity}
								key={i}
							/>
						))
					) : !loading &&
					  searchItemText.length > 0 &&
					  filteredItemList.length < 1 ? (
						<p className='font-bold text-xl text-gray'>No items found</p>
					) : !loading && items && items.length > 0 ? (
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
								description={s.description || 'No description'}
								price={`£${s.price}`}
								quantity={s.quantity}
								key={i}
							/>
						))
					) : (
						!loading && (
							<p className='font-bold text-xl text-gray'>
								No items found
							</p>
						)
					)}
				</div>
			</div>
		</>
	);
};

export default ItemList;
