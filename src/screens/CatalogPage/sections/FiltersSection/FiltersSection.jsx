'use client'

import React, { useState } from 'react'

import { useCatalogFiltersStore } from '@/store/catalogFiltersStore'

import MultiSelectFilter from '@/components/MultiSelectFilter/MultiSelectFilter'

import DatePicker from '@/shared/ui/DatePicker/DatePicker'
import SearchRadius from '@/shared/ui/SearchRadius/SearchRadius'
import TimePicker from '@/shared/ui/TimePicker/TimePicker'

import styles from './FiltersSection.module.scss'

// Мок-данные для фильтров
const brands = [
	{ id: 1, label: 'Ашан' },
	{ id: 2, label: 'Дикси' },
	{ id: 3, label: 'Лента' },
	{ id: 4, label: 'Магнит' },
	{ id: 5, label: 'Пятёрочка' }
]

const orderTypes = [
	{ id: 21, label: 'Тип заказа 1' },
	{ id: 22, label: 'Тип заказа 2' },
	{ id: 23, label: 'Тип заказа 3' },
	{ id: 24, label: 'Тип заказа 4' },
	{ id: 25, label: 'Тип заказа 5' }
]
const FiltersSection = () => {
	const [radius, setRadius] = useState(0)
	const [date, setDate] = useState('')
	const [startTime, setStartTime] = useState('09:00')
	const [endTime, setEndTime] = useState('09:00')

	const { isAccordionOpen, toggleAccordion, filters, setFilter, resetFilters } =
		useCatalogFiltersStore()

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
				<MultiSelectFilter
					title='Торговые бренды'
					items={brands}
					value={filters.brands}
					onChange={v => setFilter('brands', v)}
					isOpen={isAccordionOpen('brands')}
					onToggle={() => toggleAccordion('brands')}
				/>
			</div>

			<div className={styles.filterBlock}>
				<MultiSelectFilter
					title='Тип заказа'
					items={orderTypes}
					value={filters.orderTypes}
					onChange={v => setFilter('orderTypes', v)}
					isOpen={isAccordionOpen('orderTypes')}
					onToggle={() => toggleAccordion('orderTypes')}
				/>
			</div>

			<div className={styles.footer}>
				<button>Взять заказ</button>
				<button onClick={resetFilters}>Сбросить</button>
			</div>
		</section>
	)
}

export default FiltersSection
