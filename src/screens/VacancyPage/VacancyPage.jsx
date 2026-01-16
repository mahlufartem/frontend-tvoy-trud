import React from 'react'

import styles from './VacancyPage.module.scss'

const VacancyPage = ({ id }) => {
	console.log(id)
	return <div className={styles.root}>{id}</div>
}

export default VacancyPage
