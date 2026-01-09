'use client'

import React from 'react'

import VacanciesCarousel from '@/components/VacanciesCarousel/VacanciesCarousel'

import styles from './Section_2.module.scss'

const Section_2 = () => {
	return (
		<section className={styles.root}>
			<VacanciesCarousel />
		</section>
	)
}

export default Section_2
