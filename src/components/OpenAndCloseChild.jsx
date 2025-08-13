import React from 'react'

const OpenAndCloseChild = ({isOpen, onClose, children}) => {
    if(!isOpen) return null
  return (
    <div>
        {children}
        <button onClick={onClose}>Close</button>

    </div>
  )
}

export default OpenAndCloseChild