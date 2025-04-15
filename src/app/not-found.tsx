import Link from 'next/link'
import { ArrowRightIcon } from '@radix-ui/react-icons'

export default function NotFound() {
  return (
    <div className='w-screen h-screen font-sans'>
      <main className='grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8'>
        <div className='text-center'>
          <p className='text-base font-semibold text-yellow-600'>404</p>
          <h1 className='mt-4 text-5xl font-semibold tracking-tight text-balance text-black'>
            Página não encontrada
          </h1>
          <p className='mt-6 text-base sm:text-lg font-medium text-pretty text-zinc-700'>
            Não conseguimos encotrar a página que procura.
          </p>
          <div className='mt-10 flex-col sm:flex-row flex items-center justify-center gap-2'>
            <Link
              href='/'
              prefetch
              className='bg-black w-fit text-white p-2 rounded-lg text-sm mt-1.5 px-3.5 cursor-pointer  font-medium flex items-center justify-center gap-1'
            >
              voltar para o site
            </Link>

            <Link
              href='/'
              className='w-fit text-black p-2 rounded-lg text-sm mt-1.5 px-3.5 cursor-pointer font-medium flex items-center justify-center gap-1 hover:gap-2 transition-all'
            >
              Falar com o suporte{' '}
              <span aria-hidden='true'>
                <ArrowRightIcon />
              </span>
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}
