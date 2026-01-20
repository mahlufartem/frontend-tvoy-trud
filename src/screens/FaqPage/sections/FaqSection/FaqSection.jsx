'use client'

import React, { useState } from 'react'

import CrossRoundedIcon from '@/assets/icons/CrossRoundedIcon'

import FaqAccordion from '@/shared/ui/FaqAccordion/FaqAccordion'

import styles from './FaqSection.module.scss'

const FaqSection = ({ questions }) => {
	const [activeId, setActiveId] = useState(1)

	const toggle = id => {
		setActiveId(prev => (prev === id ? null : id))
	}
	return (
		<div className={styles.root}>
			{questions.map(item => {
				const isActive = item.id === activeId

				return (
					<div
						key={item.id}
						className={`${styles.item} ${isActive ? styles.active : ''}`}
					>
						<button
							className={styles.head}
							onClick={() => toggle(item.id)}
							aria-expanded={isActive}
						>
							<span className={styles.question}>{item.label}</span>

							<span className={styles.icon}>
								<CrossRoundedIcon />
							</span>
						</button>

						<div className={styles.body}>
							<div className={styles.bodyInner}>
								<FaqAccordion items={item.questions} />
							</div>
						</div>
					</div>
				)
			})}
		</div>
	)
}

export default FaqSection
