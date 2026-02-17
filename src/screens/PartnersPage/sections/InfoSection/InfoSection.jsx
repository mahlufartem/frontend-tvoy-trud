import Image from 'next/image'
import React from 'react'

import {
	whoCanCooperate,
	yourInstruments
} from '@/screens/PartnersPage/sections/InfoSection/data'

import {
	dvaBiznesmena,
	forms,
	handeWithPhone,
	icon6
} from '@/assets/images/partnersPage'

import styles from './InfoSection.module.scss'

const InfoSection = () => {
	return (
		<section className={styles.root}>
			<div className={styles.top}>
				<div className={styles.topLeft}>
					<Image
						src={dvaBiznesmena}
						fill
						style={{ objectFit: 'cover', zIndex: -1 }}
						alt=''
					/>
				</div>
				<div className={styles.topRight}>
					<h4>
						<span>Кому удобно сотрудничать</span>
						<br /> с Твой Труд
					</h4>

					<div className={styles.whoCanCooperateList}>
						{whoCanCooperate.map(i => (
							<div
								className={styles.whoCanCooperateItem}
								key={i.id}
							>
								<Image
									src={i.image}
									alt=''
								/>
								<span>{i.title}</span>
							</div>
						))}
					</div>
				</div>
			</div>
			<div className={styles.bottom}>
				<div className={styles.bottomLeft}>
					<h4>
						<span>Ваш основной</span> инструмент
					</h4>
					<p>Для управления заявками и контроля за вашими исполнителями</p>
					<div className={styles.instrumentsList}>
						{yourInstruments.map(i => (
							<div
								className={styles.instrument}
								key={i.id}
							>
								<span>{i.id}</span>
								<p>{i.text}</p>
							</div>
						))}
					</div>
				</div>
				<div className={styles.bottomRight}>
					<Image
						className={styles.background}
						src={forms}
						fill
						style={{ objectFit: 'cover', zIndex: -1 }}
						alt=''
					/>
					<Image
						className={styles.handeImage}
						src={handeWithPhone}
						alt=''
					/>
				</div>
			</div>
		</section>
	)
}

export default InfoSection
