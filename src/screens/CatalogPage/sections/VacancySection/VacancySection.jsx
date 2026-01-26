'use client'

import Image from 'next/image'
import React from 'react'

import { vacancyList } from '@/screens/CatalogPage/data'

import { useCatalogFiltersStore } from '@/store/catalogFiltersStore'

import { mapPlag } from '@/assets/images'

import VacancyList from '@/components/VacancyList/VacancyList'

import styles from './VacancySection.module.scss'

const VacancySection = () => {
	const { view, setView } = useCatalogFiltersStore()

	return (
		<section className={styles.root}>
			{view === 'map' ? (
				<div className={styles.map}>
					<Image
						src={mapPlag}
						width={400}
						height={300}
						priority
						alt=''
					/>
				</div>
			) : (
				<VacancyList items={vacancyList} />
			)}
		</section>
	)
}

export default VacancySection
