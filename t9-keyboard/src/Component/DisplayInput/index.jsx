import React, { memo } from 'react'

const DisplayInput = ({input}) => {
  return (
    <form>
        <input value={input} readOnly type={'text'}></input>
    </form>
  )
}

export default memo(DisplayInput)