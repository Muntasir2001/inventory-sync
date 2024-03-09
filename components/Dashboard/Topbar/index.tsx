const Topbar = () => {
	return (
		<>
			<div className='flex items-center w-full bg-primary py-4 px-3'>
				<div className='drawer w-auto mr-auto'>
					<input id='sidebar' type='checkbox' className='drawer-toggle' />
					<div className='drawer-content'>
						<label
							htmlFor='sidebar'
							className='drawer-button hover:cursor-pointer'
						>
							<i className='ri-menu-fill text-2xl text-black font-bold' />
						</label>
					</div>

					<div className='drawer-side'>
						<label
							htmlFor='sidebar'
							aria-label='close sidebar'
							className='drawer-overlay'
						></label>
						<ul className='menu p-4 w-80 min-h-full bg-base-200 text-base-content'>
							{/* Sidebar content here */}
							<li>
								<a>Sidebar Item 1</a>
							</li>
							<li>
								<a>Sidebar Item 2</a>
							</li>
						</ul>
					</div>
				</div>

				<h4 className='text-black font-bold text-xl text-center mx-auto'>
					Home
				</h4>

				<div className='ml-auto'></div>
			</div>
		</>
	);
};

export default Topbar;
