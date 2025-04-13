import { Logo } from './ui'

const navbarItems = [
  { name: 'Início', href: '' },
  { name: 'Agendamentos', href: '' },
  { name: 'Loja', href: '' },
  { name: 'Blog', href: '' }
]

export function Header() {
  return (
    <header className='flex py-2 pt-4 items-center justify-between'>
      <Logo />

      <nav>
        <ul className='flex gap-1 text-sm font-medium'>
          {navbarItems.map(item => {
            return (
              <li key={item.name} className='hover:scale-105 transition-all'>
                <a
                  href={item.href}
                  className='rounded-lg hover:bg-zinc-200/70 p-2'
                >
                  {item.name}
                </a>
              </li>
            )
          })}
        </ul>
      </nav>
    </header>
  )
}
