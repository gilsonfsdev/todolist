import React from 'react'

interface Props {
  children: React.ReactNode,
}

const Modal = ({children}: Props) => {

  const closeModal = (e:React.MouseEvent): void => {
    const modal = document.querySelector("#modal")
    modal?.classList.add("hide");
  }

  return (
    <div id="modal" className='hide'>
      <div className='w-full h-full absolute bg-black opacity-30' onClick={closeModal}></div>
      <div className='absolute top-1/4 left-0 right-0 mx-auto my-0 max-w-lg h-72 z-10 bg-white flex flex-col justify-center items-center rounded-lg'>
        <h2 className='mb-3'>Texto Modal</h2>
        {children}
      </div>
    </div>
  )
}

export default Modal