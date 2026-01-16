import React from 'react'

import { vacancyList } from '@/screens/CatalogPage/data'
import VacancyPage from '@/screens/VacancyPage/VacancyPage'

export async function generateStaticParams() {
	// В дальнейшем заменить на реальный запрос списка вакансий
	return vacancyList.map(vac => ({
		id: vac.id
	}))
}

const Page = ({ params }) => {
	return <VacancyPage />
}

export default Page
