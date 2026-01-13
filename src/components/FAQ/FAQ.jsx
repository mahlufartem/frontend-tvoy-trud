'use client'

import React, { useState } from 'react'

import CloseRoundedIcon from '@/assets/icons/CloseRoundedIcon'
import CrossRoundedIcon from '@/assets/icons/CrossRoundedIcon'

import { faq } from '@/components/FAQ/data'

import styles from './FAQ.module.scss'

const FAQ = () => {
	const [activeId, setActiveId] = useState(1)

	const toggle = id => {
		setActiveId(prev => (prev === id ? null : id))
	}

	return (
		<div className={styles.root}>
			<h2 className={styles.title}>Ответы на вопросы</h2>

			<div className={styles.list}>
				{faq.map(item => {
					const isActive = item.id === activeId

					return (
						<div
							key={item.id}
							className={`${styles.item} ${isActive ? styles.active : ''}`}
						>
							<button
								className={styles.head}
								onClick={() => toggle(item.id)}
							>
								<span className={styles.question}>{item.question}</span>

								<div className={styles.icon}>
									{isActive ? <CloseRoundedIcon /> : <CrossRoundedIcon />}
								</div>
							</button>

							<div className={styles.body}>
								<p>{item.answer}</p>
							</div>
						</div>
					)
				})}
			</div>

			<button className={styles.all}>Все вопросы</button>
		</div>
	)
}

export default FAQ
