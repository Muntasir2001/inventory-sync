import { Input } from '@/components/ui/input';
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';
import Stock, { Status } from './Stock';

const StockList = () => {
	const stocks: Array<{
		name: string;
		code: string;
		status: Status;
		description: string;
		price: string;
	}> = [
		{
			name: 'Abaya Long',
			code: 'AB-123',
			status: Status.IN_STOCK,
			description:
				'Soft, luxurious velvet cloth in deep midnight blue, whispering tales of elegance and sophistication with every touch.',
			price: '£23.22',
		},
		{
			name: 'Abaya Longggggggg',
			code: 'AB-123',
			status: Status.OUT_OF_STOCK,
			description:
				'Soft, luxurious velvet cloth in deep midnight blue, whispering tales of elegance and sophistication with every touch.',
			price: '£23.22',
		},
		{
			name: 'Abaya Long',
			code: 'AB-123',
			status: Status.IN_STOCK,
			description:
				'Soft, luxurious velvet cloth in deep midnight blue, whispering tales of elegance and sophistication with every touch.',
			price: '£23.22',
		},
		{
			name: 'Abaya Long',
			code: 'AB-123',
			status: Status.IN_STOCK,
			description:
				'Soft, luxurious velvet cloth in deep midnight blue, whispering tales of elegance and sophistication with every touch.',
			price: '£23.22',
		},
		{
			name: 'Abaya Long',
			code: 'AB-123',
			status: Status.IN_STOCK,
			description:
				'Soft, luxurious velvet cloth in deep midnight blue, whispering tales of elegance and sophistication with every touch.',
			price: '£23.22',
		},

		{
			name: 'Abaya Long',
			code: 'AB-123',
			status: Status.IN_STOCK,
			description:
				'Soft, luxurious velvet cloth in deep midnight blue, whispering tales of elegance and sophistication with every touch.',
			price: '£23.22',
		},

		{
			name: 'Abaya Long',
			code: 'AB-123',
			status: Status.IN_STOCK,
			description:
				'Soft, luxurious velvet cloth in deep midnight blue, whispering tales of elegance and sophistication with every touch.',
			price: '£23.22',
		},
	];

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
					{stocks.map((s, i) => (
						<Stock
							name={s.name}
							code={s.code}
							status={s.status}
							description={s.description}
							price={s.price}
							key={i}
						/>
					))}
				</div>
			</div>
		</>
	);
};

export default StockList;
