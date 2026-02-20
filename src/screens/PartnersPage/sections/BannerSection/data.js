import CashIcon from '@/assets/icons/CashIcon'
import Clock2Icon from '@/assets/icons/Clock2Icon'
import HandSecureIcon from '@/assets/icons/HandSecureIcon'
import Home2Icon from '@/assets/icons/Home2Icon'
import List2Icon from '@/assets/icons/List2Icon'

export const advantages = [
	{
		id: 1,
		image: <CashIcon />,
		text: (
			<>
				Доход до 4 900 ₽ <br /> в день
			</>
		)
	},
	{
		id: 2,
		image: <Clock2Icon />,
		text: (
			<>
				Выплаты в <br /> течение 72 часов
			</>
		)
	},
	{
		id: 3,
		image: <List2Icon />,
		text: (
			<>
				Простые задания <br /> без опыта
			</>
		)
	},
	{
		id: 4,
		image: <Home2Icon />,
		text: (
			<>
				Аренда жилья <br /> рядом с работой
			</>
		)
	},
	{
		id: 5,
		image: <HandSecureIcon />,
		text: (
			<>
				Оформление <br /> трудовой страховки
			</>
		)
	}
]
