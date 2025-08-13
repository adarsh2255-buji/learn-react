import React, { useState } from 'react'

const Form = () => {
    const [formData, setFormData] = useState({
        name : "",
        email : ""
    })
    const [error, setError] = useState({})

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name] : e.target.value})
    }

    const validate = () => {
        const newError = {}
        if(!formData.name.trim()) newError.name = "Name is required"
        if(!formData.email.includes("@")) newError.email = "enter valid email"
        return newError
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const validationError = validate()
        if(Object.keys(validationError).length > 0 ){
            setError(validationError)
        } else{
              console.log(formData)
              setError({})
              setFormData({
                name: "",
                email : ""
              })
        }
      
    }
  return (
    <>
    <form onSubmit={handleSubmit}>
        <div>
            <label>Name : </label>
            <input type="text" name='name' value={formData.name} onChange={handleChange} />
            {error.name && <p>{error.name}</p> }

        </div>
        <div>
            <label>Email : </label>
            <input type="email" name='email' value={formData.email} onChange={handleChange} />
            {error.email && <p>{error.email}</p>}
        </div>
        <button type="submit">Submit</button>
    </form>
    </>
  )
}

export default Form