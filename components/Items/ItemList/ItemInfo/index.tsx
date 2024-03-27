import {
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
} from '@/components/ui/dialog';
import { Status } from '../Item';
import { Button } from '@/components/ui/button';

interface Props {
	name: string;
	code: string;
	status: Status;
	description: string;
	price: string;
}

const ItemInfo = ({ name, code, status, description, price }: Props) => {
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
						<span className='font-bold'>Description:</span> {description}
					</p>
					<div className='flex gap-3 mt-8'>
						<Button className='bg-secondary'>Edit</Button>
						<Button className='text-white bg-red'>Delete</Button>
					</div>
				</div>
			</DialogContent>
		</>
	);
};

export default ItemInfo;
