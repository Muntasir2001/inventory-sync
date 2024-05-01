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
import { authenticate } from '@/lib/actions';

const LoginTab = () => {
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');

	const onEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEmail(e.currentTarget.value);
	};

	const onPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setPassword(e.currentTarget.value);
	};

	const onLoginButtonClick = (
		e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
	) => {
		authenticate(undefined, email, password);
	};

	return (
		<>
			<Card className='bg-light-secondary border-0'>
				<CardHeader>
					<CardTitle className='text-black'>Login</CardTitle>
					<CardDescription className='text-light-black'>
						Login into your account.
					</CardDescription>
				</CardHeader>
				<CardContent className='space-y-2'>
					<div className='space-y-1'>
						<Label className='text-black' htmlFor='email'>
							Email
						</Label>
						<Input
							type='email'
							id='email'
							placeholder='Your email'
							className='bg-dark-white text-black border-0'
							onChange={onEmailChange}
							value={email}
						/>
					</div>
					<div className='space-y-1'>
						<Label className='text-black' htmlFor='password'>
							Password
						</Label>
						<Input
							id='password'
							type='password'
							placeholder='Your password'
							className='bg-dark-white text-black border-0'
							onChange={onPasswordChange}
							value={password}
						/>
					</div>
				</CardContent>
				<CardFooter>
					<Button
						onClick={onLoginButtonClick}
						className='bg-primary text-black hover:bg-primary hover:brightness-90'
					>
						Login
					</Button>
				</CardFooter>
			</Card>
		</>
	);
};

export default LoginTab;
