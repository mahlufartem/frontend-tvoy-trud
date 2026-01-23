import Image from 'next/image'
import React from 'react'

import { list } from '@/assets/images'

import styles from './DetailedDescriptionSection.module.scss'

const DetailedDescriptionSection = () => {
	return (
		<div className={styles.root}>
			<div className={styles.header}>
				<Image
					src={list}
					alt=''
				/>
				<h4>Подробное описание операций</h4>
			</div>
		</div>
	)
}

export default DetailedDescriptionSection
