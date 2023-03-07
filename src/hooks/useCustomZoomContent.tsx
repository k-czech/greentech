import React from 'react'
import Image from 'src/components/Image/Image'

export const CustomZoomContent = ({ buttonUnzoom, modalState, img }: any) => {
  const [isLoaded, setIsLoaded] = React.useState(false)

  React.useLayoutEffect(() => {
    if (modalState === 'LOADED') {
      setIsLoaded(true)
    } else if (modalState === 'UNLOADING') {
      setIsLoaded(false)
    }
  }, [modalState])
  console.log(img)

  return (
    <>
      {buttonUnzoom}

      <Image image={img.props.src} alt="" />
    </>
  )
}
