return (

<div className="container mt-5">

<h2 className="text-center mb-4">
View All Registrations
</h2>

<table className="table table-bordered table-striped">

<thead className="table-dark">

<tr>

<th>Reg No</th>
<th>Name</th>
<th>Branch</th>
<th>SSLC</th>
<th>Plus Two</th>
<th>UG</th>
<th>PG</th>

</tr>

</thead>

<tbody>

{
students.map((student,index)=>(

<tr key={index}>

<td>{student.regno}</td>
<td>{student.name}</td>
<td>{student.branch}</td>
<td>{student.sslc}</td>
<td>{student.plustwo}</td>
<td>{student.ugmark}</td>
<td>{student.pgmark}</td>

</tr>

))
}

</tbody>

</table>

</div>

)