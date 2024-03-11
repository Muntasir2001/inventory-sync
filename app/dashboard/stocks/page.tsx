import StocksTable from '@/components/Stocks/StocksTable';
import {
	Stocks as StocksList,
	Stock,
	columns,
} from '@/components/Stocks/StocksTable/column';

const Stocks = () => {
	return (
		<>
			<div className='flex flex-col bg-white pt-[70px]'>
				<StocksTable columns={columns} data={StocksList} />
			</div>
		</>
	);
};

export default Stocks;
