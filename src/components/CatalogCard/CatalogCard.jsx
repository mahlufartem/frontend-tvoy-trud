'use client'

import Link from 'next/link'
import React from 'react'

import MapIcon from '@/assets/icons/MapIcon'

import styles from './CatalogCard.module.scss'

const CatalogCard = ({ card }) => {
	const { id, title, info, coordinate, price } = card || {}

	const handleTakeOrder = e => {
		e.preventDefault()
		e.stopPropagation()
	}

	return (
		<Link
			href={`/vacancy/${id}`}
			className={styles.root}
		>
			<span className={styles.cardTitle}>{title}</span>

			<div className={styles.cardInfo}>
				<div className={styles.cardLogo}></div>
				<div className={styles.cardMeta}>
					<span className={styles.cardTime}>{info.time}</span>
					<span className={styles.cardAddress}>{info.address}</span>
					<div className={styles.showOnMap}>
						<MapIcon /> <span>Показать на карте</span>
					</div>
				</div>
			</div>

			<div className={styles.cardFooter}>
				<div className={styles.cardPrice}>
					<strong>{price.dayPrice}/смена</strong>
					<span>{price.hourPrice}/ч</span>
				</div>
				<button
					className={styles.takeOrder}
					onClick={handleTakeOrder}
				>
					Взять заказ
				</button>
			</div>
		</Link>
	)
}

export default CatalogCard
