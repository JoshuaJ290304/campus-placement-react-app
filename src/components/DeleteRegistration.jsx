import React from 'react'

const DeleteRegistration = () => {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">

        <div className="col-md-6">

          <div className="card shadow">

            <div className="card-header bg-danger text-white text-center">
              <h3>Delete Registration</h3>
            </div>

            <div className="card-body">

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

              <div className="d-grid">
                <button className="btn btn-danger">
                  Delete
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>
    </div>
  )
}

export default DeleteRegistration