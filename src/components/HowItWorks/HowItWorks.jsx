'use client'

import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'

import styles from './HowItWorks.module.scss'

const STEPS = [
	{
		id: 1,
		label: 'Способ 1',
		title: 'Зарегистрируйтесь',
		text: 'Выберите подходящую вам работу с удобным графиком',
		button: 'Зарегистрироваться'
	},
	{
		id: 2,
		label: 'Способ 2',
		title: 'Позвоните нам или напишите в Telegram, WhatsApp',
		button: 'Позвонить нам',
		icons: true
	},
	{
		id: 3,
		label: 'Способ 3',
		title: 'Запишитесь на онлайн собеседование',
		text: 'Расскажем о формате работы, подберем вакансию и оформим документы',
		button: 'Записаться'
	}
]

const clamp = (v, min, max) => Math.min(Math.max(v, min), max)

const HowItWorks = () => {
	const containerRef = useRef(null)
	const stepsRef = useRef([])
	const rafId = useRef(null)
	const scrollY = useRef(0)

	const [lineHeight, setLineHeight] = useState(0)
	const [progressPx, setProgressPx] = useState(0)
	const [activeIndex, setActiveIndex] = useState(0)

	/* считаем реальную высоту линии */
	useEffect(() => {
		const calcHeight = () => {
			const first = stepsRef.current[0]
			const last = stepsRef.current[stepsRef.current.length - 1]
			if (!first || !last) return

			const start = first.offsetTop
			const end = last.offsetTop + last.offsetHeight

			setLineHeight(end - start)
		}

		calcHeight()
		window.addEventListener('resize', calcHeight)
		return () => window.removeEventListener('resize', calcHeight)
	}, [])

	/* scroll → requestAnimationFrame */
	useEffect(() => {
		const onScroll = () => {
			scrollY.current = window.scrollY

			if (rafId.current === null) {
				rafId.current = requestAnimationFrame(update)
			}
		}

		const update = () => {
			if (!containerRef.current) return

			const first = stepsRef.current[0]
			if (!first) return

			const containerTop = containerRef.current.getBoundingClientRect().top
			const viewportCenter = window.innerHeight * 0.5

			const raw = viewportCenter - containerTop - first.offsetTop

			const nextProgress = clamp(raw, 0, lineHeight)

			setProgressPx(nextProgress)
			updateActiveStep(nextProgress)

			rafId.current = null
		}

		window.addEventListener('scroll', onScroll, { passive: true })
		update()

		return () => {
			window.removeEventListener('scroll', onScroll)
			if (rafId.current) cancelAnimationFrame(rafId.current)
		}
	}, [lineHeight])

	/* активный шаг по положению точки */
	const updateActiveStep = progress => {
		let index = 0

		stepsRef.current.forEach((step, i) => {
			if (!step) return
			const center = step.offsetTop + step.offsetHeight / 2
			if (progress >= center) index = i
		})

		setActiveIndex(index)
	}

	return (
		<section
			className={styles.root}
			ref={containerRef}
		>
			<h2 className={styles.title}>Как начать работать на сервисе ?</h2>

			<div className={styles.wrapper}>
				{/* ЛИНИЯ */}
				<div className={styles.line}>
					<div
						className={styles.lineProgress}
						style={{ height: `${progressPx}px` }}
					/>
					<div
						className={styles.dot}
						style={{ top: `${progressPx}px` }}
					/>
				</div>

				{/* ШАГИ */}
				<div className={styles.steps}>
					{STEPS.map((step, index) => (
						<div
							key={step.id}
							ref={el => (stepsRef.current[index] = el)}
							className={`${styles.step} ${
								activeIndex === index ? styles.active : ''
							}`}
						>
							<div className={styles.left}>
								<span className={styles.badge}>{step.label}</span>
								<h3>{step.title}</h3>
							</div>

							<div className={styles.right}>
								{step.text && <p>{step.text}</p>}

								{step.icons && (
									<div className={styles.icons}>
										<Image
											src='/images/tg.png'
											alt=''
											width={64}
											height={64}
										/>
										<Image
											src='/images/wa.png'
											alt=''
											width={64}
											height={64}
										/>
									</div>
								)}

								<button>{step.button}</button>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default HowItWorks
