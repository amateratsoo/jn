interface Props {
  justIcon?: boolean
}

export function Logo({ justIcon = false }: Props) {
  return (
    <a href=''>
      <span className='space-x-1'>
        <img src='logo.svg' alt='website logo' className='size-10 inline' />
        {!justIcon && (
          <span className='font-sans-serif font-semibold text-lg'>
            Jussela Nascimento
          </span>
        )}
      </span>
    </a>
  )
}
