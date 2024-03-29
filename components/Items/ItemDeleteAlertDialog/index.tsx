import {
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
} from '@/components/ui/alert-dialog';

const ItemDeleteAlertDialog = () => {
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
					<AlertDialogAction className='bg-dark-red'>
						Continue
					</AlertDialogAction>
				</AlertDialogFooter>
			</AlertDialogContent>
		</>
	);
};

export default ItemDeleteAlertDialog;
