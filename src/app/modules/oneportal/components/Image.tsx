export type ImageProps = {
  src: string
  alt?: string
  className?: string
}
export const Image = (props: ImageProps) => {
  const { src, alt, className } = props
  return (
    <img
      src={src}
      className={className}
      alt={alt}
      onError={({ currentTarget }) => {
        currentTarget.onerror = null
        currentTarget.src = "https://placeimg.com/200/300/animals"
      }}
    />
  )
}
