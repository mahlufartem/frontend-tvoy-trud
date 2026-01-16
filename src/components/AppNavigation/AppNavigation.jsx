'use client'

import Link from 'next/link'
import React from 'react'

import { useMainMenuStore } from '@/store/mainMenuStore'

import { navLinks } from '@/components/AppNavigation/data'

import styles from './AppNavigation.module.scss'

const AppNavigation = () => {
	const { closeMenu } = useMainMenuStore()
	return (
		<nav className={styles.root}>
			{navLinks.map(link => (
				<Link
					key={link.id}
					href={link.href}
					onClick={closeMenu}
				>
					{link.title}
				</Link>
			))}
		</nav>
	)
}

export default AppNavigation
