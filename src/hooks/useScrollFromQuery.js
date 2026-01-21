'use client'

import { useSearchParams } from 'next/navigation'
import { useEffect } from 'react'

const useScrollFromQuery = ({
	param = 'scrollTo',
	offset = 80,
	behavior = 'smooth'
} = {}) => {
	const searchParams = useSearchParams()

	useEffect(() => {
		const id = searchParams.get(param)
		if (!id) return

		const el = document.getElementById(id)
		if (!el) return

		requestAnimationFrame(() => {
			const y = el.getBoundingClientRect().top + window.pageYOffset - offset

			window.scrollTo({ top: y, behavior })
		})
	}, [searchParams, param, offset, behavior])
}

export default useScrollFromQuery
