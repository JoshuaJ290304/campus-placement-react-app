import React from 'react'

const AddRegistration = () => {
  return (
    <div className="container mt-5">

      <h2 className="text-center mb-4">
        Student Registration
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

      <div className="mb-3">
        <label className="form-label">
          Full Name
        </label>

        <input
          type="text"
          className="form-control"
          placeholder="Enter Full Name"
        />
      </div>

      <div className="mb-3">
        <label className="form-label">
          Aadhar Number
        </label>

        <input
          type="text"
          className="form-control"
          placeholder="Enter Aadhar Number"
        />
      </div>

    </div>
  )
}

export default AddRegistration