import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import ArrowRightTopIcon from '@/assets/icons/ArrowRightTopIcon'

import ReturnToBackButton from '@/components/ReturnToBackButton/ReturnToBackButton'

import styles from './InstructionsPage.module.scss'
import { vacancies } from './data'

const InstructionsPage = () => {
	return (
		<main className={styles.root}>
			<div className={styles.header}>
				<ReturnToBackButton />
				<h4 className={styles.title}>Инструкции профессий</h4>
			</div>

			<div className={styles.list}>
				{vacancies.map(({ id, title, img }) => (
					<Link
						href={`/instruction/${id}`}
						key={id}
						className={styles.card}
					>
						<div className={styles.image}>
							<Image
								src={img}
								alt=''
							/>
						</div>
						<div className={styles.info}>
							<span>{title}</span>
						</div>
					</Link>
				))}
			</div>
		</main>
	)
}

export default InstructionsPage
