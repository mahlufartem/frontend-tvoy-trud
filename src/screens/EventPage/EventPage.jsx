import React from 'react'

import EventsCarousel from '@/components/EventsCarousel/EventsCarousel'
import ReturnToBackButton from '@/components/ReturnToBackButton/ReturnToBackButton'

import styles from './EventPage.module.scss'
import { events } from './data'

const EventPage = ({ id }) => {
	// В проде заменить на реальный запрос
	const { title, date, description } =
		events.find(event => event.id.toString() === id) || {}

	return (
		<main className={styles.root}>
			<div className={styles.content}>
				<div className={styles.header}>
					<ReturnToBackButton />
					<h4 className={styles.title}>{title}</h4>
				</div>
				<div className={styles.image}></div>
				<div className={styles.description}>{description}</div>
			</div>
			<EventsCarousel events={events} />
		</main>
	)
}

export default EventPage
