import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import ServiceTable from './ServiceTable';
import Swal from 'sweetalert2';

const MyServiceList = () => {
    const { user } = useContext(AuthContext);
    const [myList, setMyList] = useState([]);

    const url = `http://localhost:5000/bookingData?email=${user?.email}`;

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setMyList(data));
    }, [url])

    // button is set in service table
    const handleCrossBtn = (id) => {
        Swal.fire({
            title: 'Are you want to delete this record ? ',
            showCancelButton: true,
            confirmButtonText: 'Delete',
            icon: 'warning',
            dangerMode: true

        }).then((result) => {

            if (result.isConfirmed) {

                fetch(`http://localhost:5000/bookingData/${id}`, {
                    method: "DELETE",
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire('Deleted!', 'Your data is deleted from our records', 'success')

                            const remaining = myList.filter(list => list._id !== id);

                            setMyList(remaining);
                        }
                    });
            }
        })
    }

    const handleConfirmBtn = (id) => {
        fetch(`http://localhost:5000/bookingData/${id}`, {
            method: "PATCH",
            headers: {
                'content-type': "application/json",
            },

            body: JSON.stringify({ status: "Confirmed" })
        })
            .then(res => res.json())
            .then(data => {
                if(data.modifiedCount > 0){
                    Swal.fire(
                        'Good job!',
                        'Data Updated Successfully',
                        'success'
                      )
                    
                    //   after updating any single document every time has to do it ....
                     
                    const remaining = myList.filter(lst => lst._id !== id);

                    const updated = myList.find(lst => lst._id === id);

                    updated.status = "Confirmed" ;

                    const newList = [updated , ...remaining];
                    setMyList(newList);
                }
            });
    }

    if (myList.length === 0) {
        return (

            <div className='flex justify-center items-center mt-20 mb-28'>

                <h1 className='text-5xl font-bold mb-28'>You have not add any booking till now ...</h1>

            </div>
        )
    }

    return (
        <div className='mt-11 mb-26'>
            <h1 className='text-center font-bold text-3xl'> Your All Booking List Is Here </h1>
            <h3 className='text-xl text-center font-bold mt-5 mb-5'>Your Total List : {myList.length} </h3>

            {/* table part start */}

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>

                                </label>
                            </th>
                            <th> Service </th>
                            <th> Name </th>
                            <th> Date </th>
                            <th> Amount </th>
                            <th> Status </th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            myList.map(list => <ServiceTable
                                key={list._id}
                                list={list}
                                handleCrossBtn={handleCrossBtn}
                                handleConfirmBtn={handleConfirmBtn}
                            ></ServiceTable>)
                        }

                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MyServiceList;