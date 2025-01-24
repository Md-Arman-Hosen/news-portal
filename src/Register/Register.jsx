import Navbar from "../Pages/Shared/Navbar/Navbar";

const Register = () => {
    return (
        <div>
        <Navbar></Navbar>
        <div>
            <h1 className="text-3xl text-center font-bold">Register</h1>
            <form className="md:w-1/3 w-1/2 mx-auto">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="name" placeholder="Enter Your Name" className="input input-bordered"  />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">PhotoUrl</span>
                    </label>
                    <input type="url" placeholder="Enter Photo Link" className="input input-bordered"  />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" placeholder="Enter Your Email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" placeholder="Enter Your Password" className="input input-bordered" required />
                    <label className="label">
                        <a href="login" className="label-text-alt link link-hover">Already Have an Account?</a>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">SignUp</button>
                </div>
            </form>
        </div>
    </div>
    );
};

export default Register;