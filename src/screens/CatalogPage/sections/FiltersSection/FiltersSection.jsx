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
	const { filters, setFilter, resetFilters, isAccordionOpen, toggleAccordion } =
		useCatalogFiltersStore()

	return (
		<section className={styles.root}>
			<div className={styles.filterBlock}>
				<SearchRadius
					value={filters.radius}
					onChange={v => setFilter('radius', v)}
					min={0}
					max={100}
				/>
			</div>

			<div className={styles.filterBlock}>
				<DatePicker
					label='Дата выхода на смену'
					value={filters.date}
					onChange={v => setFilter('date', v)}
				/>
			</div>

			<div className={styles.filterBlock}>
				<div className={styles.row}>
					<TimePicker
						label='Начало с'
						value={filters.startTime}
						onChange={v => setFilter('startTime', v)}
						step={30}
					/>
					<TimePicker
						label='Завершение до'
						value={filters.endTime}
						onChange={v => setFilter('endTime', v)}
					/>
				</div>
			</div>

			<div className={styles.filterBlock}>
				<MultiSelectFilter
					title='Торговые бренды'
					placeholder='Название бренда'
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
					placeholder='Тип заказа'
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
