import React from 'react'

import VacanciesCarouselMin from '@/components/VacanciesCarouselMin/VacanciesCarouselMin'

import styles from './Section_4.module.scss'

const Section_4 = () => {
	return (
		<div className={styles.root}>
			<VacanciesCarouselMin />
			<div className={styles.baner}>
				<div className={styles.content}></div>
				<div className={styles.image}></div>
			</div>
		</div>
	)
}

export default Section_4
