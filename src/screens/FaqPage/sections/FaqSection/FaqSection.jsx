'use client'

import React, { useState } from 'react'

import CrossRoundedIcon from '@/assets/icons/CrossRoundedIcon'

import FaqAccordion from '@/shared/ui/FaqAccordion/FaqAccordion'

import styles from './FaqSection.module.scss'

// TODO: Компонент переиспользуется. Вынести в components!
const FaqSection = ({ questions, rootStyles }) => {
	const [activeId, setActiveId] = useState(1)

	const isSingle = questions.length === 1

	const toggle = id => {
		setActiveId(prev => (prev === id ? null : id))
	}
	return (
		<div
			className={styles.root}
			style={rootStyles}
		>
			{questions.map(item => {
				const isActive = item.id === activeId

				return (
					<div
						key={item.id}
						className={`${styles.item} ${isActive ? styles.active : ''}`}
					>
						<button
							className={styles.head}
							onClick={() => {
								!isSingle && toggle(item.id)
							}}
							aria-expanded={isActive}
						>
							<span
								className={styles.question}
								style={{ color: isSingle && '#000' }}
							>
								{item.label}
							</span>

							{!isSingle && (
								<span className={styles.icon}>
									<CrossRoundedIcon />
								</span>
							)}
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
