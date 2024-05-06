'use client';

import SidebarLink from './SidebarLink';
import { Button } from '@/components/ui/button';
import { logOut } from '@/lib/actions';

const Sidebar = () => {
	const links: Array<{ href: string; text: string }> = [
		{ href: '/dashboard', text: 'Home' },
		{ href: '/dashboard/items', text: 'Items' },
		{ href: '/dashboard/sales', text: 'Sales' },
		{ href: '/dashboard/add-item', text: 'Add Item' },
		{ href: '/dashboard/make-sale', text: 'Make a Sale' },
	];

	return (
		<>
			<div className='drawer-side z-50'>
				<label
					htmlFor='sidebar'
					aria-label='close sidebar'
					className='drawer-overlay'
				></label>
				<ul className='menu p-4 w-80 min-h-full bg-base-200 text-base-content'>
					{/* Sidebar content here */}
					{links.map((l, i) => (
						<li key={i}>
							<SidebarLink href={l.href} text={l.text} />
						</li>
					))}
					<li className='mt-auto'>
						<Button
							className='bg-dark-red text-black'
							onClick={async () => await logOut()}
						>
							Log Out
						</Button>
					</li>
				</ul>
			</div>
		</>
	);
};

export default Sidebar;
