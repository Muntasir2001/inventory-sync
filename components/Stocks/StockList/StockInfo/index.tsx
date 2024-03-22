import {
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
} from '@/components/ui/dialog';
import { Status } from '../Stock';

interface Props {
	name: string;
	code: string;
	status: Status;
	description: string;
}

const StockInfo = ({ name, code, status, description }: Props) => {
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
						<span className='font-bold'>Description:</span> {description}
					</p>
				</div>
			</DialogContent>
		</>
	);
};

export default StockInfo;
