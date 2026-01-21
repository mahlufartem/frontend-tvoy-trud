'use client'

import React from 'react'

import useScrollFromQuery from '@/hooks/useScrollFromQuery'

import { docs } from '@/screens/AboutPage/sections/DocSection/data'

import ArrowRightTopIcon from '@/assets/icons/ArrowRightTopIcon'
import DocIcon from '@/assets/icons/DocIcon'

import styles from './DocSection.module.scss'

const DocSection = () => {
	useScrollFromQuery()

	return (
		<div
			className={styles.root}
			id='documents'
		>
			<h4 className={styles.title}>Документы</h4>
			<div className={styles.list}>
				{docs.map(doc => (
					<a
						key={doc.id}
						className={styles.doc}
						href={doc.href}
						target='_blank'
					>
						<div className={styles.left}>
							<DocIcon />
							<span>{doc.title}</span>
						</div>

						<ArrowRightTopIcon />
					</a>
				))}
			</div>
		</div>
	)
}

export default DocSection
