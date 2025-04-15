import Link from 'next/link'

const navbarItems = [
  { name: 'Início', href: '#', isExternal: false },
  { name: 'Loja', href: '#products', isExternal: false },
  { name: 'Agendamentos', href: '#services', isExternal: false },
  { name: 'Blog', href: '', isExternal: false }
]

export function NavBar() {
  return (
    <nav>
      <ul className='flex gap-1 text-sm font-medium'>
        {navbarItems.map(item => {
          return (
            <li key={item.name} className='hover:scale-105 transition-all'>
              <Link
                href={item.href}
                className='rounded-lg hover:bg-zinc-200/70 p-2'
              >
                {item.name}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
