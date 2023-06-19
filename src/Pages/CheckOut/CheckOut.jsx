import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';

const CheckOut = () => {
    const { user } = useContext(AuthContext);

    const { _id, title, service_id, price, img } = useLoaderData();

    const today = new Date().toISOString().split('T')[0];

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;

        const name = form.name.value;
        const email = form.email.value;
        const date = form.date.value;
        const amount = form.amount.value;

        const order = {
            customerName: name,
            email,
            date,
            img,
            amount
        };

        fetch('http://localhost:5000/bookingData', {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(order),
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire(
                        'Service Added!',
                        "Your data successfully recorded",
                        'success'
                    )
                }
            })
    }

    return (
        <div className='mt-11 mb-26'>
            <h1 className='text-center text-3xl font-bold mb-8'>Welcome to CheckOut Page !!!! </h1>

            <h3 className='text-center font-bold text-xl'>Service Name : {title} </h3>

            <form onSubmit={handleSubmit}>
                <div className="card-body">
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-7'>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="name"
                                defaultValue={user?.displayName}
                                name='name'
                                className="input input-bordered" />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered"
                                defaultValue={user?.email}
                                name="email"
                                readOnly
                            />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text"> Date </span>
                            </label>
                            <input type="date" className="input input-bordered"
                                name='date'
                                min={today}
                                required
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Amount</span>
                            </label>
                            <input type="text" placeholder="amount" className="input input-bordered"
                                name='amount'
                                defaultValue={'$ ' + price}
                                readOnly
                            />
                        </div>

                    </div>

                    <div className="form-control mt-6">
                        <button className="btn bg-[orange] btn-block"> Confirm Booking        </button>
                    </div>

                </div>
            </form>
        </div>


    );
};

export default CheckOut;