import { Hero, ProductsSection, ServicesSection } from '@/components/home'
import { AvatarGroup } from '@/components/ui'
import { Footer } from '@/components/footer'
import { Blockquote } from '@/components/ui/blockquote'

const clientsImages = [
  {
    src: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: ''
  },
  {
    src: 'https://images.unsplash.com/photo-1676025911719-32ff252572e9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIxfHx8ZW58MHx8fHx8',
    alt: ''
  },
  {
    src: 'https://plus.unsplash.com/premium_photo-1689551671541-31a345ce6ae0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIzfHx8ZW58MHx8fHx8',
    alt: ''
  },
  {
    src: 'https://plus.unsplash.com/premium_photo-1690587673708-d6ba8a1579a5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHx8',
    alt: ''
  },
  {
    src: 'https://images.unsplash.com/photo-1654110455429-cf322b40a906?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDQwfHx8ZW58MHx8fHx8',
    alt: ''
  }
]

export default function Home() {
  return (
    <div className='font-sans'>
      <main className='px-4'>
        <Hero />
        <ProductsSection />
        <div className='my-3'>
          <AvatarGroup images={clientsImages} text='40+ clientes satisfeitos' />
        </div>
        <ServicesSection />

        <div className='w-full flex justify-center my-36'>
          <div className='w-[34rem]'>
            <Blockquote
              author='Carla Abrantes'
              avatar={{
                src: 'https://images.unsplash.com/photo-1694436085959-fd3cdb3293c3?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmxhY2slMjBnaXJsJTIwY3VybHklMjBoYWlyfGVufDB8fDB8fHww',
                alt: 'avatar of a person giving a testimony'
              }}
              text='Sempre gostei de decoração, mas faltava direção. Com a ajuda deles, consegui criar um ambiente que realmente reflete minha personalidade — acolhedor, bonito e funcional.'
              subtitle='cliente apaixonada por design'
            />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
