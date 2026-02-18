'use client'

import Image from 'next/image'
import React, { useRef, useState } from 'react'

import { useWindowWidth } from '@/hooks/useWindowWidth'

import {
	lenta,
	magnit,
	magnitKosm,
	okey,
	pyaterochka,
	yandexLavka
} from '@/assets/images/partnersPage'

import styles from './PartnersSection.module.scss'

const partners = [
	{ id: 1, image: magnit },
	{ id: 2, image: magnitKosm },
	{ id: 3, image: lenta },
	{ id: 4, image: okey },
	{ id: 5, image: pyaterochka },
	{ id: 6, image: yandexLavka }
]

const PartnersSection = () => {
	const listRef = useRef(null)
	const [isDown, setIsDown] = useState(false)
	const [startX, setStartX] = useState(0)
	const [scrollLeft, setScrollLeft] = useState(0)

	const width = useWindowWidth()

	const handleMouseDown = e => {
		if (!listRef.current) return
		setIsDown(true)
		setStartX(e.pageX - listRef.current.offsetLeft)
		setScrollLeft(listRef.current.scrollLeft)
	}

	const handleMouseLeave = () => {
		setIsDown(false)
	}

	const handleMouseUp = () => {
		setIsDown(false)
	}

	const handleMouseMove = e => {
		if (!isDown || !listRef.current) return
		e.preventDefault()
		const x = e.pageX - listRef.current.offsetLeft
		const walk = (x - startX) * 1.5 // скорость
		listRef.current.scrollLeft = scrollLeft - walk
	}
	return (
		<section className={styles.root}>
			<h4>
				<span>Более 25 компаний</span> по всей <br />
				России — уже с нами
			</h4>

			<div
				ref={listRef}
				className={styles.list}
				onMouseDown={handleMouseDown}
				onMouseLeave={handleMouseLeave}
				onMouseUp={handleMouseUp}
				onMouseMove={handleMouseMove}
			>
				<div className={styles.track}>
					{[...partners, ...partners].map((partner, index) => (
						<Image
							key={index}
							src={partner.image}
							width={width >= 768 ? 334 : 225}
							alt=''
							draggable={false}
						/>
					))}
				</div>
			</div>
		</section>
	)
}

export default PartnersSection
