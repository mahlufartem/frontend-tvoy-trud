import Image from 'next/image'
import React from 'react'

import { coin } from '@/assets/images'

import styles from './PayOrderSection.module.scss'

const PayOrderSection = () => {
	return (
		<section className={styles.root}>
			<div className={styles.container}>
				<div className={styles.header}>
					<Image
						src={coin}
						alt=''
					/>
					<h4>Порядок оплаты заказа:</h4>
				</div>
				<div className={styles.info}>
					<h4>Оплата за выполненные заказы</h4>
					<span>С понедельника по четверг – оплата на следующий день</span>
					<span>С пятницы по воскресенье – в понедельник</span>
				</div>
			</div>
		</section>
	)
}

export default PayOrderSection
