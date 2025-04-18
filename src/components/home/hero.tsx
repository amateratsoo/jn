import { Header } from '../header'
import { FadingWords } from '../ui'

export function Hero() {
  return (
    <section className='h-screen'>
      <Header />

      <div className='py-2 overflow-hidden relative h-[calc(100%-4.5rem)]'>
        <img
          src='hero-image.jpg'
          // src='https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          // alt='uma imagem mostrando uma sala de estar bem arrumada'
          alt=''
          className='rounded-2xl object-cover w-full h-full brightness-[30%]'
        />

        <h1 className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:text-6xl text-5xl font-semibold font-sans-serif text-white w-full'>
          <div className='flex flex-col items-center'>
            <span className='text-center'>Porque tu mereces ter </span>
            <FadingWords
              animationDuration={4.5}
              words={['Estilo', 'Autenticidade', 'Beleza']}
            />
          </div>
        </h1>
      </div>
    </section>
  )
}
