'use client'

import Link from 'next/link'
import React, { useState } from 'react'

import clsx from 'clsx'

import { APP_ROUTES } from '@/constants/routes'

import CrossRoundedIcon from '@/assets/icons/CrossRoundedIcon'

import { faq } from '@/components/FAQ/data'

import styles from './FAQ.module.scss'

const FAQ = ({ title = 'Ответы на вопросы', variant = 'secondary' }) => {
	const [activeId, setActiveId] = useState(null)

	const toggle = id => {
		setActiveId(prev => (prev === id ? null : id))
	}

	return (
		<div className={clsx(styles.root, styles[variant])}>
			<h2>Ответы на частые вопросы</h2>
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

			<Link
				href={APP_ROUTES.primary.knowledgeBase}
				className={styles.all}
			>
				Все вопросы
			</Link>
		</div>
	)
}

export default FAQ
