import Link from 'next/link';

interface Props {
	href: string;
	text: string;
}

const SidebarLink = ({ href, text }: Props) => {
	return (
		<>
			<Link className='text-2xl' href={href}>
				{text}
			</Link>
		</>
	);
};

export default SidebarLink;
