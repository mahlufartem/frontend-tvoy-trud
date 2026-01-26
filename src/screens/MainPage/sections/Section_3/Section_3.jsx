'use client'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import { APP_ROUTES } from '@/constants/routes'

import { useCatalogFiltersStore } from '@/store/catalogFiltersStore'

import { mapPlag } from '@/assets/images'
import { mapItem_1, mapItem_2, mapItem_3 } from '@/assets/images/map_items'

import SearchInput from '@/shared/ui/SearchInput/SearchInput'

import styles from './Section_3.module.scss'

const mapItems = [
	{ id: 1, image: mapItem_1 },
	{ id: 2, image: mapItem_3 },
	{ id: 3, image: mapItem_2 },
	{ id: 4, image: mapItem_1 },
	{ id: 5, image: mapItem_3 },
	{ id: 6, image: mapItem_2 }
]
const Section_3 = () => {
	const { setView } = useCatalogFiltersStore()

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
					<Link
						href={APP_ROUTES.primary.catalog}
						onClick={() => setView('map')}
					>
						<Image
							src={mapPlag}
							alt='Карта'
							fill
							priority
							style={{ objectFit: 'cover' }}
						/>
					</Link>
					<div className={styles.mapItems}>
						<div className={styles.mapItems}>
							{mapItems.map((item, index) => (
								<div
									key={item.id}
									className={`${styles.mapItem} ${styles[`item_${index + 1}`]}`}
								>
									<Image
										src={item.image}
										alt=''
										fill
									/>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Section_3
