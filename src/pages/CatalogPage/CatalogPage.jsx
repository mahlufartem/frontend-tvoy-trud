import React from 'react'

import CategoriesSection from '@/pages/CatalogPage/sections/CategoriesSection/CategoriesSection'
import TopSection from '@/pages/CatalogPage/sections/TopSection/TopSection'

import styles from './CatalogPage.module.scss'

const CatalogPage = () => {
	return (
		<main className={styles.root}>
			<TopSection />

			{/* -------- Categories / chips -------- */}
			<CategoriesSection />

			{/* -------- Content layout -------- */}
			<div className={styles.content}>
				{/* ===== Filters sidebar (desktop) ===== */}
				<aside className={styles.filters}>
					<div className={styles.filterBlock}>
						<h3 className={styles.filterTitle}>Радиус поиска</h3>
						<div className={styles.range} />
					</div>

					<div className={styles.filterBlock}>
						<h3 className={styles.filterTitle}>Дата выхода на смену</h3>
						<div className={styles.datePicker} />
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
				</aside>

				{/* ===== Vacancy list ===== */}
				<section className={styles.list}>
					<div className={styles.card}>
						<div className={styles.cardHeader}>
							<div className={styles.cardLogo} />
							<h3 className={styles.cardTitle}>
								Работник торгового зала / продавец
							</h3>
						</div>

						<div className={styles.cardMeta}>
							<span className={styles.cardTime} />
							<span className={styles.cardAddress} />
							<button className={styles.showOnMap}>Показать на карте</button>
						</div>

						<div className={styles.cardFooter}>
							<div className={styles.cardPrice}>
								<strong>2 512 ₽/смена</strong>
								<span>316 ₽/ч</span>
							</div>
							<button className={styles.takeOrder}>Взять заказ</button>
						</div>
					</div>
				</section>
			</div>
		</main>
	)
}

export default CatalogPage
