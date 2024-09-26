'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';

import { useDispatch } from 'react-redux';

import { AppDispatch } from '@/redux/store';
import { getFilteredUserInfoByEmail } from '@/prisma/functions/users';
import { setUser } from './user/userSlice';
import { useAuthContext } from '@/Context/AuthContext';

const StoreUserInfo = ({ children }: { children: React.ReactNode }) => {
	const dispatch = useDispatch<AppDispatch>();
	const { user } = useAuthContext();
	const router = useRouter();
	const pathname = usePathname();

	const storeUser = async () => {
		if (user) {
			const userPrisma = await getFilteredUserInfoByEmail({
				email: user.email,
			});

			if (userPrisma) {
				dispatch(setUser(userPrisma));
			}
		}
	};

	useEffect(() => {
		if (!user) router.push('/auth');

		if (user && pathname === '/auth') router.push('/dashboard');

		storeUser();
	}, [user]);

	return <>{children}</>;
};

export default StoreUserInfo;
