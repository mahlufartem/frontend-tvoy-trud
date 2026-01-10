import React from 'react'

import Section_1 from '@/pages/MainPage/sections/Section_1/Section_1'
import Section_2 from '@/pages/MainPage/sections/Section_2/Section_2'
import Section_3 from '@/pages/MainPage/sections/Section_3/Section_3'

import styles from './MainPage.module.scss'

const MainPage = () => {
	return (
		<div className={styles.root}>
			<Section_1 />
			<Section_2 />
			<Section_3 />
		</div>
	)
}

export default MainPage
