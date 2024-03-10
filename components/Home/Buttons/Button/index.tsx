import Link from 'next/link';

interface Props {
	iconClass: string;
	text: string;
	href: string;
}

const Button = ({ iconClass, text, href }: Props) => {
	return (
		<>
			<Link className='flex flex-col gap-2 items-center' href={href}>
				<div className='flex items-center justify-center p-3 px-4 rounded-md bg-dark-white'>
					<i className={`ri-${iconClass} text-black`} />
				</div>
				<p className='font-bold text-black max-w-[60px] text-center'>
					{text}
				</p>
			</Link>
		</>
	);
};

export default Button;
