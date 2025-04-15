import { DotFilledIcon } from '@radix-ui/react-icons'
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import colors from 'tailwindcss/colors'

import { ArrowRightIcon } from '@radix-ui/react-icons'
import NotFound from '@/app/not-found'
import { products } from '@/store'

import { Blockquote } from '@/components/ui/blockquote'

import { handleCalBookingUrl } from '@/utils/handle-cal-booking-url'

interface Props {
  params: Promise<{ id: string }>
}

export default async function Page({ params }: Props) {
  const { id } = await params
  const product = products[Number(id)]

  if (!product) {
    return <NotFound />
  }

  return (
    <div className='pb-28 w-screen min-h-screen p-4 px-4'>
      <img
        src={product.image.src}
        alt={product.image.alt}
        className='aspect-video w-full object-cover rounded-xl h-96'
      />

      <main className='mx-8 sm:mx-20 md:mx-44 flex flex-col items-center'>
        <div>
          <h1 className='mt-4 text-5xl font-semibold text-black font-sans-serif text-pretty py-8'>
            {product.title}
          </h1>
          <a
            className='flex w-fit items-center justify-center gap-2 bg-zinc-200/50 rounded-full p-2 px-4 border border-zinc-300 group cursor-pointer hover:scale-110 transition-all'
            href={handleCalBookingUrl({
              eventName: product.href
            })}
            target='_blank'
          >
            <div className='size-2.5 flex items-center justify-center rounded-full relative'>
              <div className='absolute inset-0 bg-green-400 size-full rounded-full animate-ping' />
              <div className='bg-green-400 rounded-full size-full animate-none block z-20' />
            </div>

            <div className='flex items-center font-medium text-sm justify-center font-sans'>
              <span>{product.price} €</span>
              <DotFilledIcon className='mx-0.5' />
              <span className='flex items-center justify-center gap-1 group-hover:gap-1.5 transition-all'>
                já disponível
                <ArrowRightIcon />{' '}
              </span>
            </div>
          </a>

          <div className='grid place-items-center'>
            <div className='my-12 mt-20'>
              <Blockquote {...product.blockquote}>
                {product.blockquote.text}
              </Blockquote>
            </div>

            <div className='mt-8 prose lg:prose-lg prose-slate font-sans'>
              <Markdown remarkPlugins={[remarkGfm]}>
                {product.markdown}
              </Markdown>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
