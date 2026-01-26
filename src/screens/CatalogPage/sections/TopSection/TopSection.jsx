'use client'

import React, { useState } from 'react'

import clsx from 'clsx'

import { useCatalogFiltersStore } from '@/store/catalogFiltersStore'

import ArrowDownIcon from '@/assets/icons/ArrowDownIcon'
import FiltersIcon from '@/assets/icons/FiltersIcon'
import ListIcon from '@/assets/icons/ListIcon'
import MapIcon from '@/assets/icons/MapIcon'

import CatalogFiltersMobile from '@/components/CatalogFiltersMobile/CatalogFiltersMobile'

import Dropdown from '@/shared/ui/Dropdown/Dropdown'
import SearchInput from '@/shared/ui/SearchInput/SearchInput'

import styles from './TopSection.module.scss'

export const cities = [
	{ id: 1, label: 'Ростов-На-Дону' },
	{ id: 2, label: 'Аксай' },
	{ id: 3, label: 'Нвочеркаск' }
]

const TopSection = () => {
	const [view, setView] = useState('list')
	const [city, setCity] = useState('')
	const { isMobileFiltersOpen, activeFiltersCount, toggleMobileFilters } =
		useCatalogFiltersStore()

	const filtersCount = activeFiltersCount()
	console.log('filtersCount', filtersCount)
	return (
		<section className={styles.root}>
			<div className={styles.searchGroup}>
				<div className={styles.searchInputWrapper}>
					<SearchInput className={styles.searchInput} />
				</div>
				<div className={styles.controls}>
					<Dropdown
						placeholder='Выберите город'
						options={cities}
						value={city}
						onChange={setCity}
						className={styles.cityBtn}
					/>
					<button
						className={styles.filtersToggle}
						onClick={toggleMobileFilters}
					>
						<FiltersIcon />
						{filtersCount > 0 && (
							<span className={styles.badge}>{filtersCount}</span>
						)}
					</button>
					<button className={styles.searchBtn}>Найти</button>
				</div>
			</div>
			<div className={styles.viewGroup}>
				<h1 className={styles.title}>18 вакансий в Санкт-Петербурге</h1>
				<div className={styles.viewSwitch}>
					<button
						className={clsx(styles.viewBtn, view === 'map' && styles.active)}
						onClick={() => setView('map')}
					>
						<MapIcon /> <span>Карта</span>
					</button>
					<button
						className={clsx(styles.viewBtn, view === 'list' && styles.active)}
						onClick={() => setView('list')}
					>
						<ListIcon />
						<span>Список</span>
					</button>
				</div>
			</div>
			<CatalogFiltersMobile />
		</section>
	)
}

export default TopSection
