import Image from 'next/image'
import React from 'react'

import clsx from 'clsx'

import { conditions } from '@/screens/SelfEmployedPage/sections/UniqueConditionsSection/data'

import { flash, warning } from '@/assets/images'

import styles from './UniqueConditionsSection.module.scss'

const UniqueConditionsSection = () => {
	return (
		<div className={styles.root}>
			<div className={styles.title}>
				<Image
					src={flash}
					alt=''
				/>
				<h2>Присоединяйся к нам и получи уникальные условия:</h2>
			</div>
			<div className={styles.list}>
				{conditions.main.map(item => (
					<div
						className={styles.condition}
						key={item.id}
					>
						<span className={styles.conditionLine}>/</span>
						<span className={styles.conditionTitle}>
							{item.title}
							<span>{item.condition}</span>
						</span>
					</div>
				))}
			</div>

			<div className={styles.warning}>
				<div className={styles.warningTitle}>
					<Image
						src={warning}
						alt=''
					/>
					<span>Важно!</span>
				</div>
				<p>
					На КПП сообщить, что Вы пришли от ПОЧТА EКOM. Если Вас нет в списках,
					то обратитесь в диспетчерскую, покажите QR код с заданием для
					оформления пропуска. Доступ на территорию осуществляется не ранее, чем
					за час до начала смены
				</p>
			</div>

			<div className={clsx(styles.list, styles.hide)}>
				<h4>Стоимость за одну операцию:</h4>
				{conditions.second.map(item => (
					<div
						className={styles.condition}
						key={item.id}
					>
						<span className={styles.conditionLine}>/</span>
						<span className={styles.conditionTitle}>
							{item.title}
							<span>{item.condition}</span>
						</span>
					</div>
				))}
				<p>Распределение по операциям происходит на складе в начале смены</p>
			</div>

			<div className={styles.averageVolume}>
				<h4>Средний объем операций на человека:</h4>
				<span>400 + штук в час</span>
			</div>
		</div>
	)
}

export default UniqueConditionsSection
