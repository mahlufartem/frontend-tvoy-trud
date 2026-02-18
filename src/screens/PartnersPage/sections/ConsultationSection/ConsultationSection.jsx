import Image from 'next/image'
import React from 'react'

import { hero3 } from '@/assets/images/partnersPage'

import Dropdown from '@/shared/ui/Dropdown/Dropdown'

import styles from './ConsultationSection.module.scss'

const ConsultationSection = () => {
	return (
		<section className={styles.root}>
			<div className={styles.content}>
				<div className={styles.left}>
					<Image
						src={hero3}
						fill
						style={{ objectFit: 'cover', zIndex: -1 }}
						alt=''
					/>
				</div>
				<div className={styles.right}>
					<div className={styles.form}>
						<h4>Нужна консультация?</h4>
						<p>
							Партнёрство с Твой Труд — это возможность выстроить собственный
							аутсорсинговый бизнес на базе готовой платформы и с доступом
							к заявкам крупнейших заказчиков по всей России
						</p>
						<span className={styles.mark}>
							*Какой вид партнерства вам интересен:
						</span>
						<Dropdown
							className={styles.dropdown}
							placeholder=''
						/>
					</div>
				</div>
			</div>
		</section>
	)
}

export default ConsultationSection
