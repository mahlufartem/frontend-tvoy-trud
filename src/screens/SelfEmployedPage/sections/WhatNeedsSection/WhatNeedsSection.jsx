import Image from 'next/image'
import React from 'react'

import { duties } from '@/screens/SelfEmployedPage/sections/WhatNeedsSection/data'

import { question } from '@/assets/images'

import styles from './WhatNeedsSection.module.scss'

const WhatNeedsSection = () => {
	return (
		<section className={styles.root}>
			<div className={styles.container}>
				<div className={styles.header}>
					<Image
						src={question}
						alt=''
					/>
					<h4>Что предстоит делать?</h4>
				</div>
				<div className={styles.list}>
					{duties.map(item => (
						<div
							key={item.id}
							className={styles.duty}
						>
							<span>{item.title}</span>
							<p>{item.text}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default WhatNeedsSection
