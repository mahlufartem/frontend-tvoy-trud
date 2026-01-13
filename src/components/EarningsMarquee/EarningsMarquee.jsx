'use client'

import Image from 'next/image'

import { evgen } from '@/assets/images'

import styles from './EarningsMarquee.module.scss'

const users = Array.from({ length: 8 }).map((_, i) => ({
	id: i,
	name: 'Евгения',
	city: 'г. Мурманск',
	amount: '+ 3 200 ₽',
	time: '80 ч. назад',
	avatar: evgen
}))

export default function EarningsMarquee() {
	return (
		<section className={styles.root}>
			<h2 className={styles.title}>
				С нами <br /> зарабатывают
			</h2>

			<div className={styles.marquee}>
				{[0, 1, 2].map(row => (
					<div
						key={row}
						className={styles.row}
					>
						<div
							className={styles.track}
							style={{ animationDirection: row % 2 ? 'reverse' : 'normal' }}
						>
							{users.concat(users).map((user, index) => (
								<div
									key={`${row}-${index}`}
									className={styles.card}
								>
									<div className={styles.avatar}>
										<Image
											src={user.avatar}
											alt={user.name}
											fill
										/>
									</div>
									<div className={styles.info}>
										<div className={styles.name}>{user.name}</div>
										<div className={styles.city}>{user.city}</div>
										<div className={styles.meta}>
											<span className={styles.amount}>{user.amount}</span>
											<span className={styles.time}>{user.time}</span>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				))}
			</div>
		</section>
	)
}
