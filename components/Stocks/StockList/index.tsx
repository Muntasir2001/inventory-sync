import { Input } from '@/components/ui/input';
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const StockList = () => {
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
				<div className='flex flex-col gap-6'>
					<div className='flex gap-8'>
						<div className='bg-dark-white rounded-md px-5 flex items-center justify-center max-h-[96px]'>
							<i className='ri-box-3-fill text-black text-5xl' />
						</div>
						<div className='flex flex-col gap-2'>
							<h3 className='text-2xl text-black font-medium max-w-[130px]'>
								Abaya long
							</h3>
							<p className='text-black'>Code : AB-123</p>
							<p className='text-black'>
								Status : <span className='text-green'>In Stock</span>
							</p>
						</div>
						<DropdownMenu>
							<DropdownMenuTrigger className='ml-auto outline-none'>
								<i className='ri-menu-line text-black text-3xl' />
							</DropdownMenuTrigger>
							<DropdownMenuContent className='text-black mr-4'>
								<DropdownMenuItem className='font-medium text-xl active:bg-dark-white'>
									Edit
								</DropdownMenuItem>
								<DropdownMenuItem className='text-red font-medium text-xl active:bg-dark-white'>
									Delete
								</DropdownMenuItem>
							</DropdownMenuContent>
						</DropdownMenu>
					</div>

					<div className='flex gap-8'>
						<div className='bg-dark-white rounded-md px-5 flex items-center justify-center max-h-[96px]'>
							<i className='ri-box-3-fill text-black text-5xl' />
						</div>
						<div className='flex flex-col gap-2'>
							<h3 className='text-2xl text-black font-medium max-w-[150px] text-ellipsis whitespace-nowrap overflow-hidden'>
								Abaya longggggggg
							</h3>
							<p className='text-black'>Code : AB-123</p>
							<p className='text-black'>
								Status : <span className='text-green'>In Stock</span>
							</p>
						</div>
						<DropdownMenu>
							<DropdownMenuTrigger className='ml-auto outline-none'>
								<i className='ri-menu-line text-black text-3xl' />
							</DropdownMenuTrigger>
							<DropdownMenuContent className='text-black mr-4'>
								<DropdownMenuItem className='font-medium text-xl active:bg-dark-white'>
									Edit
								</DropdownMenuItem>
								<DropdownMenuItem className='text-red font-medium text-xl active:bg-dark-white'>
									Delete
								</DropdownMenuItem>
							</DropdownMenuContent>
						</DropdownMenu>
					</div>
				</div>
			</div>
		</>
	);
};

export default StockList;
