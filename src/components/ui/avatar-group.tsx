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
  avatarSeparation = 4,
  contentDirection = 'horizontal',
  text,
  textColor = '#3f3f46'
}: Props) {
  const twAvatarDirection =
    avatarDirection == 'vertical'
      ? `flex-col -space-y-${avatarSeparation}`
      : `-space-x-${avatarSeparation}`

  const twAvatarStyles = `size-${avatarSize} rounded-${avatarBorderRadius} border-${borderThickness} border-${borderColor}`
  const twContentDirection = contentDirection == 'vertical' ? `flex-col` : ''

  return (
    <div
      className={`flex ${twContentDirection} items-center justify-center w-full gap-4 py-10`}
    >
      <div className={`flex ${twAvatarDirection}`}>
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            className={`${twAvatarStyles} object-cover`}
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
