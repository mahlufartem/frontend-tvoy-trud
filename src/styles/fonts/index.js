import localFont from 'next/font/local'

export const involve = localFont({
	src: [
		{
			path: './Involve-Regular.ttf',
			weight: '400',
			style: 'normal'
		},
		{
			path: './Involve-Medium.ttf',
			weight: '500',
			style: 'normal'
		},
		{
			path: './Involve-Bold.ttf',
			weight: '700',
			style: 'normal'
		}
	],
	variable: '--font-involve',
	display: 'swap'
})
