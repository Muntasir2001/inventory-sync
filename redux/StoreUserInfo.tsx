import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useSession } from 'next-auth/react';
import { useUser } from '@auth0/nextjs-auth0/client';

import { AppDispatch, RootState } from '@/redux/store';
import { getFilteredUserInfoByEmail } from '@/prisma/functions/users';
import { setUser } from './user/userSlice';

const StoreUserInfo = ({ children }: { children: React.ReactNode }) => {
	const dispatch = useDispatch<AppDispatch>();
	const userState = useSelector((state: RootState) => state.user.data);
	const { data: session, status } = useSession();
	const { user } = useUser();

	const storeUser = async () => {
		if (userState || !user || !user.email) {
			return;
		}

		if (status === 'authenticated') {
			console.log('session', session);

			const userPrisma = await getFilteredUserInfoByEmail({
				email: user.email,
			});

			if (userPrisma) {
				dispatch(setUser(userPrisma));
			}
		}
	};

	useEffect(() => {
		storeUser();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [status]);

	return <>{children}</>;
};

export default StoreUserInfo;
