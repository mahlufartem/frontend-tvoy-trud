import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import { APP_ROUTES } from '@/constants/routes'

import PencilIcon from '@/assets/icons/PencilIcon'
import TelegramIcon from '@/assets/icons/TelegramIcon'
import WhatsAppIcon from '@/assets/icons/WhatsAppIcon'

import AppNavigation from '@/components/AppNavigation/AppNavigation'

import Button from '@/shared/ui/Button/Button'

import { logo } from '../../assets/images/index'

import styles from './Header.module.scss'

const Header = () => {
	return (
		<div className={styles.root}>
			<div className={styles.wrapper}>
				<div className={styles.logo}>
					<Link href={APP_ROUTES.main}>
						<Image
							src={logo}
							alt='logo'
						/>
					</Link>
				</div>
				<div className={styles.leftSection}>
					<div className={styles.info}>
						<div className={styles.location}>
							<span>Ярославль</span>
							<PencilIcon />
						</div>
						<div className={styles.contacts}>
							<div className={styles.socialIcons}>
								<WhatsAppIcon />
								<TelegramIcon />
							</div>
							<span className={styles.phone}>+7 900 800 70 60 </span>
						</div>
					</div>
					<div className={styles.buttons}>
						<Link href={APP_ROUTES.catalog}>
							<Button>Каталог вакансий</Button>
						</Link>

						<Button variant='secondary'>Меню</Button>
					</div>
				</div>
			</div>

			{/*<AppNavigation />*/}
		</div>
	)
}

export default Header
