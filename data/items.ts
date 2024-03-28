export enum Status {
	IN_STOCK,
	OUT_OF_STOCK,
}

const items: Array<{
	id: number;
	name: string;
	code: string;
	status: Status;
	description: string;
	price: number;
	quantity: number;
}> = [
	{
		id: 1,
		name: 'Abaya Long',
		code: 'AB',
		status: Status.IN_STOCK,
		description:
			'Soft, luxurious velvet cloth in deep midnight blue, whispering tales of elegance and sophistication with every touch.',
		price: 23.22,
		quantity: 12,
	},
	{
		id: 2,
		name: 'Abaya Longggggggg',
		code: 'AB-123',
		status: Status.OUT_OF_STOCK,
		description:
			'Soft, luxurious velvet cloth in deep midnight blue, whispering tales of elegance and sophistication with every touch.',
		price: 23.22,
		quantity: 0,
	},
	{
		id: 10,
		name: 'Abaya Long',
		code: 'AB-123',
		status: Status.IN_STOCK,
		description:
			'Soft, luxurious velvet cloth in deep midnight blue, whispering tales of elegance and sophistication with every touch.',
		price: 23.22,
		quantity: 12,
	},
	{
		id: 3,
		name: 'Abaya Long',
		code: 'AB-123',
		status: Status.IN_STOCK,
		description:
			'Soft, luxurious velvet cloth in deep midnight blue, whispering tales of elegance and sophistication with every touch.',
		price: 23.22,
		quantity: 12,
	},
	{
		id: 4,
		name: 'Abaya Long',
		code: 'AB-123',
		status: Status.IN_STOCK,
		description:
			'Soft, luxurious velvet cloth in deep midnight blue, whispering tales of elegance and sophistication with every touch.',
		price: 23.22,
		quantity: 12,
	},

	{
		id: 11,
		name: 'Abaya Long',
		code: 'AB-123',
		status: Status.IN_STOCK,
		description:
			'Soft, luxurious velvet cloth in deep midnight blue, whispering tales of elegance and sophistication with every touch.',
		price: 23.22,
		quantity: 12,
	},

	{
		id: 12,
		name: 'Abaya Long',
		code: 'AB-123',
		status: Status.IN_STOCK,
		description:
			'Soft, luxurious velvet cloth in deep midnight blue, whispering tales of elegance and sophistication with every touch.',
		price: 23.22,
		quantity: 12,
	},
];

export default items;
