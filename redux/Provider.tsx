'use client';

import { Provider } from 'react-redux';

import { store } from './store';
import StoreUserInfo from './StoreUserInfo';
import { AuthContextWrapper } from '@/Context/AuthContext';

function Providers({ children }: { children: React.ReactNode }) {
	return (
		<Provider store={store}>
			<AuthContextWrapper>
				<StoreUserInfo>{children}</StoreUserInfo>
			</AuthContextWrapper>
		</Provider>
	);
}

export default Providers;
