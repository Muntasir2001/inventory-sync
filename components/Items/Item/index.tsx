import Link from 'next/link';

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Dialog, DialogTrigger } from '@/components/ui/dialog';
import ItemInfo from '../ItemInfo';
import { Status } from '@/data/items';
import { AlertDialogTrigger, AlertDialog } from '@/components/ui/alert-dialog';
import ItemDeleteAlertDialog from '../ItemDeleteAlertDialog';

interface Props {
	id: number;
	name: string;
	code: string;
	status: Status;
	description?: string;
	price: string;
	quantity: number;
}

const Item = ({
	id,
	name,
	code,
	status,
	description,
	price,
	quantity,
}: Props) => {
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
						id={id}
						name={name}
						code={code}
						status={status}
						description={description}
						price={price}
						quantity={quantity}
					/>
					<AlertDialog>
						<DropdownMenu>
							<DropdownMenuTrigger className='ml-auto outline-none'>
								<i className='ri-menu-line text-black text-3xl' />
							</DropdownMenuTrigger>
							<DropdownMenuContent className='text-black mr-4'>
								<Link href={`/dashboard/edit-item/${id}`}>
									<DropdownMenuItem className='font-medium active:bg-dark-white'>
										Edit
									</DropdownMenuItem>
								</Link>
								<AlertDialogTrigger asChild>
									<DropdownMenuItem className='text-dark-red font-medium active:bg-dark-white'>
										Delete
									</DropdownMenuItem>
								</AlertDialogTrigger>
							</DropdownMenuContent>
						</DropdownMenu>
						<ItemDeleteAlertDialog itemId={id} />
					</AlertDialog>
				</div>
			</Dialog>
		</>
	);
};

export default Item;
