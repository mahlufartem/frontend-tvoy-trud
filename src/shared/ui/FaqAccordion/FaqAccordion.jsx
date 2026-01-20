'use client'

import React, { useState } from 'react'

import clsx from 'clsx'

import CrossRoundedIcon from '@/assets/icons/CrossRoundedIcon'

import styles from './FaqAccordion.module.scss'

const FaqAccordion = ({
	items = [],
	title = 'Ответы на вопросы',
	variant = 'secondary'
}) => {
	const [activeId, setActiveId] = useState(null)

	const toggle = id => {
		setActiveId(prev => (prev === id ? null : id))
	}

	return (
		<div className={clsx(styles.root, styles[variant])}>
			<div className={styles.list}>
				{items.map(item => {
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
								<span className={styles.question}>{item.question}</span>

								<span className={styles.icon}>
									<CrossRoundedIcon />
								</span>
							</button>

							<div className={styles.body}>
								<div className={styles.bodyInner}>
									<p>{item.answer}</p>
								</div>
							</div>
						</div>
					)
				})}
			</div>
		</div>
	)
}

export default FaqAccordion
