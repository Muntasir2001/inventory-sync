'use client';

import { useState } from 'react';

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

const RegisterTab = () => {
	const [firstName, setFirstName] = useState<string>('');
	const [lastName, setLastName] = useState<string>('');
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');

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

		const toastId = toast.loading('Creating account...', {
			style: {
				textAlign: 'center',
			},
		});

		if (
			firstName.length < 1 ||
			lastName.length < 1 ||
			email.length < 1 ||
			password.length < 1
		) {
			toast.error(
				'One of the fields is empty. Please make sure you have filled out the entire form!',
				{
					id: toastId,
				},
			);

			return;
		}

		try {
			await createUser({
				firstName: firstName,
				lastName: lastName,
				email: email,
				password: password,
			});

			toast.success('Account created successfully! Please sign in now.', {
				id: toastId,
				duration: 10000,
			});
		} catch (err: any) {
			toast.error(err.toString(), {
				id: toastId,
				duration: 10000,
			});
		}
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
					<CardFooter>
						<Button
							type='submit'
							className='bg-primary text-black hover:bg-primary hover:brightness-90'
						>
							Create Account
						</Button>
					</CardFooter>
				</form>
			</Card>
		</>
	);
};

export default RegisterTab;
