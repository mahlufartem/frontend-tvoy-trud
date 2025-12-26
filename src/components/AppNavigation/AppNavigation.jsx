import Link from 'next/link'
import React from 'react'

import { navLinks } from '@/components/AppNavigation/data'

import styles from './AppNavigation.module.scss'

const AppNavigation = () => {
	return (
		<nav className={styles.root}>
			{navLinks.map(link => (
				<Link
					key={link.id}
					href={link.href}
				>
					{link.title}
				</Link>
			))}
		</nav>
	)
}

export default AppNavigation
