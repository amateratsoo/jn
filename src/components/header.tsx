import { NavBar } from './header/nav-bar'
import { Logo } from './ui'

export function Header() {
  return (
    <header className='flex py-2 pt-4 items-center justify-between'>
      <Logo />
      <NavBar />
    </header>
  )
}
