'use client'

import { useState, useEffect } from 'react'

export function useMediaQuery(query: string) {
  const [windowChanged, setWindowChanged] = useState(false)

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowChanged(window.matchMedia(`(${query})`).matches)
    }

    window.addEventListener('resize', handleWindowResize)

    return () => window.removeEventListener('resize', handleWindowResize)
  }, [])

  return windowChanged
}
