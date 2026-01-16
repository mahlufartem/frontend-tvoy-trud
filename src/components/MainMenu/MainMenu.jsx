'use client'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import clsx from 'clsx'

import { APP_ROUTES } from '@/constants/routes'

import { useMainMenuStore } from '@/store/mainMenuStore'

import TelegramIcon from '@/assets/icons/TelegramIcon'
import WhatsAppIcon from '@/assets/icons/WhatsAppIcon'
import { googlePlay, rustore } from '@/assets/images'

import AppNavigation from '@/components/AppNavigation/AppNavigation'

import Burger from '@/shared/ui/Burger/Burger'
import Button from '@/shared/ui/Button/Button'
import SearchInput from '@/shared/ui/SearchInput/SearchInput'

import styles from './MainMenu.module.scss'

const MainMenu = () => {
	const { isMenuOpen, closeMenu, toggleMenu } = useMainMenuStore()

	return (
		<div
			className={clsx(styles.overlay, {
				[styles.overlayVisible]: isMenuOpen
			})}
			onClick={toggleMenu}
		>
			<div
				className={clsx(styles.menu, {
					[styles.menuOpen]: isMenuOpen
				})}
				onClick={e => e.stopPropagation()}
			>
				<div className={styles.header}>
					<Link
						href={APP_ROUTES.primary.catalog}
						className={styles.catalogLink}
						onClick={closeMenu}
					>
						<Button>Каталог вакансий</Button>
					</Link>
					<div className={styles.burger}>
						<Burger text='Закрыть' />
					</div>
				</div>
				<SearchInput />
				<div className={styles.links}>
					<AppNavigation />
				</div>
				<div className={styles.footer}>
					<div className={styles.mail}>
						<a href='mailto:tvojtrud@gmail.com'>tvojtrud@gmail.com</a>
					</div>
					<div className={styles.contacts}>
						<div className={styles.apps}>
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
						<div className={styles.phone}>
							<WhatsAppIcon />
							<TelegramIcon />
							<span>+7 900 800 70 60</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default MainMenu
