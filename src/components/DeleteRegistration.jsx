import React from 'react'

const DeleteRegistration = () => {
  return (
    <div className="container mt-5">

      <h2 className="text-center mb-4">
        Delete Registration
      </h2>

      <div className="mb-3">
        <label className="form-label">
          Registration Number
        </label>

        <input
          type="text"
          className="form-control"
          placeholder="Enter Registration Number"
        />
      </div>

    </div>
  )
}

export default DeleteRegistration