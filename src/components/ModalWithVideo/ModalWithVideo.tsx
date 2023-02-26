import React, { useState } from 'react'
import ModalVideo from 'react-modal-video'
import PlayButton from 'src/assets/icons/play.svg'
import 'src/assets/styles/modalVideo/modal-video.scss'

const ModalWithVideo = () => {
  const [isOpen, setOpen] = useState(false)

  return (
    <>
      <ModalVideo
        channel="youtube"
        isOpen={isOpen}
        videoId="XmttZ-BnwaI"
        onClose={() => setOpen(false)}
      />

      <button
        className="btn-primary absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2"
        onClick={() => setOpen(true)}
      >
        <PlayButton />
      </button>
    </>
  )
}

export default ModalWithVideo
