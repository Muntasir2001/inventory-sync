import Sidebar from '../Sidebar';

const Topbar = () => {
	return (
		<>
			<div className='flex items-center w-full bg-primary py-4 px-3 fixed'>
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

					<Sidebar />
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
