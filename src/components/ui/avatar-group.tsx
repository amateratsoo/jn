'use client'

import { useState, useEffect } from 'react'

interface Props {
  images: {
    src: string
    alt: string
  }[]

  avatarSize?: number
  avatarDirection?: 'vertical' | 'horizontal'
  avatarBorderRadius?:
    | 'xs'
    | 'sm'
    | 'md'
    | 'lg'
    | 'xl'
    | '2xl'
    | '3xl'
    | '4xl'
    | 'none'
    | 'full'
  borderThickness?: number
  borderColor?: string
  avatarSeparation?: number
  contentDirection?: 'vertical' | 'horizontal'
  contentSeparation?: number
  text: string
  textColor?: string
}

export function AvatarGroup({
  images,
  avatarBorderRadius = 'full',
  borderThickness = 4,
  borderColor = 'white',
  avatarDirection = 'horizontal',
  avatarSize = 16,
  avatarSeparation = -1,
  contentDirection = 'horizontal',
  contentSeparation = 1.4,
  text,
  textColor = '#3f3f46'
}: Props) {
  const handleBorderRadius = () => {
    switch (avatarBorderRadius) {
      case 'xs':
        return '0.125rem'
      case 'sm':
        return '0.25rem'
      case 'md':
        return '0.375rem'
      case 'lg':
        return '0.5rem'
      case 'xl':
        return '0.75rem'
      case '2xl':
        return '1rem'
      case '3xl':
        return '1.5rem'
      case '4xl':
        return '2rem'
      case 'none':
        return 0
      case 'full':
        return 'calc(infinity * 1px)'
    }
  }

  const [componentIsReady, setComponentIsReady] = useState(false)

  useEffect(() => {
    setComponentIsReady(true)
  }, [])

  return (
    <div
      className='flex items-center justify-center w-full py-10'
      style={{
        gap: `${contentSeparation}rem`,
        flexDirection:
          contentDirection == 'vertical'
            ? 'column'
            : `${
                componentIsReady && matchMedia('(width >= 48rem)').matches
                  ? 'row'
                  : 'column'
              }`
      }}
    >
      <div
        className='flex'
        style={{
          flexDirection: avatarDirection == 'vertical' ? 'column' : 'row'
        }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            className='object-cover'
            style={{
              borderRadius: handleBorderRadius(),
              width: `${avatarSize * 0.25}rem`,
              height: `${avatarSize * 0.25}rem`,
              border: `${borderThickness}px solid ${borderColor}`,
              marginBlockStart:
                avatarDirection == 'vertical'
                  ? `calc(8px * ${avatarSeparation})`
                  : undefined,
              marginBlockEnd:
                avatarDirection == 'vertical'
                  ? `calc(8px * ${avatarSeparation})`
                  : undefined,
              marginInlineStart:
                avatarDirection == 'horizontal'
                  ? `calc(8px * ${avatarSeparation})`
                  : undefined,
              marginInlineEnd:
                avatarDirection == 'horizontal'
                  ? `calc(8px * ${avatarSeparation})`
                  : undefined
            }}
          />
        ))}
      </div>

      <span
        className='text-lg font-medium whitespace-nowrap'
        style={{ color: textColor }}
      >
        {text}
      </span>
    </div>
  )
}
