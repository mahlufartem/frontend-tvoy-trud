'use client'

import Image from 'next/image'
import React from 'react'

import clsx from 'clsx'

import useDragScroll from '@/hooks/useDragScroll'

import ArrowLeftRoundedIcon from '@/assets/icons/ArrowLeftRoundedIcon'
import ArrowRightRoundedIcon from '@/assets/icons/ArrowRightRoundedIcon'

import { vacancies } from '@/components/VacanciesCarousel/data'

import styles from './VacanciesCarousel.module.scss'

const VacanciesCarousel = ({ headerStyles }) => {
	const { trackRef, scrollByCard, bind } = useDragScroll({
		gap: 16,
		dragClassName: styles.dragging
	})

	return (
		<div className={styles.root}>
			<div className={clsx(styles.header, headerStyles)}>
				<h2 className={styles.title}>
					<span>🔥</span> Горячие вакансии
				</h2>

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
