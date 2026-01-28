import React from 'react'

import InstructionPage from '@/screens/InstructionPage/InstructionPage'
import { vacancies } from '@/screens/InstructionsPage/data'

// В проде заменить на реальный запрос
export async function generateStaticParams() {
	return vacancies.map(event => ({
		id: String(event.id)
	}))
}

const Page = async ({ params }) => {
	const { id } = await params

	return <InstructionPage id={id} />
}

export default Page
