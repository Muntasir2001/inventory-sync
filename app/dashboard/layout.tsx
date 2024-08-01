import type { Metadata } from 'next';
import 'remixicon/fonts/remixicon.css';
import { UserProvider } from '@auth0/nextjs-auth0/client';

import Topbar from '@/components/Topbar';
import Providers from '@/redux/Provider';
import '../globals.css';

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
			<UserProvider>
				<div className={`min-h-screen bg-white`}>
					<Topbar />
					{children}
				</div>
			</UserProvider>
		</Providers>
	);
}
