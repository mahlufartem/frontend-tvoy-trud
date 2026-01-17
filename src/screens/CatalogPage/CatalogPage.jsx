import React from 'react'

import CategoriesSection from '@/screens/CatalogPage/sections/CategoriesSection/CategoriesSection'
import FiltersSection from '@/screens/CatalogPage/sections/FiltersSection/FiltersSection'
import TopSection from '@/screens/CatalogPage/sections/TopSection/TopSection'

import VacancyList from '@/components/VacancyList/VacancyList'

import styles from './CatalogPage.module.scss'

const CatalogPage = () => {
	return (
		<main className={styles.root}>
			<TopSection />
			<CategoriesSection />
			<div className={styles.content}>
				<div className={styles.desctopFilters}>
					<FiltersSection />
				</div>
				<VacancyList />
			</div>
		</main>
	)
}

export default CatalogPage
