import Image from 'next/image'
import React from 'react'

import { logo, logoMobile } from '@/assets/images'

import styles from './not-found.module.scss'

const NotFound = () => {
	return (
		<div className={styles.root}>
			<div className={styles.content}>
				<Image
					src={logoMobile}
					alt=''
				/>
				<h1>Страница не найдена</h1>
			</div>
		</div>
	)
}

export default NotFound
