import { ArrowRightIcon } from '@radix-ui/react-icons'

import { services } from '@/store'
import { handleCalBookingUrl } from '@/utils/handle-cal-booking-url'

export function ServicesSection() {
  return (
    <section id='services'>
      <h2 className='font-medium py-16 pb-10 text-5xl font-sans-serif text-center'>
        Agende já os nossos serviços profissionais
      </h2>

      <div className='space-y-7 mx-7 sm:mx-20 lg:mx-52'>
        {services.map((service, index) => (
          <div key={index} className='flex flex-col'>
            <img
              src={service.image.src}
              alt={service.image.alt}
              className='aspect-video w-full  h-80 object-cover rounded-xl brightness-90'
            />

            <div className='my-5 '>
              <h3 className='text-2xl sm:text-4xl font-medium'>
                {service.title}
              </h3>
              <p className='my-4 w-full sm:w-[34rem] font-sans-serif text-balance'>
                {service.description}
              </p>
              <a
                className='bg-black w-fit text-white p-2 rounded-lg text-sm mt-1.5 px-3.5 cursor-pointer flex gap-1 items-center hover:gap-2 group transition-all'
                href={handleCalBookingUrl({
                  eventName: service.title
                })}
                target='_blank'
              >
                agendar
                <ArrowRightIcon className='-rotate-45 group-hover:rotate-0 transition-all' />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
