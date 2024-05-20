'use client';

import { useEffect, useState } from 'react';

import { useSession } from 'next-auth/react';

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
import { useAppDispatch, useAppSelector } from '@/redux/store';
import { selectUser } from '@/redux/user/selectors';
import Item from '../Item';
import { selectItems } from '@/redux/items/selectors';

const ItemList = () => {
	const [loading, setLoading] = useState<boolean>(true);

	const dispatch = useAppDispatch();
	const items = useAppSelector(selectItems);
	const users = useAppSelector(selectUser);
	const { status: authStatus } = useSession();

	useEffect(() => {
		if (authStatus === 'authenticated' && users) {
			dispatch(getAllItems());

			if (items.length > 0) setLoading(false);
		}

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [authStatus, users, items.length]);

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
					{loading && (
						<p className='font-bold text-xl text-gray'>
							Loading items...
						</p>
					)}

					{!loading && items && items.length > 0
						? items.map((s, i) => (
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
						: !loading && (
								<p className='font-bold text-xl text-gray'>
									No items found
								</p>
						  )}
				</div>
			</div>
		</>
	);
};

export default ItemList;
