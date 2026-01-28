import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import { APP_ROUTES } from '@/constants/routes'

import { vacancyList } from '@/screens/CatalogPage/data'

import ArrowRightIcon from '@/assets/icons/ArrowRightIcon'
import ClockIcon from '@/assets/icons/ClockIcon'
import CoffeeIcon from '@/assets/icons/CoffeeIcon'

import VacancyList from '@/components/VacancyList/VacancyList'

import Accordion from '@/shared/ui/Accordion/Accordion'

import styles from './VacancyPage.module.scss'

const VacancyPage = ({ id }) => {
	// Заменить на реальный запрос инфы по вакансии
	const vacancy = vacancyList.find(v => v.id === id) || {}

	const { title, info, coordinate, price } = vacancy || {}

	return (
		<div className={styles.root}>
			<div className={styles.header}>
				<Link
					href='/catalog'
					className={styles.breadCrambs}
				>
					<ArrowRightIcon /> к списку вакансий
				</Link>
				<h4 className={styles.title}>{title}</h4>
			</div>
			<div className={styles.content}>
				<div className={styles.left}>
					<div className={styles.map}>
						<button>Показать на карте</button>
					</div>
				</div>
				<div className={styles.right}>
					<div className={styles.vacancyCard}>
						<div className={styles.cardInfo}>
							<span className={styles.cardAddress}>{info.address}</span>

							<span className={styles.cardTime}>{info.time}</span>

							<div className={styles.cardIcons}>
								<span>
									<CoffeeIcon /> 1ч
								</span>
								<span>
									<ClockIcon /> 8ч
								</span>
							</div>
						</div>

						<div className={styles.cardPrice}>
							<strong>{price.dayPrice}/смена</strong>
							<span>{price.hourPrice}/ч</span>
						</div>
						<button className={styles.takeOrder}>Взять заказ</button>
					</div>

					<div className={styles.accardionsGroup}>
						<Accordion title='Оплата заказа'></Accordion>
						<Accordion title='Начало и окончание заявки'></Accordion>
						<Accordion title='Ваши обязанности'></Accordion>

						<Accordion title='Требуется от вас'>
							<Link href={APP_ROUTES.secondary.self_employed}>
								Памятка для самозанятых от «ПОЧТА ЕКОМ»
							</Link>
							{/*<div className={styles.yourRequired}>*/}
							{/*	<p>*/}
							{/*		Загрузите следующие документы в приложении “Твой труд”, что бы*/}
							{/*		иметь возможность взять данный заказ:*/}
							{/*	</p>*/}
							{/*	<ul>*/}
							{/*		<li>Паспорт</li>*/}
							{/*		<li>СНИЛС</li>*/}
							{/*		<li>ИНН</li>*/}
							{/*	</ul>*/}

							{/*	<a href=''>Скачайте мобильное приложение “Твой Труд”</a>*/}
							{/*	<div className={styles.apps}>*/}
							{/*		<div>*/}
							{/*			<a href='#'>*/}
							{/*				<Image*/}
							{/*					src={rustore}*/}
							{/*					alt='rustore'*/}
							{/*				/>*/}
							{/*			</a>*/}
							{/*			<a href='#'>*/}
							{/*				<Image*/}
							{/*					src={googlePlay}*/}
							{/*					alt='google play'*/}
							{/*				/>*/}
							{/*			</a>*/}
							{/*		</div>*/}
							{/*	</div>*/}
							{/*</div>*/}
						</Accordion>

						<Accordion title='Инструктаж и обучение'>
							<Link href={`/instruction/${id}`}>Пройти инструктаж</Link>
						</Accordion>
					</div>

					<div className={styles.vacancyList}>
						<h4>Похожие вакансии</h4>
						<VacancyList items={vacancyList} />
					</div>
				</div>
			</div>
		</div>
	)
}

export default VacancyPage
