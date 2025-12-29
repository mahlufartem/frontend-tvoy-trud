import React from 'react'

import SectionOne from '@/pages/MainPage/sections/SectionOne/SectionOne'

import styles from './MainPage.module.scss'

const MainPage = () => {
	return (
		<div className={styles.root}>
			<SectionOne />
		</div>
	)
}

export default MainPage
