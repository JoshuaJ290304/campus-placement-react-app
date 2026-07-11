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
          <h3 className="text-center">
            View All Registrations
          </h3>
        </div>

        <div className="card-body">

          <div className="table-responsive">

            <table className="table table-bordered table-striped table-hover">

              <thead className="table-dark">

                <tr>

                  <th>Registration No</th>
                  <th>Full Name</th>
                  <th>Branch</th>
                  <th>SSLC Mark</th>
                  <th>Plus Two Mark</th>
                  <th>UG Mark</th>
                  <th>PG Mark</th>

                </tr>

              </thead>

              <tbody>

                {students.map((student) => (

                  <tr key={student.regNo}>

                    <td>{student.regNo}</td>
                    <td>{student.fullName}</td>
                    <td>{student.branch}</td>
                    <td>{student.sslcMark}</td>
                    <td>{student.plusTwoMark}</td>
                    <td>{student.ugMark}</td>
                    <td>{student.pgMark ?? "-"}</td>

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