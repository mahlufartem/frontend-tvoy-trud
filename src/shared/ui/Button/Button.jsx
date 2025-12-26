import React from 'react'

import clsx from 'clsx'

import styles from './Button.module.scss'

const Button = ({ children, variant, size }) => {
	return (
		<button className={clsx(styles.root, styles[variant], styles[size])}>
			{children}
		</button>
	)
}

export default Button
