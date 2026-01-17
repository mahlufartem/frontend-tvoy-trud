import React from 'react'

import { vacancyList } from '@/screens/CatalogPage/data'
import VacancyPage from '@/screens/VacancyPage/VacancyPage'

export async function generateStaticParams() {
	return vacancyList.map(vac => ({
		id: String(vac.id)
	}))
}

const Page = async ({ params }) => {
	const { id } = await params

	return <VacancyPage id={id} />
}

export default Page
