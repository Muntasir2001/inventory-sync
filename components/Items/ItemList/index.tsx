import { Input } from '@/components/ui/input';
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';
import Item from '../Item';
import items from '@/data/items';

const ItemList = () => {
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
					{items.map((s, i) => (
						<Item
							id={s.id}
							name={s.name}
							code={s.code}
							status={s.status}
							description={s.description}
							price={`£${s.price}`}
							quantity={s.quantity}
							key={i}
						/>
					))}
				</div>
			</div>
		</>
	);
};

export default ItemList;
