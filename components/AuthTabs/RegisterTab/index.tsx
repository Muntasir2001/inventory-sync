'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

import toast from 'react-hot-toast';

import { Button } from '@/components/ui/button';
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { createUser } from '@/prisma/functions/users';
import { register } from '@/firebase/functions/auth';

const RegisterTab = () => {
	const [firstName, setFirstName] = useState<string>('');
	const [lastName, setLastName] = useState<string>('');
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');

	const router = useRouter();

	const onFirstNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFirstName(e.currentTarget.value);
	};

	const onLastNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setLastName(e.currentTarget.value);
	};

	const onEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEmail(e.currentTarget.value);
	};

	const onPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setPassword(e.currentTarget.value);
	};

	const onSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		const toastId = toast.loading('Logging you in...');

		const { result, error } = await register({ email, password });

		if (error) {
			toast.error(`Registration failed! ${error.toString().split(':')[2]}`, {
				id: toastId,
				duration: 10000,
			});

			return;
		}

		await createUser({
			firstName,
			lastName,
			email,
			firebaseAuthId: result!.user.uid,
		});

		toast.success('Account created successfully! Please sign in now.', {
			id: toastId,
			duration: 10000,
		});

		router.push('/dashboard');
	};

	return (
		<>
			<Card className='bg-light-secondary border-none'>
				<CardHeader>
					<CardTitle className='text-black'>Register</CardTitle>
					<CardDescription className='text-light-black'>
						Create a new account.
					</CardDescription>
				</CardHeader>
				<form onSubmit={onSubmit}>
					<CardContent className='space-y-2'>
						<div className='space-y-1'>
							<Label className='text-black' htmlFor='first-name'>
								First Name
							</Label>
							<Input
								value={firstName}
								onChange={onFirstNameChange}
								type='text'
								id='first-name'
								placeholder='Your first name'
								className={`bg-dark-white active:bg-dark-white text-black border-0 autofill:shadow-[inset_0_0_0px_1000px_#d8d9d6] ${
									firstName.length > 0 && 'webkit-text-fill-black'
								}`}
								required
							/>
						</div>
						<div className='space-y-1'>
							<Label className='text-black' htmlFor='last-name'>
								Last Name
							</Label>
							<Input
								value={lastName}
								onChange={onLastNameChange}
								type='text'
								id='last-name'
								placeholder='Your last name'
								className={`bg-dark-white active:bg-dark-white text-black border-0 autofill:shadow-[inset_0_0_0px_1000px_#d8d9d6] ${
									lastName.length > 0 && 'webkit-text-fill-black'
								}`}
								required
							/>
						</div>
						<div className='space-y-1'>
							<Label className='text-black' htmlFor='email'>
								Email
							</Label>
							<Input
								value={email}
								onChange={onEmailChange}
								type='email'
								id='email'
								placeholder='Your email'
								className={`bg-dark-white autofill:shadow-[inset_0_0_0px_1000px_#d8d9d6] ${
									email.length > 0 && 'webkit-text-fill-black'
								} text-black border-0`}
								required
							/>
						</div>
						<div className='space-y-1'>
							<Label className='text-black' htmlFor='password'>
								Password
							</Label>
							<Input
								value={password}
								onChange={onPasswordChange}
								id='password'
								type='password'
								placeholder='New password'
								className='bg-dark-white active:bg-dark-white text-black border-0'
								required
							/>
						</div>
					</CardContent>
					<CardFooter className='flex flex-col gap-4 items-start'>
						<Button
							type='submit'
							className='bg-primary text-black hover:bg-primary hover:brightness-90'
						>
							Create Account
						</Button>
						<Link
							className='text-light-white text-sm hover:underline'
							href='/reset-password'
						>
							Forgot password?
						</Link>
					</CardFooter>
				</form>
			</Card>
		</>
	);
};

export default RegisterTab;
