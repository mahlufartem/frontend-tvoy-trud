'use client'

import React, { useState } from 'react'

import clsx from 'clsx'

import ArrowDownIcon from '@/assets/icons/ArrowDownIcon'
import ListIcon from '@/assets/icons/ListIcon'
import MapIcon from '@/assets/icons/MapIcon'

import SearchInput from '@/shared/ui/SearchInput/SearchInput'

import styles from './TopSection.module.scss'

const TopSection = () => {
	const [view, setView] = useState('list')

	return (
		<section className={styles.root}>
			<div className={styles.searchGroup}>
				<div className={styles.searchInputWrapper}>
					<SearchInput className={styles.searchInput} />
				</div>
				<div className={styles.controls}>
					<button className={styles.cityBtn}>
						<span>г. Ярославль</span>
						<ArrowDownIcon />
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
		</section>
	)
}

export default TopSection
