'use client';

import { Provider } from 'react-redux';
import { UserProvider } from '@auth0/nextjs-auth0/client';

import { store } from './store';

function Providers({ children }: { children: React.ReactNode }) {
	return (
		<UserProvider>
			<Provider store={store}>{children}</Provider>
		</UserProvider>
	);
}

export default Providers;
