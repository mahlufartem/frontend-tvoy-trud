'use client'

import React, { useRef } from 'react'

import ArrowLeftRoundedIcon from '@/assets/icons/ArrowLeftRoundedIcon'
import ArrowRightRoundedIcon from '@/assets/icons/ArrowRightRoundedIcon'
import StarIcon from '@/assets/icons/StarIcon'

import { reviews } from '@/components/ReviewsCarousel/data'

import styles from './ReviewsCarousel.module.scss'

const ReviewsCarousel = () => {
	const trackRef = useRef(null)
	const isDown = useRef(false)
	const startX = useRef(0)
	const scrollLeft = useRef(0)

	const scroll = direction => {
		if (!trackRef.current) return
		const cardWidth = trackRef.current.firstChild.offsetWidth + 24
		trackRef.current.scrollBy({
			left: direction * cardWidth,
			behavior: 'smooth'
		})
	}

	const onMouseDown = e => {
		if (!trackRef.current) return
		isDown.current = true
		startX.current = e.pageX
		scrollLeft.current = trackRef.current.scrollLeft
		trackRef.current.classList.add(styles.dragging)
	}

	const onMouseLeave = () => {
		isDown.current = false
		trackRef.current?.classList.remove(styles.dragging)
	}

	const onMouseUp = () => {
		isDown.current = false
		trackRef.current?.classList.remove(styles.dragging)
	}

	const onMouseMove = e => {
		if (!isDown.current || !trackRef.current) return
		e.preventDefault()
		const x = e.pageX
		const walk = (x - startX.current) * 1.2 // скорость drag
		trackRef.current.scrollLeft = scrollLeft.current - walk
	}

	return (
		<section className={styles.root}>
			<div className={styles.header}>
				<h2>Отзывы о работе с нами</h2>
				<div className={styles.actions}>
					{/*<button className={styles.all}>Смотреть все отзывы</button>*/}
					<div className={styles.arrows}>
						<button onClick={() => scroll(-1)}>
							<ArrowLeftRoundedIcon />
						</button>
						<button onClick={() => scroll(1)}>
							<ArrowRightRoundedIcon />
						</button>
					</div>
				</div>
			</div>

			<div className={styles.viewport}>
				<div
					ref={trackRef}
					className={styles.track}
					onMouseDown={onMouseDown}
					onMouseLeave={onMouseLeave}
					onMouseUp={onMouseUp}
					onMouseMove={onMouseMove}
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
				{/*<div className={styles.allMobileWrapper}>*/}
				{/*	<button className={styles.allMobile}>Смотреть все отзывы</button>*/}
				{/*</div>*/}
			</div>
		</section>
	)
}

export default ReviewsCarousel
