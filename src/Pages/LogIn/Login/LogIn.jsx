import React from 'react';
import img from '../../../assets/images/login/login.svg'
import { Link } from 'react-router-dom';

const LogIn = () => {

    const handleLogIn = (event) => {
        event.preventDefault();
        const form = event.target;

        const email = form.email.value;
        const password = form.password.value;

    }
    return (
        <div className="min-h-screen mb-16 mt-11">
            <div className="flex flex-col lg:flex-row justify-center">

                <div className='w-[460px] h-[450px] mr-16 mt-16'
                >
                    <img src={img} className='w-[93%] h-[95%] mx-auto' alt="" />

                </div>

                <div className="card flex-shrink-0 w-full  max-w-sm shadow-2xl bg-base-100 ">
                    <div className="card-body space-y-2">
                        <h1 className="text-3xl font-bold text-center mb-6 mt-4">Login</h1>

                        {/* form start */}
                        <form onSubmit={handleLogIn}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="Email" className="input input-bordered ml-2" name='email' />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="Password" className="input input-bordered ml-2" name="password" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>

                            <div className="form-control mt-6">
                                <input type="submit" className="btn bg-[#FF3811] text-white hover:text-black" value="LogIn"
                                />
                            </div>

                        </form>

                        <p className='text-[#737373] text-base'>New To Car Doctors ? <Link to='/register'> <span className='text-[#FF3811]'>Sign Up</span> </Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogIn;