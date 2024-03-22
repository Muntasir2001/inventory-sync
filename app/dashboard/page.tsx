import Statistics from '@/components/Home/Statistics';
import Buttons from '@/components/Home/Buttons';
import LastSale from '@/components/Home/LastSale';

const Dashboard = () => {
	return (
		<>
			<div className='flex flex-col bg-white py-[70px]'>
				<Statistics />
				<Buttons />
				<LastSale />
			</div>
		</>
	);
};

export default Dashboard;
