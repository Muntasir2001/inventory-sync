import SaleCard from './SaleCard';

const LastSale = () => {
	return (
		<>
			<div className='flex flex-col gap-4 mt-10 pb-6 px-5'>
				<h1 className='text-4xl font-bold text-black'>Last Sale</h1>

				<SaleCard
					iconClass='arrow-right-down-fill'
					text='Abaya Sale'
					date='10 Mar 2024'
					amount='+£2000'
				/>
				<SaleCard
					iconClass='arrow-right-down-fill'
					text='Abaya Sale'
					date='10 Mar 2024'
					amount='+£2000'
				/>
				<SaleCard
					iconClass='arrow-right-down-fill'
					text='Abaya Sale'
					date='10 Mar 2024'
					amount='+£2000'
				/>
				<SaleCard
					iconClass='arrow-right-down-fill'
					text='Abaya Sale'
					date='10 Mar 2024'
					amount='+£2000'
				/>
				<SaleCard
					iconClass='arrow-right-down-fill'
					text='Abaya Sale'
					date='10 Mar 2024'
					amount='+£2000'
				/>
				<SaleCard
					iconClass='arrow-right-down-fill'
					text='Abaya Sale'
					date='10 Mar 2024'
					amount='+£2000'
				/>
			</div>
		</>
	);
};

export default LastSale;
