import {
	createUserWithEmailAndPassword,
	getAuth,
	signInWithEmailAndPassword,
	sendPasswordResetEmail,
	signOut,
} from 'firebase/auth';

import firebase from '../firebase';

const auth = getAuth(firebase);

interface register {
	email: string;
	password: string;
}

interface login {
	email: string;
	password: string;
}

interface resetPassword {
	email: string;
}

export const register = async ({ email, password }: register) => {
	let result = null,
		error = null;
	try {
		result = await createUserWithEmailAndPassword(auth, email, password);
	} catch (e) {
		error = e;
	}

	return { result, error };
};

export const login = async ({ email, password }: login) => {
	let result = null,
		error = null;
	try {
		result = await signInWithEmailAndPassword(auth, email, password);
	} catch (e) {
		error = e;
	}

	return { result, error };
};

export const resetPassword = async ({ email }: resetPassword) => {
	let result = null,
		error = null;
	try {
		result = await sendPasswordResetEmail(auth, email);
	} catch (e) {
		error = e;
	}

	return { result, error };
};

export const logOut = async () => {
	let result = null,
		error = null;
	try {
		result = await signOut(auth);
	} catch (e) {
		error = e;
	}

	return { result, error };
};
