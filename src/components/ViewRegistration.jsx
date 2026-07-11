import React, { useEffect, useState } from "react";

const ViewRegistration = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/anishpdm/demo-json-api/refs/heads/main/placement.json"
    )
      .then((response) => response.json())
      .then((data) => setStudents(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="container mt-5">
      <div className="card shadow">

        <div className="card-header bg-success text-white">
          <h3 className="text-center mb-0">View All Registrations</h3>
        </div>

        <div className="card-body">

          <p className="fw-bold">
            Total Students : {students.length}
          </p>

          <div className="table-responsive">

            <table className="table table-bordered table-striped table-hover">

              <thead className="table-dark">

                <tr>
                  <th>Registration No</th>
                  <th>Name</th>
                  <th>Branch</th>
                  <th>SSLC</th>
                  <th>Plus Two</th>
                  <th>UG Mark</th>
                  <th>PG Mark</th>
                </tr>

              </thead>

              <tbody>

                {students.map((student, index) => (
                  <tr key={index}>
                    <td>{student.regno}</td>
                    <td>{student.name}</td>
                    <td>{student.branch}</td>
                    <td>{student.sslc}</td>
                    <td>{student.plustwo}</td>
                    <td>{student.ugmark}</td>
                    <td>{student.pgmark}</td>
                  </tr>
                ))}

              </tbody>

            </table>

          </div>

        </div>

      </div>
    </div>
  );
};

export default ViewRegistration;