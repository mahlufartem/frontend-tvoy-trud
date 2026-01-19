'use client'

import Link from 'next/link'
import React from 'react'

import useDragScroll from '@/hooks/useDragScroll'

import { events } from '@/screens/EventsPage/data'

import ArrowLeftRoundedIcon from '@/assets/icons/ArrowLeftRoundedIcon'
import ArrowRightRoundedIcon from '@/assets/icons/ArrowRightRoundedIcon'
import ArrowRightTopIcon from '@/assets/icons/ArrowRightTopIcon'

import styles from './EventsCarousel.module.scss'

const EventsCarousel = ({ events }) => {
	const { trackRef, scrollByCard, bind } = useDragScroll({
		gap: 16,
		dragClassName: styles.dragging
	})
	return (
		<div className={styles.root}>
			<div className={styles.header}>
				<h2 className={styles.title}>Другие акции</h2>

				<div className={styles.controls}>
					<button
						className={styles.controlBtn}
						onClick={() => scrollByCard(-1)}
					>
						<ArrowLeftRoundedIcon />
					</button>
					<button
						className={styles.controlBtn}
						onClick={() => scrollByCard(1)}
					>
						<ArrowRightRoundedIcon />
					</button>
				</div>
			</div>

			<div className={styles.viewport}>
				<div
					ref={trackRef}
					className={styles.track}
					{...bind}
				>
					<div className={styles.list}>
						{events.map(({ id, title, date }) => (
							<Link
								href={`/event/${id}`}
								key={id}
								className={styles.eventCard}
							>
								<div className={styles.image}></div>
								<div className={styles.info}>
									<div className={styles}>
										{date} <ArrowRightTopIcon />
									</div>
									<span>{title}</span>
								</div>
							</Link>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}

export default EventsCarousel
