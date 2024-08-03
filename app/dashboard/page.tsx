import { NextPage } from 'next';

import { getSession, withPageAuthRequired } from '@auth0/nextjs-auth0';

import Statistics from '@/components/Home/Statistics';
import Buttons from '@/components/Home/Buttons';
import LastSale from '@/components/Home/LastSale';

const Dashboard: NextPage = withPageAuthRequired(
	async () => {
		// const session = await getSession();

		// console.log('session', session?.user);

		return (
			<>
				<div className='flex flex-col bg-white py-[70px]'>
					<Statistics />
					<Buttons />
					<LastSale />
				</div>
			</>
		);
	},
	{
		returnTo: '/dashboard',
	},
);

export default Dashboard;
