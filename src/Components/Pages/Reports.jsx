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
              <a href="https://iris.who.int/bitstream/handle/10665/349091/WHO-EURO-2021-2661-42417-58838-eng.pdf" target="_blank">
              <button className='btn-primary'>View Report</button>
              </a>
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
              <a href="https://iris.who.int/bitstream/handle/10665/349091/WHO-EURO-2021-2661-42417-58838-eng.pdf" target="_blank">
                <button className='btn-primary'>View Report</button>
                </a>
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