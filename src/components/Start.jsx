import React, { useRef } from 'react'

const Start = ({setUserName}) => {
    const inputRef = useRef()

    const handleClick = () => {
        inputRef.current.value && setUserName(inputRef.current.value)
    }
  return (
    <div className='start'>
        <input ref={inputRef} placeholder='masukan nama' className='startInput'/>
        <button onClick={handleClick} className='startButton'>Mulai</button>
    </div>
  )
}

export default Start