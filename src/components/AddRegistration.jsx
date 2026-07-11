import React from "react";

const AddRegistration = () => {
  return (
    <div className="container mt-5 mb-5">
      <div className="row justify-content-center">
        <div className="col-md-8">

          <div className="card shadow">
            <div className="card-header bg-primary text-white text-center">
              <h3>Student Registration</h3>
            </div>

            <div className="card-body">

              <form>

                <div className="mb-3">
                  <label className="form-label">Registration Number</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Registration Number"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Full Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Full Name"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Aadhar Number</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Aadhar Number"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Email Address</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter Email Address"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Phone Number</label>
                  <input
                    type="tel"
                    className="form-control"
                    placeholder="Enter Phone Number"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Branch / Department</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Branch / Department"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">SSLC Mark (%)</label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Enter SSLC Mark"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Plus Two Mark (%)</label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Enter Plus Two Mark"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">UG Degree Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter UG Degree"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">UG Mark (%)</label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Enter UG Mark"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">PG Degree Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter PG Degree (Optional)"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">PG Mark (%)</label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Enter PG Mark (Optional)"
                  />
                </div>

                <div className="d-grid">
                  <button
                    type="submit"
                    className="btn btn-success"
                  >
                    Submit
                  </button>
                </div>

              </form>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AddRegistration;