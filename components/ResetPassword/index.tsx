'use client';

import { useState } from 'react';
import Link from 'next/link';

import toast from 'react-hot-toast';

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
import { Button } from '@/components/ui/button';
import { resetPassword } from '@/firebase/functions/auth';

const ResetPassword = () => {
	const [email, setEmail] = useState<string>('');

	const onSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		const toastId = toast.loading('Sending reset password request...');

		const { result, error } = await resetPassword({ email });

		if (error) {
			toast.error(`Request failed! ${error.toString().split(':')[2]}`, {
				id: toastId,
				duration: 10000,
			});
			return;
		}

		toast.success('Request successful! Check your email.', {
			id: toastId,
			duration: 10000,
		});
	};

	return (
		<>
			<form onSubmit={onSubmit}>
				<Card className='w-[400px]'>
					<CardHeader>
						<CardTitle>Reset your password</CardTitle>
						<CardDescription>
							Reset your password using your email account.
						</CardDescription>
					</CardHeader>
					<CardContent className='space-y-2'>
						<div className='space-y-1'>
							<Label htmlFor='email'>Email</Label>
							<Input
								type='email'
								id='email'
								placeholder='Your email'
								required
								onChange={(e) => setEmail(e.target.value)}
							/>
						</div>
					</CardContent>
					<CardFooter className='flex flex-col gap-4 items-start'>
						<Button
							type='submit'
							className='bg-primary w-full text-white hover:bg-primary hover:brightness-90'
						>
							Reset password
						</Button>
						<Link
							className='text-gray-600 text-sm hover:underline'
							href='/auth'
						>
							Back to Login
						</Link>
					</CardFooter>
				</Card>
			</form>
		</>
	);
};

export default ResetPassword;
