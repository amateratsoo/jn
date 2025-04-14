import { ArrowTopRightIcon, InstagramLogoIcon } from '@radix-ui/react-icons'
import { Logo } from './ui'

const links = [
  {
    title: 'Redes sociais',
    links: [
      {
        name: 'Instagram',
        href: '',
        icon: InstagramLogoIcon
      }
    ]
  },
  {
    title: 'Apoio ao cliente',
    links: [
      {
        name: 'Suporte técnico',
        href: '',
        icon: null
      },
      {
        name: 'Agendamentos',
        href: '',
        icon: null
      }
    ]
  },
  {
    title: 'Sobre nós',
    links: [
      {
        name: 'Quem somos',
        href: '',
        icon: null
      },
      {
        name: 'Política de privacidade',
        href: '',
        icon: null
      },
      {
        name: 'Termos de uso',
        href: '',
        icon: null
      }
    ]
  }
]

export function Footer() {
  return (
    <div className='mt-96 relative'>
      <img
        src='lovebirds.svg'
        alt=''
        className='size-72 absolute -top-60 lg:left-40'
      />
      <footer className='bg-black w-full px-20 lg:px-52 relative z-20'>
        <div className='w-full flex py-16 pt-24 justify-between gap-4'>
          <div>
            <h2 className='text-white text-5xl'>Faça parte da comunidade</h2>

            <p className='text-white pt-8 font-sans-serif min-w-80 w-80'>
              Segue-nos nas redes sociais e fica por dentro de todas as
              novidades, dicas e inspirações.
            </p>

            <div className='flex text-white flex-col mt-7 gap-4'>
              {links.map(link => (
                <div key={link.title}>
                  <h4 className='text-lg my-1.5 text-white'>{link.title}</h4>
                  <ul className=''>
                    {link.links.map(l => {
                      const Icon = l.icon || ArrowTopRightIcon

                      return (
                        <li key={l.name}>
                          <a
                            className='underline flex items-center gap-1 text-zinc-300 text-sm w-fit'
                            href={l.href}
                          >
                            <Icon />
                            {l.name}
                          </a>
                        </li>
                      )
                    })}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className='hidden md:block'>
            <img
              src='https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=958&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              alt='uma imagem mostrando uma cadeira centrada numa casa estúdio'
              className='rounded-xl aspect-video object-cover w-[30rem]'
            />
          </div>
        </div>

        <div className='py-4 flex justify-between items-center w-full'>
          <span className='text-zinc-300 text-sm'>
            &copy; {new Date().getFullYear()} todos os direitos reservados
          </span>

          <div className='scale-90'>
            <Logo color='#d4d4d8' />
          </div>
        </div>
      </footer>
    </div>
  )
}
