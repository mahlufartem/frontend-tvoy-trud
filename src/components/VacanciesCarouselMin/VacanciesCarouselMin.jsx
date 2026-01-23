'use client'

import Image from 'next/image'
import Link from 'next/link'
import React, { useRef } from 'react'

import { APP_ROUTES } from '@/constants/routes'

import ArrowLeftRoundedIcon from '@/assets/icons/ArrowLeftRoundedIcon'
import ArrowRightIcon from '@/assets/icons/ArrowRightIcon'
import ArrowRightRoundedIcon from '@/assets/icons/ArrowRightRoundedIcon'

import { vacancies } from '@/components/VacanciesCarouselMin/data'

import styles from './VacanciesCarouselMin..module.scss'

const VacanciesCarouselMin = () => {
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
				<h2 className={styles.title}>Каталог вакансий</h2>

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
						<div
							className={styles.cardWrapper}
							key={v.id}
						>
							<article className={styles.card}>
								<div className={styles.image}>
									<Image
										src={v.img}
										alt={v.title}
										draggable={false}
									/>
								</div>
							</article>
							<div className={styles.cardTitle}>
								<div>{v.title}</div>
							</div>
						</div>
					))}
				</div>

				<Link
					href={APP_ROUTES.primary.catalog}
					className={styles.allVacanciesBtn}
				>
					<div className={styles.footer}>
						<span>Смотреть все вакансии</span>
						<ArrowRightIcon />
					</div>
				</Link>
			</div>
		</div>
	)
}

export default VacanciesCarouselMin
