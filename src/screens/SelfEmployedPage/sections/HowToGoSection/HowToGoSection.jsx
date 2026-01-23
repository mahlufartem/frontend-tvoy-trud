import Image from 'next/image'
import React from 'react'

import { mapLabel, yandexMap } from '@/assets/images'

import styles from './HowToGoSection.module.scss'

const HowToGoSection = () => {
	return (
		<section className={styles.root}>
			<div className={styles.container}>
				<div className={styles.header}>
					<Image
						src={mapLabel}
						alt=''
					/>
					<h4>Как к нам добраться?</h4>
				</div>
				<div className={styles.list}>
					<div className={styles.row}>
						<Image
							src={yandexMap}
							alt=''
						/>
						<p>
							От остановки Империя автобусом № 429 до остановки пос.
							Преображенка далее пешком 3,1 км
						</p>
					</div>
					<div className={styles.row}>
						<Image
							src={yandexMap}
							alt=''
						/>
						<p>
							От автостанции Аврора маршрутным такси № 141 до остановки Южный
							город или автобусом № 429 до остановки пос. Преображенка далее
							пешком 3,1 км
						</p>
					</div>
					<div className={styles.row}>
						<Image
							src={yandexMap}
							alt=''
						/>
						<p>
							От остановки Империя автобусом № 429 до остановки пос.
							Преображенка далее пешком 3,1 км
						</p>
					</div>
				</div>
			</div>
		</section>
	)
}

export default HowToGoSection
