import React from 'react'

const Reports = () => {
  return (
    <div className='review-layout'>
      <h2 style={{textAlign: "left"}}>Reports</h2>
      <table className='table-rv' id='reports'>
        <thead>
          <tr className='table-head'>          
            <th>No.</th>
            <th>Doctor Name</th>
            <th>Doctor Specialty</th>
            <th>View Report</th>
            <th>Download Report</th>
          </tr>
        </thead>
        <tbody className='table-body'>
          <tr>
            <td>1</td>
            <td>Dr. Loria Musset</td>
            <td>Dentist</td>
            <td>
              <button className='btn-primary'>View Report</button>
            </td>
            <td>
              <button className='btn-primary'>Download</button>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Dr. Gregory Schneider</td>
            <td>Neurosurgery</td>
            <td>
              <button className='btn-primary'>View Report</button>
            </td>
            <td>
              <button className='btn-primary'>Download</button>
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>Dr. Petra Kilback</td>
            <td>Anesthesiology</td>
            <td>
              <button className='btn-primary'>View Report</button>
            </td>
            <td>
              <button className='btn-primary'>Download</button>
            </td>
          </tr>
        </tbody>
      </table>

    </div>
  )
}

export default Reports