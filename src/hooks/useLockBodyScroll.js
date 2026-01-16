import { useEffect } from 'react'

export const useLockBodyScroll = locked => {
	useEffect(() => {
		if (locked) {
			const scrollY = window.scrollY
			document.body.style.cssText = `
				position: fixed;
				top: -${scrollY}px;
				left: 0;
				right: 0;
				overflow: hidden;
				width: 100%;
			`

			return () => {
				document.body.style.cssText = ''
				window.scrollTo(0, scrollY)
			}
		}
	}, [locked])
}
