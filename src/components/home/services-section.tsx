import { ArrowRightIcon } from '@radix-ui/react-icons'

const services = [
  {
    image: {
      src: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGludGVyaW9yJTIwZGVzaWdufGVufDB8fDB8fHww',
      alt: 'uma sala de estar com muitas plantas e um sofá cinza no meio'
    },
    title: 'Consultoria para redecorar espaços',
    description:
      'Mais do que decorar, queremos criar um espaço onde se sinta mesmo bem. Um cantinho com o seu jeito, feito com carinho.',
    discountPrice: null,
    price: 350.0
  },
  {
    image: {
      src: 'https://images.unsplash.com/photo-1571845239362-3005aa49dcfd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDgwfHx3b3Jrc2hvcHxlbnwwfHwwfHx8MA%3D%3D',
      alt: 'grupo de pessoas de pé em um corredor'
    },
    title: 'Workshop de imagem e estilo para empresas',
    description:
      'Melhore a apresentação da sua equipa com técnicas práticas de imagem e estilo. Um investimento na forma como a sua marca é representada.',
    discountPrice: null,
    price: null
  }
]

export function ServicesSection() {
  return (
    <section>
      <h2 className='font-medium py-3 pb-10 text-5xl font-sans-serif text-center'>
        Agende já os nossos serviços profissionais
      </h2>

      <div className='space-y-7 mx-20 lg:mx-52'>
        {services.map((service, index) => (
          <div key={index} className='flex flex-col'>
            <img
              src={service.image.src}
              alt={service.image.alt}
              className='aspect-video w-full  h-80 object-cover rounded-xl brightness-90'
            />

            <div className='my-5 '>
              <h3 className='text-4xl font-medium'>{service.title}</h3>
              <p className='my-4 w-[34rem] font-sans-serif text-balance'>
                {service.description}
              </p>
              <button className='bg-black w-fit text-white p-2 rounded-lg text-sm mt-1.5 px-3.5 cursor-pointer flex gap-1 items-center hover:gap-2 group transition-all'>
                agendar
                <ArrowRightIcon className='-rotate-45 group-hover:rotate-0 transition-all' />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
