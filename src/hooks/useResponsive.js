"use client"

import { useEffect, useState } from "react"

export const BREAKPOINTS = {
  "xs": 480,
  "sm": 720,
  "md": 860,
  "lg": 1024,
  "xl": 1440,
  "2xl": 1920,
}

export const minWidth = (breakpoint) => `(min-width: ${breakpoint}px)`
export const maxWidth = (breakpoint) => `(max-width: ${breakpoint}px)`

export const useGetResponsive = (mediaQuery, initialValue) => {
  const isClient = typeof document !== 'undefined'
  const isApiSupported = (api) => isClient && api in window
  const [isVerified, setIsVerified] = useState(initialValue)

  useEffect(() => {
    if (!isApiSupported('matchMedia')) {
      console.warn('matchMedia is not supported by your current browser')
      return
    }
    const mediaQueryList = window.matchMedia(mediaQuery)
    const changeHandler = () => setIsVerified(!!mediaQueryList.matches)

    changeHandler()
    if (typeof mediaQueryList.addEventListener === 'function') {
      mediaQueryList.addEventListener('change', changeHandler)
      return () => {
        mediaQueryList.removeEventListener('change', changeHandler)
      }
    } else if (typeof mediaQueryList.addListener === 'function') {
      mediaQueryList.addListener(changeHandler)
      return () => {
        mediaQueryList.removeListener(changeHandler)
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mediaQuery])

  return isVerified
}

const useResponsive = () => {
  const isXS = useGetResponsive(minWidth(BREAKPOINTS.xs))
  const isSM = useGetResponsive(minWidth(BREAKPOINTS.sm))
  const isMD = useGetResponsive(minWidth(BREAKPOINTS.md))
  const isLG = useGetResponsive(minWidth(BREAKPOINTS.lg))
  const isXL = useGetResponsive(minWidth(BREAKPOINTS.xl))
  const is2XL = useGetResponsive(minWidth(BREAKPOINTS["2xl"]))

  return { isXS, isSM, isMD, isLG, isXL, is2XL }
}

export default useResponsive