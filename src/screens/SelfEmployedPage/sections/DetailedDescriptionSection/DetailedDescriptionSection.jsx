import Image from 'next/image'
import React from 'react'

import { services } from '@/screens/SelfEmployedPage/sections/DetailedDescriptionSection/data'

import { list, warning } from '@/assets/images'

import styles from './DetailedDescriptionSection.module.scss'

const DetailedDescriptionSection = () => {
	return (
		<div className={styles.root}>
			<div className={styles.title}>
				<Image
					src={list}
					alt=''
				/>
				<h4>Подробное описание операций</h4>
			</div>

			<div className={styles.tableWrapper}>
				<div className={styles.header}>
					<div>Наименование услуги</div>
					<div>Описание услуги</div>
					<div>Единица измерения</div>
				</div>

				<div className={styles.list}>
					{services.map((item, index) => (
						<div
							className={styles.row}
							key={index}
						>
							<div className={styles.cell}>{item.name}</div>
							<div className={styles.cell}>{item.description}</div>
							<div className={styles.cell}>{item.unit}</div>
						</div>
					))}
				</div>
			</div>

			<div className={styles.warningWrapper}>
				<div className={styles.warning}>
					<div className={styles.warningTitle}>
						<Image
							src={warning}
							alt=''
						/>
						<span>Для работы требуется</span>
					</div>
					<ul>
						<div>
							<span className={styles.dote}></span>
							<span>Для прохода через КПП при себе иметь паспорт</span>
						</div>
						<div>
							<span className={styles.dote}></span>
							<span>
								В вашем профиле должны быть загружены актуальные персональные
								данные (паспорт, СНИЛС, ИНН
							</span>
						</div>
						<div>
							<span className={styles.dote}></span>
							<span>Отсутствие действующего контракта с WB</span>
						</div>
					</ul>
					<h4>Опыт не обязателен – главное желание!</h4>
				</div>
			</div>
		</div>
	)
}

export default DetailedDescriptionSection
