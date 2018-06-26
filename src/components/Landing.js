
import React from 'react'

function Landing() {
  return (
   <div className="row" >
    <div className="col 10 table_display offset-s2">
        <table className="highlight responsive-table centered">
            <thead>
            <h5 className="center-align">May Payments</h5>
                <tr>
                    
                    <th>Name</th>
                    <th>Phone</th>
                    <th>Day</th>
                    <th>Inception</th>
                    <th>Paid</th>
                    <th>Premium</th>
                    <th>Task / Comment</th>
                    <th>Carrier</th>
                    <th>Policy</th>
                </tr>
            </thead>

            <tbody>
                <tr className="hoverable">
                    <td>John Doe</td>
                    <td>49389090</td>
                    <td>13</td>
                    <td>2/13/2018</td>
                    <td>False</td>
                    <td>$230.00</td>
                    <td>Call to make payment</td>
                    <td>Progressive</td>
                    <td>EAL23098998</td>
                </tr>

                 <tr className="hoverable">
                    <td>Marry Doe</td>
                    <td>9848748372</td>
                    <td>15</td>
                    <td>5/15/2018</td>
                    <td>True</td>
                    <td>$210.00</td>
                    <td></td>
                    <td>Empower</td>
                    <td>EAS308282</td>
                </tr>

            </tbody>
        </table>
    </div></div>
  );
}

export default Landing;
