import Image from 'next/image'
import Link from 'next/link'

import PencilIcon from '@/assets/icons/PencilIcon'
import TelegramIcon from '@/assets/icons/TelegramIcon'
import WhatsAppIcon from '@/assets/icons/WhatsAppIcon'
import { googlePlay, logo, rustore } from '@/assets/images/index'

import styles from './Footer.module.scss'
import { footerLinks } from './data'

const Footer = () => {
	return (
		<footer className={styles.root}>
			<div className={styles.container}>
				<div className={styles.top}>
					<div className={styles.header}>
						<Link
							href='/'
							className={styles.logo}
						>
							<Image
								src={logo}
								alt='tvoy-trud'
							/>
						</Link>
						<button className={styles.directBtn}>
							Прямое обращение к руководству
						</button>

						<div className={styles.contacts}>
							<div className={styles.city}>
								<span>Ярославль</span>
								<PencilIcon />
							</div>

							<div className={styles.phone}>
								<WhatsAppIcon />
								<TelegramIcon />
								<span>+7 900 800 70 60</span>
							</div>
							<div className={styles.mail}>
								<a href='mailto:tvojtrud@gmail.com'>tvojtrud@gmail.com</a>
							</div>

							<div className={styles.socialsMobile}>
								<WhatsAppIcon />
								<TelegramIcon />
							</div>
						</div>
					</div>

					<div className={styles.links}>
						<div className={styles.navLinks}>
							{footerLinks.map(block => (
								<ul key={block.id}>
									{block.items.map(item => (
										<li key={item.label}>
											<Link href={item.href}>{item.label}</Link>
										</li>
									))}
								</ul>
							))}
						</div>
						<div className={styles.apps}>
							<p>
								Скачайте мобильное <br /> приложение “Твой Труд”
							</p>
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
				</div>

				<hr className={styles.divider} />

				<div className={styles.bottom}>
					<p className={styles.address}>
						108823, Московская область, г. Подольск, <br /> ул. Подольская, д.
						1, этаж 1, помещение 1, комната 1
						<br />
						<br />
						ОГРН: 1057749631994 ИНН: 7727563778
					</p>

					<p className={styles.copy}>
						«Твой Труд» онлайн-сервис подработок
						<br />© ООО «Компания-владелец» 2025
					</p>
				</div>
			</div>
		</footer>
	)
}

export default Footer
