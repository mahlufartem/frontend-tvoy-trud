'use client'

import Image from 'next/image'
import React, { useState } from 'react'

import { bannerHero2 } from '@/assets/images/selfEmployedPage'

import styles from './Banner2Section.module.scss'
import { advantages } from './data'

const Banner2Section = () => {
	const [index, setIndex] = useState(0)

	const prevSlide = () => {
		setIndex(prev => (prev === 0 ? advantages.length - 1 : prev - 1))
	}

	const nextSlide = () => {
		setIndex(prev => (prev === advantages.length - 1 ? 0 : prev + 1))
	}
	return (
		<section className={styles.root}>
			<h4>С заботой об исполнителях</h4>
			<div className={styles.slider}>
				<div
					className={styles.advantages}
					style={{ transform: `translateX(-${index * 100}%)` }}
				>
					{advantages.map(i => (
						<div
							key={i.id}
							className={styles.card}
						>
							<div className={styles.icon}>{i.icon}</div>
							<div className={styles.title}>{i.title}</div>
							<div className={styles.text}>{i.text}</div>
						</div>
					))}
				</div>
			</div>

			<div className={styles.controls}>
				<button onClick={prevSlide}>←</button>
				<button onClick={nextSlide}>→</button>
			</div>
			<Image
				src={bannerHero2}
				alt=''
				fill
				priority
				className={styles.bg}
			/>
		</section>
	)
}

export default Banner2Section
