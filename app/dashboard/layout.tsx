import type { Metadata } from 'next';
import 'remixicon/fonts/remixicon.css';

import Topbar from '@/components/Topbar';
import '../globals.css';
import Providers from '@/redux/Provider';

export const metadata: Metadata = {
	title: 'Inventory Sync',
	description: 'Sync your inventories',
};

export default function DashboardLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<Providers>
			<div className={`min-h-screen bg-white`}>
				<Topbar />
				{children}
			</div>
		</Providers>
	);
}
