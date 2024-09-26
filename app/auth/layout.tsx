import type { Metadata } from 'next';
import 'remixicon/fonts/remixicon.css';

import Providers from '@/redux/Provider';
import '../globals.css';

export const metadata: Metadata = {
	title: 'Inventory Sync - Auth',
	description: 'Sync your inventories',
};

export default function DashboardLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return <Providers>{children}</Providers>;
}
