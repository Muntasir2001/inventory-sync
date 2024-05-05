'use client';

import { useState } from 'react';

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

	const onEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEmail(e.currentTarget.value);
	};

	const onPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setPassword(e.currentTarget.value);
	};

	const onCreateAccountButtonClick = (
		e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
	) => {
		createUser({
			firstName: 'he',
			lastName: 'he',
			email: 'as',
			password: 'd',
		});
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
				<CardContent className='space-y-2'>
					<div className='space-y-1'>
						<Label className='text-black' htmlFor='first-name'>
							First Name
						</Label>
						<Input
							type='text'
							id='first-name'
							placeholder='Your first name'
							className='bg-dark-white text-black border-0'
						/>
					</div>
					<div className='space-y-1'>
						<Label className='text-black' htmlFor='last-name'>
							Last Name
						</Label>
						<Input
							type='text'
							id='last-name'
							placeholder='Your last name'
							className='bg-dark-white text-black border-0'
						/>
					</div>
					<div className='space-y-1'>
						<Label className='text-black' htmlFor='email'>
							Email
						</Label>
						<Input
							type='email'
							id='email'
							placeholder='Your email'
							className='bg-dark-white text-black border-0'
						/>
					</div>
					<div className='space-y-1'>
						<Label className='text-black' htmlFor='password'>
							Password
						</Label>
						<Input
							id='password'
							type='password'
							placeholder='New password'
							className='bg-dark-white text-black border-0'
						/>
					</div>
				</CardContent>
				<CardFooter>
					<Button
						onClick={onCreateAccountButtonClick}
						className='bg-primary text-black hover:bg-primary hover:brightness-90'
					>
						Create Account
					</Button>
				</CardFooter>
			</Card>
		</>
	);
};

export default RegisterTab;
