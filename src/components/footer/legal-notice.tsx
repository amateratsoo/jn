import { Logo } from '../ui'

export function LegalNotice() {
  return (
    <div className='py-4 flex justify-between items-center w-full'>
      <span className='text-zinc-300 text-sm'>
        &copy; {new Date().getFullYear()} Todos os direitos reservados
      </span>

      <div className='scale-90'>
        <Logo color='#d4d4d8' />
      </div>
    </div>
  )
}
