import Image from 'next/image'
import React from 'react'

import {
	hero2,
	icon1,
	icon2,
	icon3,
	icon4,
	icon5
} from '@/assets/images/partnersPage'

import styles from './AdvantagesSection.module.scss'

const AdvantagesSection = () => {
	return (
		<section className={styles.root}>
			<h4>
				<span>Преимущества</span> сотрудничества
			</h4>

			<div className={styles.list}>
				<div className={styles.left}>
					<div className={styles.card}>
						<Image
							src={icon1}
							alt=''
							width={60}
						/>
						<p>Ежедневные выплаты партнёрам не дожидаясь сверок</p>
					</div>

					<div className={styles.card}>
						<Image
							src={icon2}
							alt=''
							width={60}
						/>
						<p>
							Автоматизация процессов, контроль за исполнителями и назначение
							заявок
						</p>
					</div>

					<div className={styles.card}>
						<h3>10 000 +</h3>
						<p>Открытых смен ежедневно по выгодным ставкам</p>
					</div>
				</div>
				<div className={styles.center}>
					<Image
						src={hero2}
						alt=''
					/>
				</div>
				<div className={styles.right}>
					<div className={styles.card}>
						<Image
							src={icon3}
							alt=''
							width={60}
						/>
						<p>
							Всё, что нужно для привлечения исполнителей, — в готовом
							IT‑решении
						</p>
					</div>

					<div className={styles.card}>
						<Image
							src={icon4}
							alt=''
							width={60}
						/>
						<p>Дополнительный канал привлечения исполнителей</p>
					</div>

					<div className={styles.card}>
						<Image
							src={icon5}
							alt=''
							width={60}
						/>
						<p>Персональный менеджер и полное сопровождение</p>
					</div>
				</div>
			</div>
		</section>
	)
}

export default AdvantagesSection
