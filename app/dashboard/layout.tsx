import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import 'remixicon/fonts/remixicon.css';

import Topbar from '@/components/Dashboard/Topbar';

import '../globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Inventory Sync',
	description: 'Sync your inventories',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={`${inter.className} bg-white`}>
				<div className='drawer'>
					<input
						id='sidebar-input'
						type='checkbox'
						className='drawer-toggle'
					/>
					<div className='drawer-content flex flex-col'>
						<Topbar />
						{children}
					</div>

					<div className='drawer-side'>
						<label
							htmlFor='my-drawer'
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
					<div></div>
				</div>
			</body>
		</html>
	);
}
