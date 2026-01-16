'use client'

import React, { useEffect } from 'react'

import clsx from 'clsx'

import FiltersSection from '@/screens/CatalogPage/sections/FiltersSection/FiltersSection'

import { useCatalogFiltersStore } from '@/store/catalogFiltersStore'

import CrossIcon from '@/assets/icons/CrossIcon'

import styles from './CatalogFiltersMobile.module.scss'

const CatalogFiltersMobile = () => {
	const { isMobileFiltersOpen, toggleMobileFilters } = useCatalogFiltersStore()

	// Блокировка скролла при открытии фильтров
	useEffect(() => {
		if (isMobileFiltersOpen) {
			// Сохраняем текущую позицию скролла
			const scrollY = window.scrollY

			// Блокируем скролл
			document.body.style.position = 'fixed'
			document.body.style.top = `-${scrollY}px`
			document.body.style.width = '100%'
			document.body.style.overflow = 'hidden'

			return () => {
				// Разблокируем скролл и восстанавливаем позицию
				document.body.style.position = ''
				document.body.style.top = ''
				document.body.style.width = ''
				document.body.style.overflow = ''
				window.scrollTo(0, scrollY)
			}
		}
	}, [isMobileFiltersOpen])

	return (
		<div
			className={clsx(styles.overlay, {
				[styles.overlayVisible]: isMobileFiltersOpen
			})}
			onClick={toggleMobileFilters}
		>
			<div
				className={clsx(styles.menu, {
					[styles.menuOpen]: isMobileFiltersOpen
				})}
				onClick={e => e.stopPropagation()}
			>
				<div className={styles.header}>
					<h4>Фильтр по вакансиям</h4>
					<span onClick={toggleMobileFilters}>
						<CrossIcon />
					</span>
				</div>

				<FiltersSection />
			</div>
		</div>
	)
}

export default CatalogFiltersMobile
