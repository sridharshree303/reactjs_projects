import React from 'react';
import './App.css'

const Display = ({days,hours,minutes,seconds}) => {
    return (
        <div className='card card-body'>
            <h1>SALES COUNTDOWN TIMER</h1>
            <h2>Offer ends in</h2>
            <div className='row justify-content-center text-center '>
                <div className='col-sm-4 ' id='pad'>
                    <table>
                        <tbody>
                            <tr>
                                <th>{days }</th>&nbsp;&nbsp;
                                <th>{hours }</th>&nbsp;&nbsp;
                                <th>{minutes }</th>&nbsp;&nbsp;
                                <th>{seconds }</th>&nbsp;&nbsp;
                            </tr> 
                            <tr>
                                <td>DAYS</td>&nbsp;&nbsp;
                                <td>HOURS</td>&nbsp;&nbsp;
                                <td>MINUTES</td>&nbsp;&nbsp;
                                <td>SECONDS</td>&nbsp;&nbsp;
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Display