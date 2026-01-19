import React from 'react'

import EventPage from '@/screens/EventPage/EventPage'
import { events } from '@/screens/EventsPage/data'

// В проде заменить на реальный запрос
export async function generateStaticParams() {
	return events.map(event => ({
		id: String(event.id)
	}))
}

const Page = async ({ params }) => {
	const { id } = await params

	return <EventPage id={id} />
}

export default Page
