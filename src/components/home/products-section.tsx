import Link from 'next/link'

import { ArrowRightIcon } from '@radix-ui/react-icons'
import { products } from '@/store'

export function ProductsSection() {
  return (
    <section id='products'>
      <h2 className='font-medium py-16 pb-10 text-5xl font-sans-serif text-center'>
        Explore a nossa coleção de produtos
      </h2>

      <div>
        <div className='grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-4 gap-3'>
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
                  <span className='font-medium text-xl'>{product.title}</span>

                  <div className='flex items-center gap-2'>
                    {hasDiscount ? (
                      <>
                        <span className='line-through text-sm text-red-400'>
                          {product.price.toFixed(2)} €
                        </span>
                        <span className='text-lg  text-zinc-900 font-sans-serif'>
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
                      <span className='text-lg  font-sans-serif'>
                        {product.price.toFixed(2)} €
                      </span>
                    )}
                  </div>

                  <Link
                    prefetch
                    href={`products/${index}`}
                    className='bg-black w-fit text-white p-2 rounded-lg text-sm mt-1.5 px-3.5 cursor-pointer flex gap-1 items-center hover:gap-2 group transition-all'
                  >
                    ver mais
                    <ArrowRightIcon className='-rotate-45 group-hover:rotate-0 transition-all' />
                  </Link>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
