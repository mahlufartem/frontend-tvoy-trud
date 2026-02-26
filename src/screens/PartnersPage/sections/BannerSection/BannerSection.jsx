import Image from 'next/image'
import React from 'react'

import { hero4 } from '@/assets/images/partnersPage'

import styles from './BannerSection.module.scss'

const BannerSection = () => {
	return (
		<section className={styles.root}>
			<div className={styles.banner}>
				<Image
					src={hero4}
					alt=''
					fill
					priority
					style={{ objectFit: 'cover', zIndex: -1 }}
				/>
				<div className={styles.left}>
					<div className={styles.text}>
						<h3>
							Больше заказчиков
							<br /> и больше дохода
						</h3>
						<p>
							Становитесь партнёром Твой Труд <br />
							и получайте готовое IT‑решение
							<br />
							для вашего бизнеса
						</p>
					</div>
				</div>
			</div>
			<div className={styles.info}>
				<div className={styles.leftBlock}>
					<button>Готовы начать?</button>
				</div>
				<div className={styles.rightBlock}>
					<div className={styles.infoText}>
						<p>
							Твой Труд — это готовый инструмент для партнёров <br /> сервиса,
							чтобы быстро и удобно решать задачи между исполнителями и
							заказчиками
						</p>
					</div>
				</div>
			</div>
		</section>
	)
}

export default BannerSection
