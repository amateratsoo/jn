import { ArrowRightIcon } from '@radix-ui/react-icons'

const products = [
  {
    image: {
      src: 'https://images.unsplash.com/photo-1489674297774-eadf82cba14c?q=80&w=783&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: 'foto de uma mulher grávida, foto de Janko Ferlič'
    },
    title: 'Consultoria de imagem para grávida e pós-parto',
    discountPrice: 375.0,
    price: 394.0,
    href: '',
    color: 'bg-zinc-200/50'
  },

  {
    image: {
      src: 'https://todecacho.com.br/wp-content/uploads/2018/08/Visagismo6-Unsplash.jpg',
      alt: 'uma imagem mostrando uma mulher com cabelo cacheado'
    },
    title: 'Visagismo',
    discountPrice: null,
    price: 85.0,
    href: '',
    color: 'bg-pink-200/60'
  },

  {
    image: {
      src: 'https://images.unsplash.com/photo-1527011046414-4781f1f94f8c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: 'uma imagem mostrando uma sessão de fotos de plantas'
    },
    title: 'Styling para sessão de foto profissional',
    discountPrice: null,
    price: 350.0,
    href: '',
    color: 'bg-zinc-200/50'
  },

  {
    image: {
      src: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=958&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: 'uma imagem mostrando uma cadeira centrada numa casa estúdio'
    },
    title: 'Projeto de decoração de interiores',
    discountPrice: 700.0,
    price: 890.0,
    href: '',
    color: 'bg-amber-200/20'
  }
]

export function ProductsSection() {
  return (
    <div>
      <h2 className='font-medium py-16 pb-10 text-5xl font-sans-serif text-center'>
        Explore a nossa coleção de produtos
      </h2>

      <div>
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-3'>
          {products.map((product, index) => {
            const hasDiscount = product.discountPrice !== null

            return (
              <article
                className={`rounded-3xl overflow-hidden p-5 flex flex-col ${product.color}`}
                key={index}
              >
                <img
                  src={product.image.src}
                  alt={product.image.alt}
                  className='object-cover w-full h-full rounded-xl'
                />

                <div className='flex flex-col gap-2 pt-4'>
                  <span className='font-semibold text-xl'>{product.title}</span>

                  <div className='flex items-center gap-2'>
                    {hasDiscount ? (
                      <>
                        <span className='line-through text-sm text-red-400'>
                          {product.price.toFixed(2)} €
                        </span>
                        <span className='text-lg font-semibold text-zinc-900 font-sans-serif'>
                          {product.discountPrice.toFixed(2)} €
                        </span>
                        {/* <span className='text-sm text-red-200 bg-red-400 rounded-lg px-2 py-0.5'>
                        -
                        {Math.round(
                          100 -
                            (product.discountPrice * 100) / product.price
                        )}
                        %
                      </span> */}
                      </>
                    ) : (
                      <span className='text-lg font-semibold font-sans-serif'>
                        {product.price.toFixed(2)} €
                      </span>
                    )}
                  </div>

                  <button className='bg-black w-fit text-white p-2 rounded-lg text-sm mt-1.5 px-3.5 cursor-pointer flex gap-1 items-center hover:gap-2 group transition-all'>
                    ver mais
                    <ArrowRightIcon className='-rotate-45 group-hover:rotate-0 transition-all' />
                  </button>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </div>
  )
}
