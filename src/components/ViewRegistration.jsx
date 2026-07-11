import React, { useEffect, useState } from "react";

const ViewRegistration = () => {

    const [students, setStudents] = useState([]);

    useEffect(() => {

        fetch("https://raw.githubusercontent.com/anishpdm/demo-json-api/refs/heads/main/placement.json")
            .then(response => response.json())
            .then(data => setStudents(data));

    }, []);

    return (
        <div className="container mt-5">
            <h2 className="text-center">
                View All Registrations
            </h2>

            <p>Total Students : {students.length}</p>

        </div>
    );
};

export default ViewRegistration;