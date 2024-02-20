import React, { useState } from 'react'



const Button = () => {

  const [{name, handleEdit, handleDelete}] = useState()

  if (name === 'Delete'){
    return (
      <div>
          <button onClick={handleDelete}  type="button" className="btn btn-danger">{name}</button>
      </div>
    )
  }else if(name === 'Edit'){
    return (
      <div>
          <button onClick={handleEdit}  type="button" className="btn btn-danger">{name}</button>
      </div>
    )
  }
    
  
}

export default Button