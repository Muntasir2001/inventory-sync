const Statistics = () => {
	return (
		<>
			<div className='flex  justify-center gap-3 w-full py-6 px-5'>
				<div className='stats shadow rounded-md bg-dark-white w-full'>
					<div className='stat'>
						<div className='stat-title text-black'>Item count</div>
						<div className='stat-value text-black'>100</div>
					</div>
				</div>
				<div className='stats shadow rounded-md bg-dark-white w-full'>
					<div className='stat'>
						<div className='stat-title text-black break-words whitespace-break-spaces'>
							Sales this month
						</div>
						<div className='stat-value text-black'>30</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Statistics;
