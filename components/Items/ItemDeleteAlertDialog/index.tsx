'use client';

import { useDispatch } from 'react-redux';

import { AppDispatch } from '@/redux/store';
import {
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { deleteItem } from '@/redux/items/itemsSlice';
import toast from 'react-hot-toast';

interface Props {
	itemId: number;
}

const ItemDeleteAlertDialog = ({ itemId }: Props) => {
	const dispatch = useDispatch<AppDispatch>();

	const onContinueButtonClick = async () => {
		const toastId = toast.loading('Deleting item...', {
			style: {
				textAlign: 'center',
			},
		});

		await dispatch(deleteItem(itemId))
			.then(() => {
				toast.success('Deleted successfully!', {
					id: toastId,
					duration: 5000,
				});
			})
			.catch((err) => {
				toast.error(err, {
					id: toastId,
					duration: 10000,
				});
			});
	};

	return (
		<>
			<AlertDialogContent>
				<AlertDialogHeader>
					<AlertDialogTitle className='text-black'>
						Are you absolutely sure?
					</AlertDialogTitle>
					<AlertDialogDescription className='text-black'>
						This action cannot be undone. This will permanently delete
						your item.
					</AlertDialogDescription>
				</AlertDialogHeader>
				<AlertDialogFooter>
					<AlertDialogCancel className='bg-dark-white text-black'>
						Cancel
					</AlertDialogCancel>
					<AlertDialogAction
						onClick={onContinueButtonClick}
						className='bg-dark-red'
					>
						Continue
					</AlertDialogAction>
				</AlertDialogFooter>
			</AlertDialogContent>
		</>
	);
};

export default ItemDeleteAlertDialog;
