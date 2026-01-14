'use client'

import React, { useRef, useState } from 'react'

import clsx from 'clsx'

import { categories } from '@/pages/CatalogPage/sections/CategoriesSection/data'

import styles from './CategoriesSection.module.scss'

const CategoriesSection = () => {
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
		const walk = (x - startX.current) * 1.2
		trackRef.current.scrollLeft = scrollLeft.current - walk
	}
	return (
		<section className={styles.root}>
			<div className={styles.viewport}>
				<div
					ref={trackRef}
					className={styles.track}
					onMouseDown={onMouseDown}
					onMouseLeave={onMouseLeave}
					onMouseUp={onMouseUp}
					onMouseMove={onMouseMove}
				>
					<div className={clsx(styles.card, styles.all)}>
						<span>Все заказы</span>
					</div>
					<div className={styles.card}>
						<span>🔥</span>
						<span>Горячие</span>
					</div>
					<div className={styles.card}>
						<span>Рядом</span>
					</div>
					{categories.map(item => (
						<div
							key={item.id}
							className={styles.card}
						>
							<span>{item.title}</span>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default CategoriesSection
