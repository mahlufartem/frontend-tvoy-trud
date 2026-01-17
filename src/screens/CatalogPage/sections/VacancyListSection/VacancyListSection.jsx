import React from 'react'

import { vacancyList } from '@/screens/CatalogPage/data'

import CatalogCard from '@/components/CatalogCard/CatalogCard'

import styles from './VacancyListSection.module.scss'

const VacancyListSection = () => {
	return (
		<section className={styles.root}>
			{vacancyList.map(vacancy => (
				<CatalogCard
					key={vacancy.id}
					card={vacancy}
				/>
			))}
		</section>
	)
}

export default VacancyListSection
