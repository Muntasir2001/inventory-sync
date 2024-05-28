import Link from 'next/link';

import {
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
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

const ItemInfo = ({
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
			<DialogContent>
				<DialogHeader className='text-left text-black'>
					<DialogTitle className='text-xl'>{name}</DialogTitle>
					<DialogDescription
						className={`${
							status === Status.IN_STOCK ? 'text-green' : 'text-red'
						} font-bold`}
					>
						{status === Status.IN_STOCK ? 'In Stock' : 'Out of stock'}
					</DialogDescription>
				</DialogHeader>
				<div className='flex flex-col gap-1'>
					<p className='text-black'>
						<span className='font-bold'>Code:</span> {code}
					</p>
					<p className='text-black'>
						<span className='font-bold'>Price:</span> {price}
					</p>
					<p className='text-black'>
						<span className='font-bold'>Quantity:</span> {quantity}
					</p>
					<p className='text-black'>
						<span className='font-bold'>Description:</span> {description}
					</p>
					<div className='flex gap-3 mt-8'>
						<Link href={`/dashboard/edit-item/${id}`}>
							<Button className='bg-dark-white text-black'>Edit</Button>
						</Link>
						<AlertDialog>
							<AlertDialogTrigger asChild>
								<Button className='text-white bg-dark-red'>
									Delete
								</Button>
							</AlertDialogTrigger>
							<ItemDeleteAlertDialog itemId={id} />
						</AlertDialog>
					</div>
				</div>
			</DialogContent>
		</>
	);
};

export default ItemInfo;
