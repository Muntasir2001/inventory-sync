import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useSession } from 'next-auth/react';

import { AppDispatch, RootState } from '@/redux/store';
import { getFilteredUserInfoByEmail } from '@/prisma/functions/users';
import { setUser } from './user/userSlice';

const StoreUserInfo = ({ children }: { children: React.ReactNode }) => {
	const dispatch = useDispatch<AppDispatch>();
	const user = useSelector((state: RootState) => state.user.data);
	const { data: session, status } = useSession();

	const storeUser = async () => {
		if (user || !session || !session.user || !session.user.email) {
			return;
		}

		if (status === 'authenticated') {
			const userPrisma = await getFilteredUserInfoByEmail({
				email: session.user.email,
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
