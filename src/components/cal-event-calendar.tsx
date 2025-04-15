'use client'

import { getCalApi } from '@calcom/embed-react'
import { ReactNode, useEffect } from 'react'

interface Props {
  eventName: string
  children: ReactNode
  username?: string
}

export function CalEventCalendar({
  eventName,
  children,
  username = 'jo-saint'
}: Props) {
  useEffect(() => {
    ;(async function () {
      const cal = await getCalApi({
        namespace: eventName
      })
      cal('ui', {
        theme: 'light',
        cssVarsPerTheme: {
          light: { 'cal-brand': '#000000' },
          dark: { 'cal-brand': '#fafafa' }
        },
        hideEventTypeDetails: false,
        layout: 'month_view'
      })
    })()
  }, [])
  return (
    <span
      data-cal-namespace={eventName}
      data-cal-link={`${username}/${eventName}`}
      data-cal-config='{"layout":"month_view","theme":"light"}'
    >
      {children}
    </span>
  )
}
