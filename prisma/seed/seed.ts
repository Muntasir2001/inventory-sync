import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const main = async () => {
	const isCurrencyTableSeeded = await prisma.currencies.findMany();

	if (isCurrencyTableSeeded.length < 1) {
		await prisma.currencies.createMany({
			data: [
				{
					name: 'GBP',
					symbol: '£',
				},
				{
					name: 'USD',
					symbol: '$',
				},
			],
		});
	}
};

main()
	.catch((e) => {
		console.error(e);
		process.exit(1);
	})
	.finally(async () => await prisma.$disconnect);
