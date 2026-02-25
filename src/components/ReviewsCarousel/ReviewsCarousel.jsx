'use client'

import React from 'react'

import clsx from 'clsx'

import useDragScroll from '@/hooks/useDragScroll'

import ArrowLeftRoundedIcon from '@/assets/icons/ArrowLeftRoundedIcon'
import ArrowRightRoundedIcon from '@/assets/icons/ArrowRightRoundedIcon'
import StarIcon from '@/assets/icons/StarIcon'

import { reviews } from '@/components/ReviewsCarousel/data'

import styles from './ReviewsCarousel.module.scss'

const ReviewsCarousel = ({ rootStyles }) => {
	const { trackRef, scrollByCard, bind } = useDragScroll({
		gap: 24,
		dragClassName: styles.dragging
	})

	return (
		<section className={clsx(styles.root, rootStyles)}>
			<div className={styles.header}>
				<h2>Отзывы о работе с нами</h2>

				<div className={styles.arrows}>
					<button onClick={() => scrollByCard(-1)}>
						<ArrowLeftRoundedIcon />
					</button>
					<button onClick={() => scrollByCard(1)}>
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
					{reviews.map(item => (
						<article
							key={item.id}
							className={styles.card}
						>
							<div className={styles.top}>
								<div className={styles.info}>
									<span className={styles.name}>{item.name}</span>
									<span className={styles.date}>{item.date}</span>
								</div>

								<div className={styles.rating}>
									<span>{item.rating.toFixed(1)}</span>
									<StarIcon />
								</div>
							</div>

							<p className={styles.text}>{item.text}</p>
						</article>
					))}
				</div>
			</div>
		</section>
	)
}

export default ReviewsCarousel
