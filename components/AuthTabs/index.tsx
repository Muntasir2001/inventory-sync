import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import LoginTab from './LoginTab';
import RegisterTab from './RegisterTab';

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
						<LoginTab />
					</TabsContent>
					<TabsContent value='register'>
						<RegisterTab />
					</TabsContent>
				</Tabs>
			</div>
		</>
	);
};

export default AuthTabs;
