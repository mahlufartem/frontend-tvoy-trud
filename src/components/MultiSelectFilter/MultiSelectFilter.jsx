'use client'

import React, { useMemo, useState } from 'react'

import styles from './MultiSelectFilter.module.scss'

const MultiSelectFilter = ({
	title,
	items = [],
	value = [],
	onChange,
	isOpen,
	onToggle,
	placeholder = 'Поиск'
}) => {
	const [search, setSearch] = useState('')
	const safeValue = Array.isArray(value) ? value : []

	const filteredItems = useMemo(() => {
		const q = search.toLowerCase()
		return items.filter(item => item.label.toLowerCase().includes(q))
	}, [items, search])

	const isAllSelected =
		filteredItems.length > 0 &&
		filteredItems.every(item => safeValue.includes(item.id))

	const toggleItem = id => {
		onChange(
			safeValue.includes(id)
				? safeValue.filter(v => v !== id)
				: [...safeValue, id]
		)
	}

	const toggleAll = () => {
		if (isAllSelected) {
			onChange(safeValue.filter(id => !filteredItems.some(i => i.id === id)))
		} else {
			const idsToAdd = filteredItems
				.map(i => i.id)
				.filter(id => !safeValue.includes(id))

			onChange([...safeValue, ...idsToAdd])
		}
	}

	return (
		<div className={styles.root}>
			<div
				className={styles.header}
				onClick={onToggle}
			>
				<div className={`${styles.arrow} ${isOpen ? styles.open : ''}`} />
				<span className={styles.title}>{title}</span>
			</div>

			{isOpen && (
				<div className={styles.content}>
					<div className={styles.search}>
						<input
							placeholder={placeholder}
							value={search}
							onChange={e => setSearch(e.target.value)}
						/>
					</div>

					<div className={styles.list}>
						<label className={styles.item}>
							<input
								type='checkbox'
								checked={isAllSelected}
								onChange={toggleAll}
							/>
							<span className={styles.checkbox} />
							<span>Выбрать всё</span>
						</label>

						{filteredItems.map(item => (
							<label
								key={item.id}
								className={styles.item}
							>
								<input
									type='checkbox'
									checked={safeValue.includes(item.id)}
									onChange={() => toggleItem(item.id)}
								/>
								<span className={styles.checkbox} />
								<span>{item.label}</span>
							</label>
						))}
					</div>
				</div>
			)}
		</div>
	)
}

export default MultiSelectFilter
