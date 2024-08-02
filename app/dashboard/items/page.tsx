import { NextPage } from 'next';

import { withPageAuthRequired } from '@auth0/nextjs-auth0';

import ItemList from '@/components/Items/ItemList';

const Items: NextPage = withPageAuthRequired(
	async () => {
		return (
			<>
				<div className='flex flex-col bg-white py-[70px] mx-5'>
					<ItemList />
				</div>
			</>
		);
	},
	{
		returnTo: '/dashboard/items',
	},
);

export default Items;
