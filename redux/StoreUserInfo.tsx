import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useSession } from 'next-auth/react';

import { AppDispatch, RootState } from '@/redux/store';
import { getUserByEmail } from '@/prisma/functions/users';
import { setUser } from './user/userSlice';

const StoreUserInfo = ({ children }: { children: React.ReactNode }) => {
	const dispatch = useDispatch<AppDispatch>();
	const user = useSelector((state: RootState) => state.user.data);
	const { data: session, status } = useSession();

	useEffect(() => {
		const storeUser = async () => {
			if (status === 'authenticated') {
				if (!user) {
					if (session?.user?.name) {
						const user = await getUserByEmail({
							email: session.user.name,
						});

						if (user) {
							user.password = ''; // ** TEMP
							dispatch(setUser(user));
						}
					}
				}
			}
		};

		storeUser();
	}, []);

	return <>{children}</>;
};

export default StoreUserInfo;
