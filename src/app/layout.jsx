import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import MainMenu from '@/components/MainMenu/MainMenu'
import ScrollToTop from '@/components/ScrollToTop/ScrollToTop'

import { involve } from '@/styles/fonts/'
import '@/styles/globals.scss'

import styles from './page.module.scss'

export const metadata = {
	title: 'Твой Труд',
	description: 'Какое-то описание'
}

export default function RootLayout({ children }) {
	return (
		<html lang='ru'>
			<body className={involve.className}>
				<div className={styles.root}>
					<Header />
					<main className={styles.content}>{children}</main>
					<Footer />
					<MainMenu />
					<ScrollToTop />
				</div>
			</body>
		</html>
	)
}
