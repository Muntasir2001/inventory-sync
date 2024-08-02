import { NextPage } from 'next';

import { withPageAuthRequired } from '@auth0/nextjs-auth0';

import Form from '@/components/MakeSale/Form';

const MakeSale: NextPage = withPageAuthRequired(
	async () => {
		return (
			<>
				<div className='flex flex-col bg-white py-[70px] mx-5'>
					<Form />
				</div>
			</>
		);
	},
	{
		returnTo: '/dashboard/make-sale',
	},
);

export default MakeSale;
