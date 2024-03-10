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
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const AuthTabs = () => {
	return (
		<>
			<div className='flex flex-col items-center justify-center h-full'>
				<Tabs defaultValue='login' className='w-[300px] sm:w-[400px]'>
					<TabsList className='grid w-full grid-cols-2 gap-2 bg-dark-white'>
						<TabsTrigger
							className='bg-light-secondary text-black'
							value='login'
						>
							Login
						</TabsTrigger>
						<TabsTrigger
							className='bg-light-secondary text-black'
							value='register'
						>
							Register
						</TabsTrigger>
					</TabsList>
					<TabsContent value='login'>
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
									/>
								</div>
							</CardContent>
							<CardFooter>
								<Button className='bg-primary text-black hover:bg-primary hover:brightness-90'>
									Login
								</Button>
							</CardFooter>
						</Card>
					</TabsContent>
					<TabsContent value='register'>
						<Card className='bg-light-secondary border-none'>
							<CardHeader>
								<CardTitle className='text-black'>Register</CardTitle>
								<CardDescription className='text-light-black'>
									Create a new account.
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
								<Button className='bg-primary text-black hover:bg-primary hover:brightness-90'>
									Create Account
								</Button>
							</CardFooter>
						</Card>
					</TabsContent>
				</Tabs>
			</div>
		</>
	);
};

export default AuthTabs;
