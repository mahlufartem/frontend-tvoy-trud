import { APP_ROUTES } from '@/constants/routes'

export const footerLinks = [
	{
		id: 'catalog',
		items: [
			{ label: 'Каталог вакансий', href: APP_ROUTES.primary.catalog },
			{ label: 'Акции', href: APP_ROUTES.primary.promo },
			{ label: 'Вопросы и ответы', href: APP_ROUTES.secondary.faq },
			{
				label: 'Инструкции для пользователей',
				href: APP_ROUTES.secondary.instructions
			},
			{ label: 'База знаний', href: APP_ROUTES.primary.knowledgeBase }
		]
	},
	{
		id: 'company',
		items: [
			{ label: 'О компании', href: APP_ROUTES.primary.about },
			{ label: 'Документы', href: APP_ROUTES.secondary.docs },
			{ label: 'Самозанятым', href: APP_ROUTES.secondary.self_employed },
			{ label: 'Партнерам', href: APP_ROUTES.secondary.partners },
			{ label: 'Контакты', href: APP_ROUTES.secondary.contacts }
		]
	}
]
