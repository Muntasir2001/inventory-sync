import SidebarLink from './SidebarLink';

const Sidebar = () => {
	const links: Array<{ href: string; text: string }> = [
		{ href: '/dashboard', text: 'Home' },
		{ href: '/dashboard/stocks', text: 'Stocks' },
		{ href: '/', text: 'Sales' },
		{ href: '/dashboard/add-stock', text: 'Add Stock' },
		{ href: '/', text: 'Make a Sale' },
	];

	return (
		<>
			<div className='drawer-side'>
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
				</ul>
			</div>
		</>
	);
};

export default Sidebar;
