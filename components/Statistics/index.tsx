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
			<div className='flex flex-wrap'>
				<div className='stats shadow rounded-md bg-dark-white'>
					<div className='stat'>
						<div className='stat-title text-black'>Total Page Views</div>
						<div className='stat-value text-black'>89,400</div>
						<div className='stat-desc text-black'>
							21% more than last month
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Statistics;
