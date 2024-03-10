import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';

const Statistics = () => {
	return (
		<>
			<div className='flex  justify-center gap-3 w-full py-6 px-5'>
				<div className='stats shadow rounded-md bg-dark-white w-full'>
					<div className='stat'>
						<div className='stat-title text-black'>Stock count</div>
						<div className='stat-value text-black'>100</div>
					</div>
				</div>
				<div className='stats shadow rounded-md bg-dark-white w-full'>
					<div className='stat'>
						<div className='stat-title text-black'>Sale this month</div>
						<div className='stat-value text-black'>30</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Statistics;
