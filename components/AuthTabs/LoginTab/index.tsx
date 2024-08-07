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
import { login } from '@/firebase/functions/auth';

const LoginTab = () => {
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');

	const router = useRouter();

	const onEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEmail(e.currentTarget.value);
	};

	const onPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setPassword(e.currentTarget.value);
	};

	const onSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		const toastId = toast.loading('Logging you in...');

		const { result, error } = await login({ email, password });

		if (error) {
			toast.error(`Login failed! ${error.toString().split(':')[2]}`, {
				id: toastId,
				duration: 10000,
			});
			return;
		}

		toast.success('Signed in successfully!', {
			id: toastId,
		});

		router.push('/dashboard');
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
				<form onSubmit={onSubmit}>
					<CardContent className='space-y-2'>
						<div className='space-y-1'>
							<Label className='text-black' htmlFor='email'>
								Email
							</Label>
							<Input
								type='email'
								id='email'
								placeholder='Your email'
								className={`bg-dark-white active:bg-dark-white text-black border-0 autofill:shadow-[inset_0_0_0px_1000px_#d8d9d6] ${
									email.length > 0 && 'webkit-text-fill-black'
								}`}
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
								className='bg-dark-white active:bg-dark-white text-black border-0'
								onChange={onPasswordChange}
								value={password}
							/>
						</div>
					</CardContent>
					<CardFooter className='flex flex-col items-start gap-2'>
						<Button
							type='submit'
							className='bg-primary text-black hover:bg-primary hover:brightness-90'
						>
							Login
						</Button>
						<Link
							className='text-gray-600 text-sm hover:underline'
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

export default LoginTab;
