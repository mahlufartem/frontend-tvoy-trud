import React, { forwardRef } from 'react'

import clsx from 'clsx'

import SearchIcon from '@/assets/icons/SearchIcon'

import styles from './SearchInput.module.scss'

const SearchInput = forwardRef(
	(
		{
			value,
			onChange,
			placeholder = 'Поиск по вакансиям',
			className,
			inputClassName,
			iconClassName,
			disabled,
			iconPosition = 'left'
		},
		ref
	) => {
		return (
			<div className={clsx(styles.root, className)}>
				<span
					className={clsx(
						styles.icon,
						iconClassName,
						styles[`icon-${iconPosition}`]
					)}
				>
					<SearchIcon
						width='24'
						height='24'
					/>
				</span>

				<input
					ref={ref}
					type='text'
					value={value}
					disabled={disabled}
					onChange={e => onChange?.(e.target.value)}
					placeholder={placeholder}
					className={clsx(styles.input, inputClassName)}
				/>
			</div>
		)
	}
)

SearchInput.displayName = 'SearchInput'

export default SearchInput
