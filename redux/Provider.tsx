'use client';

import { SessionProvider } from 'next-auth/react';

import { Provider } from 'react-redux';
import { store } from './store';
import StoreUserInfo from './StoreUserInfo';

function Providers({ children }: { children: React.ReactNode }) {
	return (
		<SessionProvider>
			<Provider store={store}>
				<StoreUserInfo>{children}</StoreUserInfo>
			</Provider>
		</SessionProvider>
	);
}

export default Providers;
