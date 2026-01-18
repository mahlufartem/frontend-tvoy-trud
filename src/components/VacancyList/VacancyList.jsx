import React from 'react'

import CatalogCard from '@/components/CatalogCard/CatalogCard'

import styles from './VacancyList.module.scss'

const VacancyList = ({ items }) => {
	return (
		<section className={styles.root}>
			{items.map(vacancy => (
				<CatalogCard
					key={vacancy.id}
					card={vacancy}
				/>
			))}
		</section>
	)
}

export default VacancyList
