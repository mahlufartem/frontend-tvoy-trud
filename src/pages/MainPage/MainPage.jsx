import React from 'react'

import Section_1 from '@/pages/MainPage/sections/Section_1/Section_1'
import Section_2 from '@/pages/MainPage/sections/Section_2/Section_2'
import Section_3 from '@/pages/MainPage/sections/Section_3/Section_3'
import Section_4 from '@/pages/MainPage/sections/Section_4/Section_4'
import Section_5 from '@/pages/MainPage/sections/Section_5/Section_5'
import Section_6 from '@/pages/MainPage/sections/Section_6/Section_6'
import Section_7 from '@/pages/MainPage/sections/Section_7/Section_7'
import Section_8 from '@/pages/MainPage/sections/Section_8/Section_8'

import styles from './MainPage.module.scss'

const MainPage = () => {
	return (
		<main className={styles.root}>
			<Section_1 />
			<Section_2 />
			<Section_3 />
			<Section_4 />
			<Section_5 />
			<Section_6 />
			<Section_7 />
			<Section_8 />
		</main>
	)
}

export default MainPage
