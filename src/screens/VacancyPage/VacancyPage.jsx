import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import { vacancyList } from '@/screens/CatalogPage/data'

import { googlePlay, rustore } from '@/assets/images'

import VacancyList from '@/components/VacancyList/VacancyList'

import Accordion from '@/shared/ui/Accordion/Accordion'

import styles from './VacancyPage.module.scss'

const VacancyPage = ({ id }) => {
	// Заменить на реальный запрос инфы по вакансии
	const vacancy = vacancyList.find(v => v.id === id) || {}

	return (
		<div className={styles.root}>
			<div className={styles.header}>
				<Link
					href='/catalog'
					className={styles.breadCrambs}
				>
					к списку вакансий
				</Link>
				<h4 className={styles.title}>{vacancy.title}</h4>
			</div>
			<div className={styles.content}>
				<div className={styles.left}>
					<div className={styles.map}>
						<button>Показать на карте</button>
					</div>
				</div>
				<div className={styles.right}>
					<div className={styles.vacancyCard}></div>

					<div className={styles.accardionsGroup}>
						<Accordion title='Оплата заказа'></Accordion>

						<Accordion title='Требуется от вас'>
							<div className={styles.yourRequired}>
								<p>
									Загрузите следующие документы в приложении “Твой труд”, что бы
									иметь возможность взять данный заказ:
								</p>
								<ul>
									<li>Паспорт</li>
									<li>СНИЛС</li>
									<li>ИНН</li>
								</ul>

								<a href=''>Скачайте мобильное приложение “Твой Труд”</a>
								<div className={styles.apps}>
									<div>
										<a href='#'>
											<Image
												src={rustore}
												alt='rustore'
											/>
										</a>
										<a href='#'>
											<Image
												src={googlePlay}
												alt='google play'
											/>
										</a>
									</div>
								</div>
							</div>
						</Accordion>

						<Accordion title='Оплата заказа'></Accordion>
					</div>

					<div className={styles.vacancyList}>
						<h4>Похожие вакансии</h4>
						<VacancyList />
					</div>
				</div>
			</div>
		</div>
	)
}

export default VacancyPage
