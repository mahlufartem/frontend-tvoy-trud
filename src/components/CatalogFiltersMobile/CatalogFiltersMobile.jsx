import React from 'react'

import clsx from 'clsx'

import FiltersSection from '@/screens/CatalogPage/sections/FiltersSection/FiltersSection'

import { useCatalogFiltersStore } from '@/store/catalogFiltersStore'

import CrossIcon from '@/assets/icons/CrossIcon'

import styles from './CatalogFiltersMobile.module.scss'

const CatalogFiltersMobile = () => {
	const { isMobileFiltersOpen, toggleMobileFilters } = useCatalogFiltersStore()

	return (
		<div
			className={clsx(styles.overlay, {
				[styles.overlayVisible]: isMobileFiltersOpen
			})}
			onClick={toggleMobileFilters}
		>
			<div
				className={clsx(styles.menu, {
					[styles.menuOpen]: isMobileFiltersOpen
				})}
				onClick={e => e.stopPropagation()}
			>
				<div className={styles.header}>
					<h4>Фильтр по вакансиям</h4>
					<span onClick={toggleMobileFilters}>
						<CrossIcon />
					</span>
				</div>

				<FiltersSection />
			</div>
		</div>
	)
}

export default CatalogFiltersMobile
