'use client'

import React, { useState } from 'react'

import DatePicker from '@/shared/ui/DatePicker/DatePicker'
import SearchRadius from '@/shared/ui/SearchRadius/SearchRadius'
import TimePicker from '@/shared/ui/TimePicker/TimePicker'

import styles from './FiltersSection.module.scss'

const FiltersSection = () => {
	const [radius, setRadius] = useState(0)
	const [date, setDate] = useState('')
	const [startTime, setStartTime] = useState('09:00')
	const [endTime, setEndTime] = useState('09:00')

	return (
		<section className={styles.root}>
			<div className={styles.filterBlock}>
				<SearchRadius
					value={radius}
					onChange={setRadius}
					min={0}
					max={100}
				/>
			</div>

			<div className={styles.filterBlock}>
				<DatePicker
					label='Дата выхода на смену'
					value={date}
					onChange={setDate}
				/>
			</div>

			<div className={styles.filterBlock}>
				<div className={styles.row}>
					<TimePicker
						label='Начало с'
						value={startTime}
						onChange={setStartTime}
						step={30}
					/>
					<TimePicker
						label='Завершение до'
						value={endTime}
						onChange={setEndTime}
					/>
				</div>
			</div>

			<div className={styles.filterBlock}>
				<h3 className={styles.filterTitle}>Время</h3>
				<div className={styles.timeRange} />
			</div>

			<div className={styles.filterAccordion}>
				<h3 className={styles.filterTitle}>Торговые бренды</h3>
				<div className={styles.checkboxList} />
			</div>

			<div className={styles.filterAccordion}>
				<h3 className={styles.filterTitle}>Тип заказа</h3>
			</div>

			<div className={styles.filterAccordion}>
				<h3 className={styles.filterTitle}>Станции метро</h3>
			</div>

			<div className={styles.filterActions}>
				<button className={styles.applyButton}>Применить</button>
				<button className={styles.resetButton}>Сбросить</button>
			</div>
		</section>
	)
}

export default FiltersSection
