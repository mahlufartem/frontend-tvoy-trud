import React from 'react'

import { vacancies } from '@/components/VacanciesCarousel/data'

export async function generateStaticParams() {
	// В дальнейшем заменить на реальный запрос списка вакансий
	return vacancies.map(vac => ({
		id: vac.id
	}))
}

const Page = () => {
	return <div></div>
}

export default Page
