'use client'

import Image from 'next/image'
import React from 'react'

import { mapPlag } from '@/assets/images'

import SearchInput from '@/shared/ui/SearchInput/SearchInput'

import styles from './Section_3.module.scss'

const Section_3 = () => {
	return (
		<section className={styles.root}>
			<div className={styles.cityVacanci}>
				<div className={styles.search}>
					<span className={styles.title}>
						18 вакансий <br /> в вашем городе
					</span>
					<span className={styles.subtitle}>
						Найти подработку очень просто!
					</span>

					<SearchInput
						className={styles.searchInput}
						iconClassName={styles.searchIcon}
						iconPosition='right'
					/>
				</div>
				<div className={styles.map}>
					<Image
						src={mapPlag}
						alt='Карта'
						fill
						priority
						style={{ objectFit: 'cover' }}
					/>
				</div>
			</div>
		</section>
	)
}

export default Section_3
