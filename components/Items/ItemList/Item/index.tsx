import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Dialog, DialogTrigger } from '@/components/ui/dialog';
import ItemInfo from '../ItemInfo';

interface Props {
	name: string;
	code: string;
	status: Status;
	description: string;
	price: string;
}

export enum Status {
	IN_STOCK,
	OUT_OF_STOCK,
}

const Item = ({ name, code, status, description, price }: Props) => {
	return (
		<>
			<Dialog>
				<div className='flex gap-8'>
					<DialogTrigger className='flex gap-8 h-full text-left'>
						<div className='bg-dark-white rounded-md p-3 flex items-center justify-center max-h-[96px]'>
							<i className='ri-box-3-fill text-black text-3xl' />
						</div>
						<div className='flex flex-col'>
							<h3 className='text-xl text-black font-medium max-w-[140px] text-ellipsis whitespace-nowrap overflow-hidden'>
								{name}
							</h3>
							<p className='text-black max-w-[145px] text-ellipsis whitespace-nowrap overflow-hidden mt-2'>
								Code : {code}
							</p>
							<p className='text-black'>
								Status :{' '}
								<span
									className={
										status === Status.IN_STOCK
											? 'text-green'
											: 'text-red'
									}
								>
									{status === Status.IN_STOCK
										? 'In Stock'
										: 'Out of stock'}
								</span>
							</p>
						</div>
					</DialogTrigger>
					<ItemInfo
						name={name}
						code={code}
						status={status}
						description={description}
						price={price}
					/>
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
			</Dialog>
		</>
	);
};

export default Item;
