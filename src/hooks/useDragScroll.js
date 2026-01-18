'use client'

import { useRef } from 'react'

const useDragScroll = ({ dragSpeed = 1.2, gap = 16, dragClassName } = {}) => {
	const trackRef = useRef(null)
	const isDragging = useRef(false)
	const startX = useRef(0)
	const scrollLeft = useRef(0)

	const onMouseDown = e => {
		if (!trackRef.current) return

		isDragging.current = true
		startX.current = e.pageX
		scrollLeft.current = trackRef.current.scrollLeft

		if (dragClassName) {
			trackRef.current.classList.add(dragClassName)
		}
	}

	const onMouseMove = e => {
		if (!isDragging.current || !trackRef.current) return

		e.preventDefault()
		const walk = (e.pageX - startX.current) * dragSpeed
		trackRef.current.scrollLeft = scrollLeft.current - walk
	}

	const stopDrag = () => {
		isDragging.current = false
		if (dragClassName) {
			trackRef.current?.classList.remove(dragClassName)
		}
	}

	const scrollByCard = direction => {
		if (!trackRef.current) return

		const card = trackRef.current.firstElementChild
		if (!card) return

		trackRef.current.scrollBy({
			left: direction * (card.offsetWidth + gap),
			behavior: 'smooth'
		})
	}

	return {
		trackRef,
		scrollByCard,
		bind: {
			onMouseDown,
			onMouseMove,
			onMouseUp: stopDrag,
			onMouseLeave: stopDrag
		}
	}
}

export default useDragScroll
