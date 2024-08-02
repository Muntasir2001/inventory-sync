import { NextPage } from 'next';

import { withPageAuthRequired } from '@auth0/nextjs-auth0';

import Form from '@/components/AddItem/Form';

const AddItem: NextPage = withPageAuthRequired(
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
		returnTo: '/dashboard/add-item',
	},
);

export default AddItem;
