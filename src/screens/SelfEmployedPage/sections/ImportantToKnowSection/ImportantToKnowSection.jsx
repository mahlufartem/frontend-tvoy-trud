import Image from 'next/image'
import React from 'react'

import { pin } from '@/assets/images'

import styles from './ImportantToKnowSection.module.scss'
import { data } from './data'

const ImportantToKnowSection = () => {
	return (
		<section className={styles.root}>
			<div className={styles.header}>
				<Image
					src={pin}
					alt=''
				/>
				<h4>Что важно знать:</h4>
			</div>
			<div className={styles.list}>
				{data.items.map(item => (
					<div
						className={styles.item}
						key={item.id}
					>
						<span className={styles.itemLine}>/</span>
						<span className={styles.itemText}>{item.text}</span>
					</div>
				))}
			</div>
			<div className={styles.steps}>
				<h4>Инструкция по деактивации контракта с WB в приложении WB Job</h4>
				{data.steps.map((step, idx) => (
					<div className={styles.step}>
						<span>{`Шаг ${idx + 1}`}</span>
						<p>{step.text}</p>
					</div>
				))}
			</div>
		</section>
	)
}

export default ImportantToKnowSection
