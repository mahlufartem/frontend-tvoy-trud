import Image from 'next/image'
import React from 'react'

import { listV2 } from '@/assets/images'

import styles from './NextStepsSection.module.scss'
import { steps } from './data'

const NextStepsSection = () => {
	return (
		<section className={styles.root}>
			<div className={styles.container}>
				<div className={styles.header}>
					<Image
						src={listV2}
						alt=''
					/>
					<h4>Последующие шаги</h4>
				</div>
				<div className={styles.list}>
					{steps.map(item => (
						<div
							className={styles.step}
							key={item.id}
						>
							<span className={styles.stepLine}>/</span>
							<span className={styles.stepText}>{item.text}</span>
						</div>
					))}
				</div>
				<div className={styles.info}>
					<p>
						При первичной явке начальник смены прикрепляет к опытному сотруднику
						площадки для обучения
					</p>
				</div>
			</div>
		</section>
	)
}

export default NextStepsSection
