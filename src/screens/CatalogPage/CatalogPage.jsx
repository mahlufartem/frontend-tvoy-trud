import React from 'react'

import { vacancyList } from '@/screens/CatalogPage/data'
import CategoriesSection from '@/screens/CatalogPage/sections/CategoriesSection/CategoriesSection'
import FiltersSection from '@/screens/CatalogPage/sections/FiltersSection/FiltersSection'
import TopSection from '@/screens/CatalogPage/sections/TopSection/TopSection'
import VacancyListSection from '@/screens/CatalogPage/sections/VacancyListSection/VacancyListSection'

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
				<VacancyListSection />
			</div>
		</main>
	)
}

export default CatalogPage
