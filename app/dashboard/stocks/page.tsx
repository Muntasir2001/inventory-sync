// import StocksTable from '@/components/Stocks/StocksTable';
// import {
// 	Stocks as StocksList,
// 	columns,
// } from '@/components/Stocks/StocksTable/column';
import StockList from '@/components/Stocks/StockList';

const Stocks = () => {
	return (
		<>
			<div className='flex flex-col bg-white pt-[70px] mx-5'>
				{/* <StocksTable columns={columns} data={StocksList} /> */}
				<StockList />
			</div>
		</>
	);
};

export default Stocks;
