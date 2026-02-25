import React from 'react'

import VacanciesCarousel from '@/components/VacanciesCarousel/VacanciesCarousel'

import styles from './VacanciesSection.module.scss'

const VacanciesSection = () => {
	return (
		<section>
			<VacanciesCarousel
				title='Выберите подходящую подработку для Вас'
				headerStyles={styles.title}
			/>
		</section>
	)
}

export default VacanciesSection
