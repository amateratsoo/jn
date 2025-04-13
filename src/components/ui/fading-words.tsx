interface Props {
  words: string[]
  animationDuration: number
}

export function FadingWords({ words, animationDuration }: Props) {
  return (
    <span className='relative'>
      {words.map((word, index) => {
        return (
          <span
            key={index}
            className='animate-fadeInOut opacity-0 top-0 left-1/2 -translate-x-1/2 absolute'
            style={{
              animationDelay: `${index * animationDuration}s`,
              animationDuration: `${words.length * animationDuration}s`
            }}
          >
            {word.toLowerCase()}
          </span>
        )
      })}
    </span>
  )
}
