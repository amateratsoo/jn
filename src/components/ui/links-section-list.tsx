import type { ForwardRefExoticComponent, RefAttributes } from 'react'
import { ArrowTopRightIcon } from '@radix-ui/react-icons'
import { IconProps } from '@radix-ui/react-icons/dist/types'

interface Props {
  list: Array<{
    title: string
    links: {
      name: string
      href: string
      icon: null | ForwardRefExoticComponent<
        IconProps & RefAttributes<SVGSVGElement>
      >
    }[]
  }>
}

export function LinksSectionList({ list }: Props) {
  return (
    <div className='flex text-white flex-col mt-7 gap-4'>
      {list.map((section, index) => (
        <div key={index}>
          <h4 className='text-lg my-1.5 text-white'>{section.title}</h4>
          <ul className=''>
            {section.links.map(link => {
              const Icon = link.icon || ArrowTopRightIcon

              return (
                <li key={link.name}>
                  <a
                    className='underline flex items-center gap-1 text-zinc-300 text-sm w-fit'
                    href={link.href}
                  >
                    <Icon />
                    {link.name}
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
      ))}
    </div>
  )
}
