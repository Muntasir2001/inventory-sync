import Link from 'next/link';

import Button from './Button';

const Buttons = () => {
	return (
		<>
			<div className='flex justify-between gap-4 px-5'>
				<Button iconClass='archive-2-fill' text='Stocks' href='/' />
				<Button iconClass='add-large-fill' text='Add Stock' href='/' />
				<Button iconClass='line-chart-fill' text='Sales' href='/' />
				<Button
					iconClass='money-pound-circle-fill'
					text='Make a sale'
					href='/'
				/>
			</div>
		</>
	);
};

export default Buttons;
