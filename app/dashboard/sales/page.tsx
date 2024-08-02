import { NextPage } from 'next';

import { withPageAuthRequired } from '@auth0/nextjs-auth0';

import SalesList from '@/components/Sales/SalesList';

const Sales: NextPage = withPageAuthRequired(
	async () => {
		return (
			<>
				<div className='flex flex-col bg-white py-[70px] mx-5'>
					<SalesList />
				</div>
			</>
		);
	},
	{
		returnTo: '/dashboard/sales',
	},
);

export default Sales;
