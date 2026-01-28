import Link from 'next/link'
import React from 'react'

import ArrowRightTopIcon from '@/assets/icons/ArrowRightTopIcon'

import ReturnToBackButton from '@/components/ReturnToBackButton/ReturnToBackButton'

import styles from './InstructionsPage.module.scss'
import { instructions } from './data'

const InstructionsPage = () => {
	return (
		<main className={styles.root}>
			<div className={styles.header}>
				<ReturnToBackButton />
				<h4 className={styles.title}>Акции</h4>
			</div>

			<div className={styles.list}>
				{instructions.map(({ id, title, date }) => (
					<Link
						href={`/event/${id}`}
						key={id}
						className={styles.eventCard}
					>
						<div className={styles.image}></div>
						<div className={styles.info}>
							<div className={styles.date}>
								{date} <ArrowRightTopIcon />
							</div>
							<span>{title}</span>
						</div>
					</Link>
				))}
			</div>
		</main>
	)
}

export default InstructionsPage
