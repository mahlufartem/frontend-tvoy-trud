import React from 'react'

import { vacancyList } from '@/screens/CatalogPage/data'

export async function generateStaticParams() {
	// В дальнейшем заменить на реальный запрос списка вакансий
	return vacancyList.map(vac => ({
		id: vac.id
	}))
}

const Page = () => {
	return <div></div>
}

export default Page
