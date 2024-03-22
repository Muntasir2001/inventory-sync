import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface Props {
	name: string;
	code: string;
	status: Status;
}

export enum Status {
	IN_STOCK,
	OUT_OF_STOCK,
}

const Stock = ({ name, code, status }: Props) => {
	return (
		<>
			<div className='flex gap-8'>
				<div className='bg-dark-white rounded-md px-5 flex items-center justify-center max-h-[96px]'>
					<i className='ri-box-3-fill text-black text-5xl' />
				</div>
				<div className='flex flex-col gap-2'>
					<h3 className='text-2xl text-black font-medium max-w-[130px]'>
						Abaya long
					</h3>
					<p className='text-black'>Code : AB-123</p>
					<p className='text-black'>
						Status : <span className='text-green'>In Stock</span>
					</p>
				</div>
				<DropdownMenu>
					<DropdownMenuTrigger className='ml-auto outline-none'>
						<i className='ri-menu-line text-black text-3xl' />
					</DropdownMenuTrigger>
					<DropdownMenuContent className='text-black mr-4'>
						<DropdownMenuItem className='font-medium text-xl active:bg-dark-white'>
							Edit
						</DropdownMenuItem>
						<DropdownMenuItem className='text-red font-medium text-xl active:bg-dark-white'>
							Delete
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			</div>
		</>
	);
};

export default Stock;
