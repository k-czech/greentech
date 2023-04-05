import { IGatsbyImageData, StaticImage } from 'gatsby-plugin-image'
import React, { useState } from 'react'
import ModalVideo from 'react-modal-video'
import 'src/assets/styles/modalVideo/modal-video.scss'
import Image from '../Image/Image'

interface videoProps {
  videoId: string
  image: {
    gatsbyImageData: IGatsbyImageData
  }
}

const ModalWithVideo = ({ videoId, image }: videoProps) => {
  const [isOpen, setOpen] = useState(false)

  console.log(videoId)
  return (
    <div className="relative max-w-[400px] lg:max-w-none">
      <Image image={image.gatsbyImageData} alt="video thumbnail" />
      <ModalVideo
        channel="youtube"
        isOpen={isOpen}
        videoId={videoId}
        onClose={() => setOpen(false)}
      />

      <button
        className="btn-primary absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 transition-transform hover:scale-105 "
        onClick={() => setOpen(true)}
      >
        <StaticImage src="../../assets/icons/play.svg" alt="play ico" />
      </button>
    </div>
  )
}

export default ModalWithVideo
