import React, { useState } from 'react'
import OpenAndCloseChild from './OpenAndCloseChild';

const OpenAndCloseParent = () => {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
        <button onClick={() => setIsOpen(true)}>open model</button>

        <OpenAndCloseChild isOpen={isOpen} onClose={() => setIsOpen(false)}>
            <p>this is a model</p>
        </OpenAndCloseChild>
    </div>
  )
}

export default OpenAndCloseParent