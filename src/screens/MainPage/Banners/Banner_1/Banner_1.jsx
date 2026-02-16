import Image from 'next/image'
import React from 'react'

import CalendarIcon from '@/assets/icons/CalendarIcon'
import DownloadIcon from '@/assets/icons/DownloadIcon'
import HomeIcon from '@/assets/icons/HomeIcon'
import RubleIcon from '@/assets/icons/RubleIcon'
import StudyIcon from '@/assets/icons/StudyIcon'
import {
	googlePlay,
	mainBannerFormsL,
	mainBannerPerson,
	rustore
} from '@/assets/images'

import styles from './Banner_2.module.scss'

const Banner1 = () => {
	return (
		<div className={styles.root}>
			<div className={styles.left}>
				<div className={styles.header}>
					<span>/ Эйчар революция в твою сторону</span>
					<h3>
						Огромный выбор подработок <br /> с оплатой сразу после смены
					</h3>
				</div>
				<div className={styles.advantages}>
					<div className={styles.row}>
						<div className={styles.advantage}>
							<CalendarIcon />
							<span>
								Гибкий график <br /> от 4х часов в день
							</span>
						</div>
						<div className={styles.advantage}>
							<StudyIcon />
							<span>
								Легко совмещать <br /> с учебой
							</span>
						</div>
					</div>
					<div className={styles.row}>
						<div className={styles.advantage}>
							<HomeIcon />
							<span>
								Работа рядом
								<br /> с домом
							</span>
						</div>
						<div className={styles.advantage}>
							<RubleIcon />
							<span>
								Выплаты сразу <br /> после смены
							</span>
						</div>
					</div>
				</div>
				<button className={styles.getWork}>Получить работу</button>
				<div className={styles.apk}>
					<a href='#'>
						<DownloadIcon />
						<p>
							<span>APK файл</span>
						</p>
					</a>
				</div>
				<div className={styles.apps}>
					<a href='#'>
						<Image
							src={rustore}
							alt='rustore'
							width={75}
						/>
					</a>
					<a href='#'>
						<Image
							src={googlePlay}
							alt='google play'
							width={93}
						/>
					</a>
				</div>
			</div>
			<div className={styles.right}>
				<div className={styles.formImage}>
					<Image
						src={mainBannerFormsL}
						alt=''
					/>
				</div>
				<div className={styles.personImage}>
					<Image
						src={mainBannerPerson}
						alt=''
					/>
				</div>
				<div className={styles.personInfo}>
					<span className={styles.personInfo__title}>Грузчик</span>
					<span className={styles.personInfo__price}>до 2 800 ₽ за смену</span>
				</div>
			</div>
		</div>
	)
}

export default Banner1
