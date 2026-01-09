'use client'

import Image from 'next/image'
import React, { useRef } from 'react'

import ArrowLeftRoundedIcon from '@/assets/icons/ArrowLeftRoundedIcon'
import ArrowRightRoundedIcon from '@/assets/icons/ArrowRightRoundedIcon'

import { vacancies } from '@/components/VacanciesCarousel/data'

import styles from './VacanciesCarousel.module.scss'

const VacanciesCarousel = () => {
	const trackRef = useRef(null)
	const isDragging = useRef(false)
	const startX = useRef(0)
	const scrollLeft = useRef(0)

	const onMouseDown = e => {
		if (!trackRef.current) return

		isDragging.current = true
		startX.current = e.pageX - trackRef.current.offsetLeft
		scrollLeft.current = trackRef.current.scrollLeft

		trackRef.current.classList.add(styles.dragging)
	}

	const onMouseMove = e => {
		if (!isDragging.current || !trackRef.current) return

		e.preventDefault()

		const x = e.pageX - trackRef.current.offsetLeft
		const walk = (x - startX.current) * 1.2
		trackRef.current.scrollLeft = scrollLeft.current - walk
	}

	const stopDrag = () => {
		isDragging.current = false
		trackRef.current?.classList.remove(styles.dragging)
	}

	const scroll = direction => {
		if (!trackRef.current) return
		const card = trackRef.current.firstElementChild
		if (!card) return

		const gap = 16
		trackRef.current.scrollBy({
			left: direction * (card.offsetWidth + gap),
			behavior: 'smooth'
		})
	}

	return (
		<div className={styles.root}>
			<div className={styles.header}>
				<h2 className={styles.title}>
					<span>🔥</span> Горячие вакансии
				</h2>

				<div className={styles.controls}>
					<button
						onClick={() => scroll(-1)}
						className={styles.controlBtn}
					>
						<ArrowLeftRoundedIcon />
					</button>
					<button
						onClick={() => scroll(1)}
						className={styles.controlBtn}
					>
						<ArrowRightRoundedIcon />
					</button>
				</div>
			</div>

			<div className={styles.viewport}>
				<div
					ref={trackRef}
					className={styles.track}
					onMouseDown={onMouseDown}
					onMouseMove={onMouseMove}
					onMouseUp={stopDrag}
					onMouseLeave={stopDrag}
				>
					{vacancies.map(v => (
						<article
							key={v.id}
							className={styles.card}
						>
							<div className={styles.image}>
								<Image
									src={v.img}
									alt={v.title}
									draggable={false}
								/>
							</div>
							<div className={styles.info}>
								<div className={styles.name}>{v.title}</div>
								<div className={styles.city}>{v.city}</div>
								<div className={styles.price}>{v.price}</div>
							</div>
						</article>
					))}
				</div>
			</div>
		</div>
	)
}

export default VacanciesCarousel
