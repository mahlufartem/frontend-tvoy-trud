'use client'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import { APP_ROUTES } from '@/constants/routes'

import { useCityStore } from '@/store/userCityStore'

import PencilIcon from '@/assets/icons/PencilIcon'
import TelegramIcon from '@/assets/icons/TelegramIcon'
import WhatsAppIcon from '@/assets/icons/WhatsAppIcon'
import { logo, logoMobile } from '@/assets/images/index'

import Burger from '@/shared/ui/Burger/Burger'
import Button from '@/shared/ui/Button/Button'

import styles from './Header.module.scss'

const Header = () => {
	const { city, openCityModal, setCity, closeCityModal } = useCityStore()

	return (
		<div className={styles.root}>
			<div className={styles.wrapper}>
				<div className={styles.logo}>
					<Link href={APP_ROUTES.primary.main}>
						<Image
							src={logo}
							alt='Твой труд'
						/>
					</Link>
				</div>
				<div className={styles.logoMobile}>
					<Link href={APP_ROUTES.primary.main}>
						<Image
							src={logoMobile}
							alt='Твой труд'
						/>
					</Link>
				</div>
				<div className={styles.rightSection}>
					<div className={styles.info}>
						<div
							className={styles.location}
							onClick={() => openCityModal()}
						>
							<span>{city ? city : 'Ростов-на-Дону'}</span>
							<PencilIcon />
						</div>
						<div className={styles.contacts}>
							<div className={styles.socialIcons}>
								<WhatsAppIcon />
								<TelegramIcon />
							</div>
							<a
								href='tel: +79008007060'
								className={styles.phone}
							>
								+7 900 800 70 60
							</a>
						</div>
					</div>
					<div className={styles.buttons}>
						<Link
							href={APP_ROUTES.primary.catalog}
							className={styles.catalogBtn}
						>
							<Button>Каталог вакансий</Button>
						</Link>

						<Burger />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Header
