import Image from 'next/image'
import React from 'react'

import { requirements } from '@/screens/SelfEmployedBookletPage/sections/WorkScheduleSection/data'

import { clock } from '@/assets/images'

import styles from './WorkScheduleSection.module.scss'

const WorkScheduleSection = () => {
	return (
		<section className={styles.root}>
			<div className={styles.header}>
				<Image
					src={clock}
					alt=''
				/>
				<h4>График работы</h4>
			</div>

			<div className={styles.workShifts}>
				<h6>Склад работает в несколько смен:</h6>
				<div className={styles.shift}>
					<span className={styles.slash}>/</span>
					<span className={styles.time}>Дневная: 08:30 — 20:30</span>
				</div>
				<div className={styles.shift}>
					<span className={styles.slash}>/</span>
					<span className={styles.time}>Ночная: 20:30 — 08:30</span>
				</div>
			</div>

			<div className={styles.requirements}>
				<h6>Требования к рабочему времени:</h6>
				{requirements.map(item => (
					<div
						key={item.id}
						className={styles.requirement}
					>
						<span>{item.title}</span>
						<p>{item.text}</p>
					</div>
				))}
			</div>
		</section>
	)
}

export default WorkScheduleSection
