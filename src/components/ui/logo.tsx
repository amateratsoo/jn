interface Props {
  justIcon?: boolean
  color?: string
}

export function Logo({ justIcon = false, color = '#09090b' }: Props) {
  return (
    <a href='#'>
      <span className='space-x-1'>
        <svg
          className='size-10 inline'
          viewBox='0 0 76 80'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M55.317 33.941C56.5542 40.9576 52.6649 45.8711 45.4118 47.15C39.8705 48.1271 35.2115 46.4697 33.0201 42.5896C32.7564 42.1227 32.705 41.5654 32.8779 41.0578C33.0509 40.5502 33.432 40.1388 33.9261 39.9306L37.1698 38.564C37.9416 38.2389 38.8332 38.4634 39.3602 39.1143C40.3291 40.3113 41.9035 40.9801 43.9744 40.6149C46.9309 40.0936 48.5365 37.9 48.0013 34.8649L46.0411 23.748L34.6862 25.7502C33.6638 25.9305 32.6888 25.2478 32.5085 24.2253L32.0423 21.5817C31.8621 20.5592 32.5447 19.5842 33.5672 19.4039L50.3238 16.4493C51.3463 16.269 52.3213 16.9517 52.5016 17.9742L55.317 33.941ZM69.525 11.5852C68.1807 3.96152 60.9108 -1.12898 53.2871 0.215293L23.1145 5.53551C19.4535 6.18105 16.1988 8.25455 14.0665 11.2997L2.53497 27.7685C0.402676 30.8137 -0.432546 34.5812 0.213028 38.2423L5.53321 68.4148C6.87748 76.0385 14.1475 81.129 21.7712 79.7847L51.9437 74.4645C55.6048 73.8189 58.8595 71.7455 60.9917 68.7003L72.5233 52.2315C74.6556 49.1864 75.4907 45.4188 74.8453 41.7577L69.525 11.5852ZM69.3583 42.9276C70.1648 47.5018 67.1105 51.8638 62.5363 52.6703L32.1675 58.0252C27.5934 58.8317 23.2313 55.7774 22.4248 51.2032L17.0699 20.8345C16.2634 16.2603 19.3177 11.8983 23.8919 11.0917L54.2607 5.73688C58.8349 4.93033 63.1968 7.9846 64.0035 12.5589L69.3583 42.9276Z'
            fill={color}
          />
        </svg>
        {!justIcon && (
          <span
            className='font-sans-serif font-semibold text-lg hidden md:inline'
            style={{ color: color }}
          >
            Jussela Nascimento
          </span>
        )}
      </span>
    </a>
  )
}
