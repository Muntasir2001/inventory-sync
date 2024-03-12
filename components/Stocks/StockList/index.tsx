import { Input } from '@/components/ui/input';

const StockList = () => {
	return (
		<>
			<div className='flex flex-col gap-3 mt-6'>
				<div className='flex gap-3'>
					<Input
						className='text-black border-black'
						placeholder='Search item by name...'
					/>
				</div>
			</div>
		</>
	);
};

export default StockList;
