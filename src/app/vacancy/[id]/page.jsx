import React from 'react'
import { vacancies } from '@/components/VacanciesCarousel/data'

const Page = () => {
	export async function generateStaticParams() {
		
		// В дальнейшем заменить на реальны запрос списка вакансий
		return vacancies.map((vac) => ({
			id: vac.id
		}));
	}
	return <div></div>
}

export default Page
