'use client'

import Image from 'next/image'
import React from 'react'

import { useWindowWidth } from '@/hooks/useWindowWidth'

import { mainBanner2, mainBanner2_mini } from '@/assets/images'

import EarningsMarquee from '@/components/EarningsMarquee/EarningsMarquee'
import VacanciesCarouselMin from '@/components/VacanciesCarouselMin/VacanciesCarouselMin'

import styles from './Section_4.module.scss'

const Section_4 = () => {
	const width = useWindowWidth()

	return (
		<section className={styles.root}>
			<VacanciesCarouselMin />
			<div className={styles.bannerWrapper}>
				<div className={styles.banner}>
					<div className={styles.content}>
						<div className={styles.text}>
							<p className={styles.title}>
								Не знаете, какая вакансия подойдет вам больше?
							</p>
							<p className={styles.subtitle}>
								Заполните анкету, мы позвоним вам и поможем с выбором
							</p>
						</div>
						<button className={styles.btn}> Зыполните анкету</button>
					</div>
					<div className={styles.image}>
						<Image
							src={width <= 1023 ? mainBanner2_mini : mainBanner2}
							alt=''
						/>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Section_4
