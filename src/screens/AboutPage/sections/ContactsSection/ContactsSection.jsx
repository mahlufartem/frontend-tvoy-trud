import React from 'react'

import MapIcon from '@/assets/icons/MapIcon'
import PencilIcon from '@/assets/icons/PencilIcon'

import styles from './ContactsSection.module.scss'

const ContactsSection = () => {
	return (
		<div
			className={styles.root}
			id='contacts'
		>
			<div className={styles.title}>
				<h1>Контакты в г. Ярославль</h1>
				<PencilIcon />
			</div>
			<div className={styles.content}>
				<div className={styles.left}></div>
				<div className={styles.right}>
					<h4>Офис в г. Ярославль</h4>
					<div className={styles.info}>
						<span>
							г. Ярославль, ул. Подольская, д. 1, этаж 1, помещение 1, комната 1
						</span>
						<span>пн - вс: 8:00 - 18:00</span>
						<span>
							tvojtrud@gmail.com <br />
							+7 900 800 70 60
						</span>
					</div>
					<div className={styles.mapBtn}>
						<MapIcon />
						<span>Показать на карте</span>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ContactsSection
