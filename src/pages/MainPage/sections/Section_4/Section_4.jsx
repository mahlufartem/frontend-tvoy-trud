import Image from 'next/image'
import React from 'react'

import { mainBanner2 } from '@/assets/images'

import VacanciesCarouselMin from '@/components/VacanciesCarouselMin/VacanciesCarouselMin'

import styles from './Section_4.module.scss'

const Section_4 = () => {
	return (
		<div className={styles.root}>
			<VacanciesCarouselMin />
			<div className={styles.bannerWrapper}>
				<div className={styles.banner}>
					<div className={styles.content}></div>
					<div className={styles.image}>
						<Image
							src={mainBanner2}
							alt=''
						/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Section_4
