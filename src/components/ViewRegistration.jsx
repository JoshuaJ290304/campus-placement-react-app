import React, { useEffect, useState } from "react";

const API_URL =
  "https://raw.githubusercontent.com/anishpdm/demo-json-api/refs/heads/main/placement.json";

const ViewRegistration = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => setStudents(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="container mt-5">

      <div className="card shadow">

        <div className="card-header bg-success text-white">
          <h3 className="text-center mb-0">
            View All Registrations
          </h3>
        </div>

        <div className="card-body">

          <div className="table-responsive">

            <table className="table table-bordered table-striped table-hover">

              <thead className="table-dark">

                <tr>
                  <th>Registration Number</th>
                  <th>Full Name</th>
                  <th>Branch</th>
                  <th>SSLC Mark</th>
                  <th>Plus Two Mark</th>
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