// export const advantages = {
// 	row_1: [
// 		{
// 			id: 1,
// 			title: 'Проверенные партнёры',
// 			text: 'В приложении — задания только  от известных надёжных компаний',
// 			icon: null
// 		},
// 		{
// 			id: 2,
// 			title: 'Защита данных',
// 			text: 'Строго следим за сохранностью  и конфиденциальностью данных',
// 			icon: null
// 		}
// 	],
// 	row_2: [
// 		{
// 			id: 3,
// 			title: 'Надёжная поддержка',
// 			text: 'Специалисты из службы поддержки сервиса  всегда на связи и готовы помочь',
// 			icon: null
// 		},
// 		{
// 			id: 4,
// 			title: 'Оформление рабочей страховки',
// 			text: 'Получайте страховку и выходите на оплачиваемый больничный в случае болезни',
// 			icon: null
// 		},
// 		{
// 			id: 5,
// 			title: 'Аренда жилья и продление патента',
// 			text: 'Найдите жилье рядом с работой и получите помощь в оформлении документов',
// 			icon: null
// 		}
// 	]
// }
import HandSecureIcon from '@/assets/icons/HandSecureIcon'
import HeadphonesIcon from '@/assets/icons/HeadphonesIcon'
import Home3Icon from '@/assets/icons/Home3Icon'
import ShieldIcon from '@/assets/icons/ShieldIcon'
import TwoHandIcon from '@/assets/icons/TwoHandIcon'

export const advantages = [
	{
		id: 1,
		title: 'Проверенные партнёры',
		text: 'В приложении — задания только  от известных надёжных компаний',
		icon: <TwoHandIcon />
	},
	{
		id: 2,
		title: 'Защита данных',
		text: 'Строго следим за сохранностью  и конфиденциальностью данных',
		icon: <HandSecureIcon fill='white' />
	},

	{
		id: 3,
		title: 'Надёжная поддержка',
		text: 'Специалисты из службы поддержки сервиса  всегда на связи и готовы помочь',
		icon: <HeadphonesIcon />
	},
	{
		id: 4,
		title: 'Оформление рабочей страховки',
		text: 'Получайте страховку и выходите на оплачиваемый больничный в случае болезни',
		icon: <ShieldIcon />
	},
	{
		id: 5,
		title: 'Аренда жилья и продление патента',
		text: 'Найдите жилье рядом с работой и получите помощь в оформлении документов',
		icon: <Home3Icon />
	}
]
