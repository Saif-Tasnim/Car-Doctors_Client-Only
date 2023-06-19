import React from 'react';

const ServiceTable = ({ list, handleCrossBtn, handleConfirmBtn }) => {

    const { _id, customerName, img, date, amount, status } = list;

    return (
        <tr>
            <th>
                <button className="btn btn-circle" onClick={() => handleCrossBtn(_id)}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </th>
            <td>

                <div className="avatar">
                    <div className="rounded w-24 h-24">
                        <img src={img} alt="Avatar Tailwind CSS Component" />
                    </div>


                </div>
            </td>
            <td>

                {customerName}

            </td>
            <td>{date}</td>
            <td>{amount}</td>
            <th>
                {
                    status ?
                        <button className="btn btn-error text-white btn-md"> Confirmed </button>
                        :
                        <button className="btn btn-ghost btn-md" onClick={() => handleConfirmBtn(_id)}> Confirm ? </button>
                }

            </th>
        </tr>
    );
};

export default ServiceTable;