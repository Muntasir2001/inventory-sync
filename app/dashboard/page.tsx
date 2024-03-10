import Statistics from '@/components/Home/Statistics';
import Buttons from '@/components/Home/Buttons';

const Dashboard = () => {
	return (
		<>
			<div className='flex flex-col'>
				<Statistics />
				<Buttons />
			</div>
		</>
	);
};

export default Dashboard;
