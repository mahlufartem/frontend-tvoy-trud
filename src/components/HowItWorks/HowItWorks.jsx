'use client'

import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'

import { writeTg, writeWhatsApp } from '@/assets/images'

import { steps } from '@/components/HowItWorks/data'
import QuestionnaireForm from '@/components/QuestionnaireForm/QuestionnaireForm'

import styles from './HowItWorks.module.scss'

const clamp = (v, min, max) => Math.min(Math.max(v, min), max)

const HowItWorks = () => {
	const [open, setOpen] = useState(false)
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

			const ACTIVATION_OFFSET = 140

			const containerTop = containerRef.current.getBoundingClientRect().top
			const activationPoint = ACTIVATION_OFFSET

			const raw = activationPoint - containerTop - first.offsetTop

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

			const ACTIVATION_DELTA = 20
			const stepTop = step.offsetTop

			if (progress >= stepTop - ACTIVATION_DELTA) {
				index = i
			}
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

				<div className={styles.steps}>
					{steps.map((step, index) => (
						<div
							key={step.id}
							ref={el => (stepsRef.current[index] = el)}
							className={`${styles.step} ${
								activeIndex === index ? styles.active : ''
							}`}
						>
							<div className={styles.left}>
								<div>
									<span className={styles.badge}>{step.label}</span>
									<h3>{step.title}</h3>
								</div>
							</div>

							<div className={styles.right}>
								{step.text && <p>{step.text}</p>}

								{step.icons && (
									<div className={styles.withIcon}>
										<div>
											<div className={styles.icons}>
												<Image
													src={writeTg}
													alt=''
												/>
											</div>
										</div>
										<button onClick={() => setOpen(true)}>{step.button}</button>
									</div>
								)}

								{!step.icons && <button>{step.button}</button>}
							</div>
						</div>
					))}
				</div>
			</div>
			<QuestionnaireForm
				isOpen={open}
				onClose={() => setOpen(false)}
			/>
		</section>
	)
}

export default HowItWorks
