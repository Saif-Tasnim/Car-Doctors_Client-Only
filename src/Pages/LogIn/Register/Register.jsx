import React, { useContext } from 'react';
import img from '../../../assets/images/login/login.svg'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import Swal from 'sweetalert2';

const Register = () => {

    const { createUser } = useContext(AuthContext);
    const location = useLocation()
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || "/";

    const handleSignUp = (event) => {
        event.preventDefault();
        const form = event.target;

        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const con_pass = form.con_password.value;

        if(password != con_pass){
            Swal.fire({
                title: 'Error!',
                text: "Password did not match",
                icon: 'error',
                confirmButtonText: 'Cool'
            })
        }

        if(password.length < 6 ){
            Swal.fire({
                title: 'Error!',
                text: "Should be more than 6 character",
                icon: 'error',
                confirmButtonText: 'Cool'
            })
        }
        
        

        createUser(email, password)
            .then(res => {
                console.log(res.user);
                Swal.fire(
                    'Good job!',
                    'Successfully created account',
                    'success'
                )
                navigate(from , {replace:true});
            })
            .catch(err => {
                console.error(err.message);
                Swal.fire({
                    title: 'Error!',
                    text: `${err.message}`,
                    icon: 'error',
                    confirmButtonText: 'Oops !'
                })
               
            })

            form.reset();
    }


    return (
        <div className="min-h-screen mb-16 mt-11">
            <div className="flex flex-col lg:flex-row justify-center">

                <div className='w-[460px] h-[450px] mr-16 mt-20'
                >
                    <img src={img} className='w-[93%] h-[95%] mx-auto' alt="" />

                </div>

                <div className="card flex-shrink-0 w-full  max-w-sm shadow-2xl bg-base-100 h-[682px]">
                    <div className="card-body space-y-2">
                        <h1 className="text-3xl font-bold text-center mb-6 mt-4">Sign up</h1>

                        {/* form start */}
                        <form onSubmit={handleSignUp}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="name" placeholder="Name" className="input input-bordered ml-2" name='name' />
                            </div>
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

                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input type="password" placeholder="Confirm Password" className="input input-bordered ml-2" name="con_password" />

                            </div>

                            <div className="form-control mt-6">
                                <input type="submit" className="btn bg-[#FF3811] text-white hover:text-black" value="Sign Up"
                                />
                            </div>

                        </form>

                        <p className='text-[#737373] text-base'>Already Have An Account ? <Link to='/login'> <span className='text-[#FF3811]'>Log In</span> </Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;