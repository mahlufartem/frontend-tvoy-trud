import React from 'react'

import { vacancyList } from '@/screens/CatalogPage/data'
import CategoriesSection from '@/screens/CatalogPage/sections/CategoriesSection/CategoriesSection'
import FiltersSection from '@/screens/CatalogPage/sections/FiltersSection/FiltersSection'
import TopSection from '@/screens/CatalogPage/sections/TopSection/TopSection'

import CatalogCard from '@/components/CatalogCard/CatalogCard'

import styles from './CatalogPage.module.scss'

const CatalogPage = () => {
	return (
		<main className={styles.root}>
			<TopSection />
			<CategoriesSection />
			<div className={styles.content}>
				<FiltersSection />
				<section className={styles.list}>
					{vacancyList.map(vacancy => (
						<CatalogCard
							key={vacancy.id}
							card={vacancy}
						/>
					))}
				</section>
			</div>
		</main>
	)
}

export default CatalogPage
