import React, { useState } from 'react'

const ModelComponent = () => {
    const [showModel, setShowModel] = useState(false)

    const open =() => setShowModel(true)
    const close =() => setShowModel(false)
  return (
    <>
    <button onClick={open}>Open model</button>
    {
        showModel && (
                <div onClick={close}>
        <div onClick={(e) => e.stopPropagation()}>
            <h2>This is a model</h2>
            <p>you can put any content here</p>
            <button onClick={close}>close</button>
        </div>
    </div>
        )
        
    }

    </>
  )
}

export default ModelComponent