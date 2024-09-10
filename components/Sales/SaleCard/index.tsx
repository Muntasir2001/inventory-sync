interface Props {
	iconClass: string;
	text: string;
	date: Date;
	amount: number;
}

const SaleCard = ({ iconClass, text, date, amount }: Props) => {
	const fullDate = date.toDateString();

	return (
		<>
			<div className='flex items-center mt-7'>
				<div className='py-2 px-3 bg-primary rounded-full'>
					<i className={`ri-${iconClass} text-2xl text-black font-bold`} />
				</div>

				<div className='flex flex-col gap-1 ml-5 mr-auto'>
					<p className='text-black font-medium'>{text}</p>
					<p className='text-sm text-gray'>{fullDate}</p>
				</div>

				<div>
					<p className='text-xl text-black font-bold ml-auto'>{amount}</p>
				</div>
			</div>
		</>
	);
};

export default SaleCard;
