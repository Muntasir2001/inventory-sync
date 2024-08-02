import { NextPage } from 'next';

import { withPageAuthRequired } from '@auth0/nextjs-auth0';

import EditItemForm from '@/components/EditItem/Form';

const EditItem: NextPage = withPageAuthRequired(
	async () => {
		return (
			<>
				<div className='flex flex-col bg-white py-[70px] mx-5'>
					<EditItemForm />
				</div>
			</>
		);
	},
	{
		returnTo({ params }) {
			return `/dashboard/edit-item/${params?.slug}`;
		},
	},
);

export default EditItem;
