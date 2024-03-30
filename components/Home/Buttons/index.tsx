import Button from './Button';

const Buttons = () => {
	return (
		<>
			<div className='flex justify-between gap-4 px-5'>
				<Button
					iconClass='archive-2-fill'
					text='Items'
					href='/dashboard/items'
				/>
				<Button
					iconClass='add-large-fill'
					text='Add Item'
					href='/dashboard/add-item'
				/>
				<Button
					iconClass='line-chart-fill'
					text='Sales'
					href='/dashboard/sales'
				/>
				<Button
					iconClass='money-pound-circle-fill'
					text='Make a sale'
					href='/dashboard/make-sale'
				/>
			</div>
		</>
	);
};

export default Buttons;
