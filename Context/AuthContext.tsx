'use client';

import { useContext, createContext, useState, useEffect } from 'react';

import { getAuth, onAuthStateChanged } from 'firebase/auth';

import firebase from '@/firebase/firebase';

const auth = getAuth(firebase);

const AuthContext = createContext<any>({}); // TODO: FIX THE TYPE
export const useAuthContext = () => useContext(AuthContext);

export const AuthContextWrapper = ({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) => {
	const [user, setUser] = useState<any>(null);
	const [loading, setLoading] = useState<boolean>(true);

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			if (user) {
				setUser(user);
			} else {
				setUser(null);
			}
			setLoading(false);
		});

		return () => unsubscribe();
	}, []);

	return (
		<AuthContext.Provider value={{ user }}>
			{loading ? <div className='text-white'>Loading...</div> : children}
		</AuthContext.Provider>
	);
};
